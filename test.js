/**
 * Grok StatSig Service Worker (PWA)
 * Intercepts and modifies Next.js chunks to expose window._getStatSig
 */

const CACHE_NAME = 'grok-statsig-modified-v1';
const CHUNK_PATTERN = /\/_next\/static\/chunks\/.*\.js$/;

console.log('[StatSig SW] Service Worker initializing...');

// Install event
self.addEventListener('install', (event) => {
    console.log('[StatSig SW] Installing...');
    self.skipWaiting(); // Activate immediately
});

// Activate event
self.addEventListener('activate', (event) => {
    console.log('[StatSig SW] Activating...');

    // Clean up old caches
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames
                    .filter(name => name.startsWith('grok-statsig-') && name !== CACHE_NAME)
                    .map(name => {
                        console.log('[StatSig SW] Deleting old cache:', name);
                        return caches.delete(name);
                    })
            );
        }).then(() => {
            console.log('[StatSig SW] Activated, claiming clients');
            return self.clients.claim(); // Take control immediately
        })
    );
});

// Fetch event - intercept and modify scripts
self.addEventListener('fetch', (event) => {
    const url = new URL(event.request.url);

    // Only intercept Next.js chunk scripts
    if (!CHUNK_PATTERN.test(url.pathname)) {
        return; // Let browser handle normally
    }

    console.log('[StatSig SW] Intercepting chunk:', url.pathname);

    event.respondWith(handleChunkRequest(event.request));
});

/**
 * Handle chunk script request
 */
async function handleChunkRequest(request) {
    const cache = await caches.open(CACHE_NAME);

    // Check cache first
    const cachedResponse = await cache.match(request);
    if (cachedResponse) {
        console.log('[StatSig SW] Serving from cache:', request.url);
        return cachedResponse;
    }

    try {
        // Fetch original script
        const response = await fetch(request);

        if (!response.ok) {
            console.error('[StatSig SW] Fetch failed:', response.status);
            return response;
        }

        // Clone response to read text
        const clonedResponse = response.clone();
        const scriptText = await clonedResponse.text();

        // Check if script contains x-statsig-id
        if (!scriptText.includes('x-statsig-id')) {
            console.log('[StatSig SW] No x-statsig-id found, serving original');
            return response;
        }

        console.log('[StatSig SW] Found x-statsig-id, modifying script...');

        // Modify script to expose window._getStatSig
        const modifiedScript = modifyScriptToExposeGetStatSig(scriptText);

        // Create new response with modified script
        const modifiedResponse = new Response(modifiedScript, {
            status: response.status,
            statusText: response.statusText,
            headers: response.headers
        });

        // Cache the modified response
        await cache.put(request, modifiedResponse.clone());
        console.log('[StatSig SW] Cached modified script');

        return modifiedResponse;

    } catch (error) {
        console.error('[StatSig SW] Error modifying script:', error);
        // Fallback to original fetch
        return fetch(request);
    }
}

/**
 * Modify script to expose the Z function as window._getStatSig
 */
function modifyScriptToExposeGetStatSig(scriptText) {
    try {
        // Find where x-statsig-id is set
        const statsigPattern = /["']x-statsig-id["']\s*[:\]]\s*(\w+)/g;
        const matches = [...scriptText.matchAll(statsigPattern)];

        if (matches.length === 0) {
            console.warn('[StatSig SW] Could not find x-statsig-id pattern');
            return scriptText;
        }

        // Get signature variable names
        const sigVarCandidates = matches.map(m => m[1]).filter((v, i, a) => a.indexOf(v) === i);
        console.log('[StatSig SW] Signature variables:', sigVarCandidates);

        // Find the function that generates the signature
        // Pattern: variable = await FunctionName(...)
        const awaitZPattern = /(\w+)\s*=\s*await\s+(\w+)\s*\(/g;
        const awaitMatches = [...scriptText.matchAll(awaitZPattern)];

        let zFunctionName = null;
        for (const match of awaitMatches) {
            const [, varName, funcName] = match;
            if (sigVarCandidates.includes(varName)) {
                zFunctionName = funcName;
                console.log('[StatSig SW] Found function name:', zFunctionName);
                break;
            }
        }

        if (!zFunctionName) {
            console.warn('[StatSig SW] Could not identify function name');
            return scriptText;
        }

        // Inject exposure code at the end of the script
        const exposureCode = `
;(function(){
  try {
    if (typeof ${zFunctionName} !== 'undefined') {
      window._getStatSig = ${zFunctionName};
      console.log('[StatSig SW] Exposed window._getStatSig =', ${zFunctionName}.name || '${zFunctionName}');
    } else {
      console.warn('[StatSig SW] Function ${zFunctionName} not found in scope');
    }
  } catch(e) {
    console.error('[StatSig SW] Failed to expose _getStatSig:', e);
  }
})();
`;

        const modifiedScript = scriptText + exposureCode;
        console.log('[StatSig SW] Script modified successfully');

        return modifiedScript;

    } catch (error) {
        console.error('[StatSig SW] Modification error:', error);
        return scriptText;
    }
}

// Message handler for debugging
self.addEventListener('message', (event) => {
    console.log('[StatSig SW] Message received:', event.data);

    if (event.data.type === 'CLEAR_CACHE') {
        event.waitUntil(
            caches.delete(CACHE_NAME).then(() => {
                console.log('[StatSig SW] Cache cleared');
                event.ports[0].postMessage({ success: true });
            })
        );
    }
});
