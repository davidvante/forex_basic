// ===== Chapter Content Data =====
const chapters = {
    1: {
        title: "CHƯƠNG 1: TỔNG QUAN VỀ THỊ TRƯỜNG FOREX",
        content: `
<h1>Chương 1: Tổng Quan Về Thị Trường Forex</h1>

<h2>1. Forex là gì?</h2>
<p><strong>Forex</strong> (viết tắt của <strong>Foreign Exchange</strong>) hay còn gọi là thị trường ngoại hối, là thị trường tài chính lớn nhất và có tính thanh khoản cao nhất trên thế giới.</p>

<h3>Những con số ấn tượng:</h3>
<table>
    <tr><th>Chỉ số</th><th>Giá trị</th></tr>
    <tr><td>Khối lượng giao dịch hàng ngày</td><td><strong>>7.5 nghìn tỷ USD</strong></td></tr>
    <tr><td>Hoạt động</td><td><strong>24 giờ/ngày, 5 ngày/tuần</strong></td></tr>
    <tr><td>Số lượng cặp tiền tệ</td><td><strong>Hơn 100 cặp</strong></td></tr>
</table>

<h2>2. Các thành phần tham gia thị trường</h2>
<p>Thị trường Forex không có một sàn giao dịch tập trung như chứng khoán. Nó hoạt động theo mô hình <strong>OTC (Over-the-Counter)</strong> - giao dịch phi tập trung.</p>

<table>
    <tr><th>Thành phần</th><th>Vai trò</th></tr>
    <tr><td><strong>Ngân hàng Trung ương</strong></td><td>Điều tiết chính sách tiền tệ, can thiệp tỷ giá</td></tr>
    <tr><td><strong>Ngân hàng Thương mại</strong></td><td>Giao dịch khối lượng lớn cho khách hàng và tự doanh</td></tr>
    <tr><td><strong>Quỹ đầu tư (Hedge Funds)</strong></td><td>Đầu cơ để kiếm lợi nhuận từ biến động tỷ giá</td></tr>
    <tr><td><strong>Công ty đa quốc gia</strong></td><td>Đổi tiền cho hoạt động kinh doanh quốc tế</td></tr>
    <tr><td><strong>Nhà giao dịch cá nhân</strong></td><td>Chúng ta - những người giao dịch thông qua các sàn môi giới</td></tr>
</table>

<blockquote>⚠️ <strong>Lưu ý quan trọng:</strong> Retail Traders chỉ chiếm khoảng <strong>5-6%</strong> tổng khối lượng giao dịch. Phần lớn là các tổ chức lớn (Smart Money).</blockquote>

<h2>3. Cách thức thị trường vận hành</h2>
<p>Trong Forex, bạn luôn giao dịch <strong>một cặp tiền tệ</strong>. Ví dụ: <strong>EUR/USD</strong></p>
<pre><code>EUR/USD = 1.1000</code></pre>
<p><strong>Giải thích:</strong></p>
<ul>
    <li><strong>EUR (Euro)</strong> = Đồng tiền cơ sở (Base Currency)</li>
    <li><strong>USD (US Dollar)</strong> = Đồng tiền định giá (Quote Currency)</li>
    <li><strong>1.1000</strong> = Cần 1.1000 USD để mua 1 EUR</li>
</ul>

<h3>Khi bạn MUA (Buy/Long):</h3>
<ul>
    <li>Bạn <strong>mua đồng tiền cơ sở</strong> (EUR)</li>
    <li>Bạn <strong>bán đồng tiền định giá</strong> (USD)</li>
    <li>Bạn kỳ vọng EUR sẽ <strong>tăng giá</strong> so với USD</li>
</ul>

<h3>Khi bạn BÁN (Sell/Short):</h3>
<ul>
    <li>Bạn <strong>bán đồng tiền cơ sở</strong> (EUR)</li>
    <li>Bạn <strong>mua đồng tiền định giá</strong> (USD)</li>
    <li>Bạn kỳ vọng EUR sẽ <strong>giảm giá</strong> so với USD</li>
</ul>

<h2>4. Thời gian giao dịch (Trading Sessions)</h2>
<p>Thị trường hoạt động <strong>24 giờ một ngày</strong>, từ <strong>Thứ 2 đến Thứ 6</strong> (tính theo giờ Việt Nam).</p>

<table>
    <tr><th>Phiên</th><th>Thời gian</th><th>Đặc điểm</th></tr>
    <tr><td>🇦🇺 <strong>Sydney</strong></td><td>05:00 - 14:00</td><td>Khởi đầu tuần giao dịch, thanh khoản thấp</td></tr>
    <tr><td>🇯🇵 <strong>Tokyo</strong></td><td>06:00 - 15:00</td><td>Cặp tiền JPY biến động mạnh</td></tr>
    <tr><td>🇬🇧 <strong>London</strong></td><td>14:00 - 23:00</td><td>Phiên sôi động nhất, thanh khoản cao nhất</td></tr>
    <tr><td>🇺🇸 <strong>New York</strong></td><td>19:00 - 04:00</td><td>Tin tức Mỹ, biến động mạnh</td></tr>
</table>

<blockquote>🔥 <strong>19:00 - 23:00 (Giờ VN)</strong> là thời điểm phiên London và New York <strong>giao nhau</strong>. Đây là lúc thị trường có thanh khoản và biến động mạnh nhất trong ngày.</blockquote>

<h2>5. Lợi ích và Rủi ro khi giao dịch Forex</h2>

<h3>✅ Lợi ích:</h3>
<table>
    <tr><th>Lợi ích</th><th>Giải thích</th></tr>
    <tr><td><strong>Thanh khoản cao</strong></td><td>Luôn có người mua và bán, lệnh được khớp ngay lập tức</td></tr>
    <tr><td><strong>Đòn bẩy cao</strong></td><td>Có thể kiểm soát số tiền lớn với vốn nhỏ (1:100, 1:500...)</td></tr>
    <tr><td><strong>Giao dịch hai chiều</strong></td><td>Kiếm tiền cả khi giá tăng (Buy) lẫn giá giảm (Sell)</td></tr>
    <tr><td><strong>Chi phí thấp</strong></td><td>Spread nhỏ, không phí hoa hồng (với nhiều sàn)</td></tr>
    <tr><td><strong>Linh hoạt thời gian</strong></td><td>Giao dịch 24/5, phù hợp mọi lịch trình</td></tr>
</table>

<h3>❌ Rủi ro:</h3>
<table>
    <tr><th>Rủi ro</th><th>Giải thích</th></tr>
    <tr><td><strong>Đòn bẩy là con dao hai lưỡi</strong></td><td>Lợi nhuận x100, nhưng thua lỗ cũng x100</td></tr>
    <tr><td><strong>Biến động không lường trước</strong></td><td>Tin tức bất ngờ có thể khiến giá bay hàng trăm pips</td></tr>
    <tr><td><strong>Tâm lý dễ bị ảnh hưởng</strong></td><td>FOMO, sợ hãi, tham lam dẫn đến quyết định sai lầm</td></tr>
    <tr><td><strong>Sàn không uy tín</strong></td><td>Có những sàn lừa đảo, không rút được tiền</td></tr>
</table>

<h2>6. Cách bắt đầu đúng cho người mới</h2>
<ol>
    <li>Học nền tảng chương 1 → chương 2 (thuật ngữ, pip/lot, lệnh...).</li>
    <li>Dùng <strong>tài khoản Demo</strong> ít nhất 2–4 tuần để luyện thao tác và quan sát phiên.</li>
    <li>Chỉ theo dõi <strong>1–2 cặp chính</strong> (ví dụ EUR/USD, GBP/USD) để tránh quá tải.</li>
    <li>Ghi lại nhận xét/nhật ký quan sát.</li>
    <li>Ưu tiên bảo vệ vốn và kỷ luật.</li>
</ol>

<h2>📝 Bài tập Chương 1</h2>
<div class="exercises-container">
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">1</span>
            <span class="exercise-text">Nếu bạn mua cặp GBP/USD, bạn đang kỳ vọng điều gì?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Bạn đang <strong>mua GBP</strong> và <strong>bán USD</strong>, kỳ vọng <strong>GBP mạnh lên so với USD</strong> → GBP/USD tăng.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">2</span>
            <span class="exercise-text">Khung giờ nào trong ngày có thanh khoản cao nhất (theo giờ Việt Nam)?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Khung giờ <strong>19:00–23:00 (giờ VN)</strong> khi London giao nhau với New York.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">3</span>
            <span class="exercise-text">Thực hành: Mở một tài khoản Demo miễn phí trên sàn uy tín và quan sát biến động giá.</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Tạo tài khoản Demo, mở biểu đồ EUR/USD, GBP/USD và quan sát ở các khung giờ khác nhau.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">4</span>
            <span class="exercise-text">Trong cặp EUR/USD, đâu là đồng tiền cơ sở và đâu là đồng tiền định giá?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content"><strong>EUR</strong> là base (cơ sở), <strong>USD</strong> là quote (định giá).</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">5</span>
            <span class="exercise-text">Nếu EUR/USD = 1.1000, điều này có nghĩa là gì?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Cần <strong>1.1000 USD để mua 1 EUR</strong>.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">6</span>
            <span class="exercise-text">Forex hoạt động theo mô hình OTC là gì?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content"><strong>OTC (Over-the-Counter)</strong> là thị trường phi tập trung, giao dịch qua mạng lưới các bên tham gia thay vì một sàn tập trung.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">7</span>
            <span class="exercise-text">Kể tên ít nhất 3 nhóm tham gia thị trường Forex và vai trò chính của họ.</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Ngân hàng Trung ương (điều tiết), Ngân hàng thương mại (giao dịch khối lượng lớn), Quỹ đầu tư/Hedge funds (đầu cơ), Công ty đa quốc gia (đổi tiền), Retail traders (cá nhân).</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">8</span>
            <span class="exercise-text">Retail Traders chiếm khoảng bao nhiêu % tổng khối lượng giao dịch?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Khoảng <strong>5–6%</strong>. Phần lớn ảnh hưởng đến giá đến từ tổ chức lớn (smart money).</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">9</span>
            <span class="exercise-text">Phiên nào thường có thanh khoản cao nhất?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content"><strong>London</strong> là phiên sôi động nhất; khung giờ giao nhau London–New York (giờ VN) là <strong>19:00–23:00</strong>.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">10</span>
            <span class="exercise-text">Nêu 3 lợi ích và 3 rủi ro khi giao dịch Forex.</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content"><strong>Lợi ích:</strong> thanh khoản cao, đòn bẩy cao, giao dịch hai chiều.<br><strong>Rủi ro:</strong> đòn bẩy là con dao hai lưỡi, biến động do tin tức, tâm lý dễ bị ảnh hưởng.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">11</span>
            <span class="exercise-text">Kể tên 3 yếu tố thường ảnh hưởng đến tỷ giá Forex.</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Lãi suất/chính sách tiền tệ, dữ liệu kinh tế (CPI, GDP, NFP...), tin tức/địa chính trị, tâm lý thị trường.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">12</span>
            <span class="exercise-text">Vì sao giờ các phiên có thể lệch khoảng 1 giờ ở một số giai đoạn trong năm?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Do <strong>Daylight Saving Time (DST)</strong> ở London/New York.</div></div>
    </div>
</div>
        `
    },
    2: {
        title: "CHƯƠNG 2: KIẾN THỨC CƠ BẢN & THUẬT NGỮ",
        content: `
<h1>Chương 2: Kiến Thức Cơ Bản & Thuật Ngữ</h1>

<h2>1. Các loại cặp tiền tệ</h2>
<p>Trong Forex, có <strong>hơn 100 cặp tiền tệ</strong> nhưng chúng được chia thành 3 nhóm chính:</p>

<h3>🔹 Major Pairs (Cặp chính)</h3>
<table>
    <tr><th>Cặp tiền</th><th>Tên gọi</th><th>Biệt danh</th></tr>
    <tr><td>EUR/USD</td><td>Euro / US Dollar</td><td><strong>Fiber</strong></td></tr>
    <tr><td>GBP/USD</td><td>British Pound / US Dollar</td><td><strong>Cable</strong></td></tr>
    <tr><td>USD/JPY</td><td>US Dollar / Japanese Yen</td><td><strong>Gopher</strong></td></tr>
    <tr><td>AUD/USD</td><td>Australian Dollar / US Dollar</td><td><strong>Aussie</strong></td></tr>
    <tr><td>USD/CAD</td><td>US Dollar / Canadian Dollar</td><td><strong>Loonie</strong></td></tr>
    <tr><td>NZD/USD</td><td>New Zealand Dollar / US Dollar</td><td><strong>Kiwi</strong></td></tr>
</table>

<h3>🔸 Minor Pairs (Cặp phụ / Cross)</h3>
<p>Các cặp tiền <strong>không chứa USD</strong> nhưng bao gồm các đồng tiền mạnh: EUR/GBP, EUR/JPY, GBP/JPY...</p>

<blockquote>⚠️ <strong>Cảnh báo:</strong> Exotic pairs có <strong>spread rất cao</strong> và <strong>biến động khó lường</strong>. Không khuyến khích cho người mới.</blockquote>

<h2>2. Pip và Point</h2>
<p><strong>Pip</strong> (Percentage in Point) là đơn vị đo lường sự thay đổi giá nhỏ nhất của một cặp tiền tệ.</p>

<table>
    <tr><th>Loại cặp tiền</th><th>Vị trí Pip</th><th>Ví dụ</th></tr>
    <tr><td>Hầu hết các cặp</td><td>Chữ số thập phân <strong>thứ 4</strong></td><td>EUR/USD: 1.1000 → 1.1001 = +1 pip</td></tr>
    <tr><td>Cặp có JPY</td><td>Chữ số thập phân <strong>thứ 2</strong></td><td>USD/JPY: 150.00 → 150.01 = +1 pip</td></tr>
</table>

<pre><code>1 Pip = 10 Points</code></pre>

<h3>Giá trị 1 pip (ước tính nhanh)</h3>
<ul>
    <li><strong>1.0 lot ≈ $10/pip</strong></li>
    <li><strong>0.1 lot ≈ $1/pip</strong></li>
    <li><strong>0.01 lot ≈ $0.10/pip</strong></li>
</ul>

<h2>3. Lot (Khối lượng giao dịch)</h2>
<table>
    <tr><th>Loại Lot</th><th>Số đơn vị tiền tệ</th><th>Giá trị 1 Pip</th></tr>
    <tr><td><strong>Standard Lot</strong> (1.0)</td><td>100,000</td><td>~$10</td></tr>
    <tr><td><strong>Mini Lot</strong> (0.1)</td><td>10,000</td><td>~$1</td></tr>
    <tr><td><strong>Micro Lot</strong> (0.01)</td><td>1,000</td><td>~$0.10</td></tr>
    <tr><td><strong>Nano Lot</strong> (0.001)</td><td>100</td><td>~$0.01</td></tr>
</table>

<h2>4. Đòn bẩy (Leverage) và Ký quỹ (Margin)</h2>

<table>
    <tr><th>Đòn bẩy</th><th>Ý nghĩa</th><th>Margin cần có</th></tr>
    <tr><td>1:10</td><td>$1 của bạn = $10 giao dịch</td><td>10%</td></tr>
    <tr><td>1:50</td><td>$1 của bạn = $50 giao dịch</td><td>2%</td></tr>
    <tr><td>1:100</td><td>$1 của bạn = $100 giao dịch</td><td>1%</td></tr>
    <tr><td>1:500</td><td>$1 của bạn = $500 giao dịch</td><td>0.2%</td></tr>
</table>

<blockquote>⚠️ <strong>CẢNH BÁO VỀ ĐÒN BẨY:</strong> Đòn bẩy là con dao hai lưỡi! Với đòn bẩy 1:100, chỉ cần giá đi ngược 1% là bạn <strong>mất hết 100% vốn</strong>.</blockquote>

<h2>5. Spread và Commission</h2>
<p><strong>Spread</strong> là sự chênh lệch giữa giá <strong>Bid (Bán)</strong> và giá <strong>Ask (Mua)</strong>.</p>

<pre><code>EUR/USD
Bid: 1.1000  |  Ask: 1.1002
Spread = 1.1002 - 1.1000 = 0.0002 = 2 pips</code></pre>

<h2>6. Các loại lệnh giao dịch</h2>

<h3>Lệnh thị trường (Market Order)</h3>
<table>
    <tr><th>Loại lệnh</th><th>Mô tả</th></tr>
    <tr><td><strong>Buy (Long)</strong></td><td>Mua ngay lập tức ở giá Ask hiện tại</td></tr>
    <tr><td><strong>Sell (Short)</strong></td><td>Bán ngay lập tức ở giá Bid hiện tại</td></tr>
</table>

<h3>Lệnh chờ (Pending Order)</h3>
<table>
    <tr><th>Loại lệnh</th><th>Sử dụng khi</th></tr>
    <tr><td><strong>Buy Limit</strong></td><td>Muốn mua ở giá <strong>thấp hơn</strong> giá hiện tại</td></tr>
    <tr><td><strong>Sell Limit</strong></td><td>Muốn bán ở giá <strong>cao hơn</strong> giá hiện tại</td></tr>
    <tr><td><strong>Buy Stop</strong></td><td>Muốn mua ở giá <strong>cao hơn</strong> giá hiện tại (breakout)</td></tr>
    <tr><td><strong>Sell Stop</strong></td><td>Muốn bán ở giá <strong>thấp hơn</strong> giá hiện tại (breakdown)</td></tr>
</table>

<blockquote>💡 <strong>Mẹo nhớ nhanh:</strong> <strong>Limit = chờ giá tốt hơn</strong> (mua thấp/bán cao). <strong>Stop = chờ phá vỡ</strong> (mua cao/bán thấp).</blockquote>

<h2>📝 Bài tập Chương 2</h2>
<div class="exercises-container">
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">1</span>
            <span class="exercise-text">Nếu bạn vào lệnh Sell 0.05 lot EUR/USD và giá giảm 30 pips, bạn lời bao nhiêu?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Với EUR/USD, 1.0 lot ≈ $10/pip ⇒ 0.05 lot ≈ $0.5/pip. Giá giảm 30 pips khi Sell ⇒ <strong>lãi ≈ 30 × $0.5 = $15</strong>.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">2</span>
            <span class="exercise-text">Với vốn $500 và đòn bẩy 1:100, bạn có thể giao dịch tối đa bao nhiêu lot?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Đòn bẩy 1:100 ⇒ margin ~1%. Với tài khoản $500, notional tối đa ≈ $500 × 100 = $50,000 ⇒ tương đương <strong>0.5 lot</strong>.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">3</span>
            <span class="exercise-text">Thực hành: Mở tài khoản Demo và thử đặt các loại lệnh Pending Order.</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Thử đặt đủ 4 lệnh chờ (Buy Limit/Sell Limit/Buy Stop/Sell Stop) với khối lượng nhỏ 0.01 lot.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">4</span>
            <span class="exercise-text">EUR/USD tăng từ 1.10500 lên 1.10537. Giá tăng bao nhiêu pips và bao nhiêu points?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">1.10500 → 1.10537 là +0.00037 ⇒ <strong>3.7 pips = 37 points</strong>.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">5</span>
            <span class="exercise-text">USD/JPY tăng từ 150.00 lên 150.25. Giá tăng bao nhiêu pips?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Với cặp JPY, pip ở chữ số thập phân thứ 2: 150.00 → 150.25 ⇒ <strong>25 pips</strong>.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">6</span>
            <span class="exercise-text">Với EUR/USD, nếu bạn vào lệnh 0.20 lot thì 1 pip tương đương khoảng bao nhiêu USD?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">1.0 lot ≈ $10/pip ⇒ 0.20 lot ≈ <strong>$2/pip</strong>.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">7</span>
            <span class="exercise-text">Nếu spread EUR/USD là 2 pips, bạn vào lệnh 0.10 lot thì chi phí spread là bao nhiêu USD?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">0.10 lot ≈ $1/pip. Spread 2 pips ⇒ chi phí ≈ <strong>2 × $1 = $2</strong>.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">8</span>
            <span class="exercise-text">Tài khoản Raw thu commission $3/lot/chiều. Bạn vào 0.50 lot và đóng lệnh. Tổng commission là bao nhiêu?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">$3/lot/chiều ⇒ 0.50 lot: $1.5/chiều. Mở + đóng = 2 chiều ⇒ <strong>$3</strong>.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">9</span>
            <span class="exercise-text">Tài khoản $1,000, đòn bẩy 1:100. Bạn mở 0.30 lot EUR/USD. Used margin xấp xỉ bao nhiêu USD?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">0.30 lot ⇒ notional ≈ 0.30 × $100,000 = $30,000. Leverage 1:100 ⇒ used margin ≈ <strong>$300</strong>.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">10</span>
            <span class="exercise-text">Tiếp câu 9, giả sử Equity hiện tại là $950. Margin level xấp xỉ bao nhiêu %?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Margin level = (Equity / Used Margin) × 100% ≈ (950 / 300) × 100% ≈ <strong>316.7%</strong>.</div></div>
    </div>
</div>
        `
    },
    3: {
        title: "CHƯƠNG 3: PHÂN TÍCH KỸ THUẬT (NỀN TẢNG)",
        content: `
<h1>Chương 3: Phân Tích Kỹ Thuật (Nền Tảng)</h1>

<h2>1. Tổng quan về Phân tích Kỹ thuật</h2>
<p><strong>Phân tích kỹ thuật (Technical Analysis - TA)</strong> là phương pháp dự đoán xu hướng giá trong tương lai dựa trên việc nghiên cứu <strong>dữ liệu giá trong quá khứ</strong>.</p>

<h3>Ba nguyên tắc cơ bản:</h3>
<table>
    <tr><th>Nguyên tắc</th><th>Giải thích</th></tr>
    <tr><td><strong>Giá phản ánh tất cả</strong></td><td>Mọi thông tin đều được thể hiện trong giá</td></tr>
    <tr><td><strong>Giá di chuyển theo xu hướng</strong></td><td>Giá có xu hướng tiếp tục di chuyển theo một hướng</td></tr>
    <tr><td><strong>Lịch sử có xu hướng lặp lại</strong></td><td>Các mô hình giá trong quá khứ thường lặp lại</td></tr>
</table>

<h2>2. Biểu đồ nến Nhật (Japanese Candlesticks)</h2>

<h3>Cấu tạo một cây nến:</h3>
<table>
    <tr><th>Thành phần</th><th>Mô tả</th></tr>
    <tr><td><strong>Thân nến (Body)</strong></td><td>Khoảng cách giữa giá mở cửa và đóng cửa</td></tr>
    <tr><td><strong>Râu trên (Upper Wick)</strong></td><td>Giá cao nhất trong phiên</td></tr>
    <tr><td><strong>Râu dưới (Lower Wick)</strong></td><td>Giá thấp nhất trong phiên</td></tr>
</table>

<h3>Hai loại nến cơ bản:</h3>
<table>
    <tr><th>Loại nến</th><th>Đặc điểm</th><th>Ý nghĩa</th></tr>
    <tr><td>🟢 <strong>Nến tăng (Bullish)</strong></td><td>Giá đóng cửa > Giá mở cửa</td><td>Lực mua mạnh hơn</td></tr>
    <tr><td>🔴 <strong>Nến giảm (Bearish)</strong></td><td>Giá đóng cửa < Giá mở cửa</td><td>Lực bán mạnh hơn</td></tr>
</table>

<h3>Các mô hình nến quan trọng:</h3>
<table>
    <tr><th>Mô hình</th><th>Hình dạng</th><th>Ý nghĩa</th></tr>
    <tr><td><strong>Doji</strong></td><td>Thân rất nhỏ, râu dài</td><td>Thị trường do dự, có thể đảo chiều</td></tr>
    <tr><td><strong>Hammer</strong></td><td>Thân nhỏ phía trên, râu dưới dài</td><td>Tín hiệu đảo chiều tăng (ở đáy)</td></tr>
    <tr><td><strong>Shooting Star</strong></td><td>Thân nhỏ phía dưới, râu trên dài</td><td>Tín hiệu đảo chiều giảm (ở đỉnh)</td></tr>
    <tr><td><strong>Engulfing</strong></td><td>Nến sau "nuốt" hoàn toàn nến trước</td><td>Tín hiệu đảo chiều mạnh</td></tr>
</table>

<blockquote>💡 <strong>Nguyên tắc:</strong> Mô hình nến có ý nghĩa nhất khi xuất hiện tại <strong>vùng S/R</strong>, <strong>trendline</strong>, hoặc sau một nhịp giá chạy mạnh.</blockquote>

<h2>3. Hỗ trợ (Support) và Kháng cự (Resistance)</h2>
<table>
    <tr><th>Khái niệm</th><th>Mô tả</th></tr>
    <tr><td><strong>Hỗ trợ (Support)</strong></td><td>Vùng giá mà lực mua đủ mạnh để ngăn giá giảm thêm</td></tr>
    <tr><td><strong>Kháng cự (Resistance)</strong></td><td>Vùng giá mà lực bán đủ mạnh để ngăn giá tăng thêm</td></tr>
</table>

<blockquote>💡 <strong>Khi hỗ trợ bị phá vỡ, nó trở thành kháng cự.</strong><br>
<strong>Khi kháng cự bị phá vỡ, nó trở thành hỗ trợ.</strong></blockquote>

<h2>4. Xu hướng (Trend)</h2>
<table>
    <tr><th>Loại</th><th>Đặc điểm</th><th>Chiến lược</th></tr>
    <tr><td><strong>Uptrend (Tăng)</strong></td><td>HH, HL (Đỉnh cao hơn, Đáy cao hơn)</td><td>Ưu tiên BUY</td></tr>
    <tr><td><strong>Downtrend (Giảm)</strong></td><td>LH, LL (Đỉnh thấp hơn, Đáy thấp hơn)</td><td>Ưu tiên SELL</td></tr>
    <tr><td><strong>Sideways</strong></td><td>Giá dao động trong một biên độ</td><td>Mua ở support, bán ở resistance</td></tr>
</table>

<blockquote>📌 <strong>"Trend is your friend"</strong> - Xu hướng là bạn của bạn. Luôn giao dịch <strong>theo xu hướng</strong> chứ không chống lại nó.</blockquote>

<h2>5. Đường xu hướng (Trendlines)</h2>
<h3>Quy tắc vẽ Trendline hợp lệ:</h3>
<ol>
    <li><strong>Tối thiểu 2 điểm chạm</strong> (3 điểm chạm = trendline mạnh)</li>
    <li><strong>Không cắt qua thân nến</strong></li>
    <li><strong>Góc nghiêng hợp lý</strong></li>
</ol>

<h2>6. Các khung thời gian (Timeframes)</h2>
<table>
    <tr><th>Nhóm</th><th>Timeframes</th><th>Phù hợp với</th></tr>
    <tr><td><strong>Ngắn hạn</strong></td><td>M1, M5, M15</td><td>Scalping</td></tr>
    <tr><td><strong>Trung hạn</strong></td><td>M30, H1, H4</td><td>Day Trading, Swing Trading</td></tr>
    <tr><td><strong>Dài hạn</strong></td><td>D1, W1, MN</td><td>Position Trading</td></tr>
</table>

<blockquote>🔑 <strong>Quy tắc vàng:</strong> Phân tích xu hướng ở khung lớn, vào lệnh ở khung nhỏ.</blockquote>

<h2>📝 Bài tập Chương 3</h2>
<div class="exercises-container">
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">1</span>
            <span class="exercise-text">Mở biểu đồ EUR/USD H4, tìm các mẫu nến Doji và Engulfing trong 2 tuần gần nhất.</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Doji = thân nhỏ, thể hiện do dự; Engulfing = nến sau "nuốt" nến trước. Ưu tiên đánh dấu khi chúng xuất hiện tại vùng S/R.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">2</span>
            <span class="exercise-text">Vẽ trendline hợp lệ trên biểu đồ GBP/USD D1.</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Trendline hợp lệ có tối thiểu <strong>2 điểm chạm</strong> (3 điểm càng tốt), không cắt qua thân nến, góc hợp lý.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">3</span>
            <span class="exercise-text">Tìm 3 vùng hỗ trợ và 3 vùng kháng cự quan trọng trên XAU/USD H4.</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Vùng S/R mạnh thường là nơi có nhiều lần chạm/đảo chiều, gần mức tròn/tâm lý.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">4</span>
            <span class="exercise-text">Chọn một cặp tiền, xác định xu hướng trên D1/H4, sau đó chuyển xuống H1 để tìm vùng pullback hợp lý.</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">D1/H4 xác định xu hướng + vùng quan trọng; H1 chờ pullback về vùng; khung nhỏ hơn chỉ vào khi có tín hiệu rõ và có SL.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">5</span>
            <span class="exercise-text">Tìm một ví dụ phá vỡ hỗ trợ/kháng cự và hồi kiểm tra lại (retest).</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Break thật thường có nến <strong>đóng cửa</strong> vượt vùng rõ ràng, sau đó retest giữ vững; break giả hay có râu quét rồi đóng cửa trở lại trong vùng.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">6</span>
            <span class="exercise-text">Nhìn 20–50 cây nến gần nhất trên H4, bạn đang thấy HH/HL hay LH/LL?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">HH/HL ⇒ uptrend; LH/LL ⇒ downtrend; nếu xen kẽ và biên rõ ⇒ sideways/range.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">7</span>
            <span class="exercise-text">Tìm một cây nến có râu dưới dài tại vùng hỗ trợ. Bạn kỳ vọng điều gì sẽ xảy ra?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Râu dưới dài tại hỗ trợ thường hàm ý bị từ chối giá thấp ⇒ kỳ vọng bật lên. Ý tưởng sai khi giá đóng cửa phá thủng vùng hỗ trợ.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">8</span>
            <span class="exercise-text">Nêu 3 tiêu chí để một trendline được xem là "hợp lệ".</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">(1) ≥ 2 điểm chạm, (2) không cắt qua thân nến, (3) góc nghiêng hợp lý.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">9</span>
            <span class="exercise-text">Tìm một mô hình (Triangle/Flag/Rectangle) trên H1 hoặc H4.</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Xác nhận breakout bằng nến đóng cửa; SL đặt ngoài biên mô hình; TP theo measured move hoặc vùng S/R kế tiếp.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">10</span>
            <span class="exercise-text">Chọn một vùng S/R quan trọng và viết: điều kiện vào lệnh, SL đặt ở đâu, TP đặt ở đâu.</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Điều kiện vào lệnh dựa trên phản ứng tại vùng; SL đặt tại điểm invalidation; TP về vùng đối diện hoặc theo RR tối thiểu 1:2.</div></div>
    </div>
</div>
        `
    },
    4: {
        title: "CHƯƠNG 4: QUẢN LÝ RỦI RO & TÂM LÝ GIAO DỊCH",
        content: `
<h1>Chương 4: Quản Lý Rủi Ro & Tâm Lý Giao Dịch</h1>

<h2>1. Tại sao Quản lý Rủi ro là QUAN TRỌNG NHẤT?</h2>
<blockquote>💀 <strong>Sự thật:</strong> 90% trader thua lỗ, và nguyên nhân #1 là <strong>KHÔNG QUẢN LÝ RỦI RO</strong>.</blockquote>

<pre><code>Chiến lược tốt + Quản lý rủi ro kém = THUA
Chiến lược trung bình + Quản lý rủi ro tốt = THẮNG</code></pre>

<h2>2. Quy tắc 1-2% (The 1-2% Rule)</h2>
<blockquote>🔐 <strong>KHÔNG BAO GIỜ RỦI RO QUÁ 1-2% TÀI KHOẢN CHO MỘT LỆNH</strong></blockquote>

<table>
    <tr><th>Vốn</th><th>1% rủi ro</th><th>2% rủi ro</th></tr>
    <tr><td>$1,000</td><td>$10</td><td>$20</td></tr>
    <tr><td>$10,000</td><td>$100</td><td>$200</td></tr>
    <tr><td>$100,000</td><td>$1,000</td><td>$2,000</td></tr>
</table>

<h2>3. Cách tính Lot Size</h2>
<pre><code>Lot Size = (Số tiền rủi ro) / (SL pips × Giá trị 1 pip)</code></pre>

<p><strong>Ví dụ:</strong> Tài khoản $10,000, rủi ro 1% = $100, SL 50 pips</p>
<pre><code>Lot = $100 / (50 × $10) = 0.2 lot</code></pre>

<h2>4. Tỷ lệ Risk/Reward (R:R)</h2>
<table>
    <tr><th>R:R</th><th>Cần win rate để hòa vốn</th></tr>
    <tr><td>1:1</td><td>50%</td></tr>
    <tr><td>1:2</td><td>34%</td></tr>
    <tr><td>1:3</td><td>25%</td></tr>
</table>

<blockquote>💡 <strong>Quy tắc:</strong> Tối thiểu R:R = 1:2</blockquote>

<h2>5. Tâm lý Giao dịch</h2>
<table>
    <tr><th>Vấn đề</th><th>Giải pháp</th></tr>
    <tr><td><strong>FOMO</strong></td><td>"Thị trường luôn có cơ hội mới"</td></tr>
    <tr><td><strong>Revenge Trading</strong></td><td>Nghỉ 1 ngày sau 2-3 lệnh thua</td></tr>
    <tr><td><strong>Tham lam</strong></td><td>Tuân thủ TP đã đặt</td></tr>
    <tr><td><strong>Sợ hãi</strong></td><td>Tin tưởng hệ thống</td></tr>
</table>

<h3>Drawdown và toán học phục hồi:</h3>
<table>
    <tr><th>Lỗ (Drawdown)</th><th>Cần lời để về hòa vốn</th></tr>
    <tr><td>-10%</td><td>+11.1%</td></tr>
    <tr><td>-20%</td><td>+25%</td></tr>
    <tr><td>-50%</td><td>+100%</td></tr>
</table>

<blockquote>💡 Mục tiêu số 1 là <strong>không để drawdown lớn</strong>.</blockquote>

<h2>6. 10 Quy tắc Kỷ luật</h2>
<ol>
    <li>Luôn đặt Stop Loss</li>
    <li>Rủi ro tối đa 1-2%</li>
    <li>Không giao dịch trả thù</li>
    <li>Tuân thủ kế hoạch</li>
    <li>Không dời SL xa hơn</li>
    <li>Chờ setup đủ điều kiện</li>
    <li>Ghi nhật ký mỗi lệnh</li>
    <li>Nghỉ ngơi khi thua liên tiếp</li>
    <li>Không trade khi cảm xúc bất ổn</li>
    <li>Trading là Marathon, không phải Sprint</li>
</ol>

<h2>📝 Bài tập Chương 4</h2>
<div class="exercises-container">
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">1</span>
            <span class="exercise-text"><strong>Tính lot:</strong> Tài khoản $2,000, rủi ro 1%/lệnh, SL 25 pips, giả sử 0.1 lot ≈ $1/pip. Bạn nên vào bao nhiêu lot?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Rủi ro = 1% × $2,000 = $20. SL 25 pips, 1.0 lot ≈ $10/pip ⇒ Lot = 20 / 250 = <strong>0.08 lot</strong>.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">2</span>
            <span class="exercise-text"><strong>R-multiple:</strong> Bạn rủi ro 1R = $20. Một lệnh thắng $50 tương đương bao nhiêu R? Một lệnh thua $20 tương đương bao nhiêu R?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Thắng $50 với 1R=$20 ⇒ <strong>+2.5R</strong>. Thua $20 ⇒ <strong>-1R</strong>.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">3</span>
            <span class="exercise-text"><strong>Expectancy:</strong> Giả sử bạn có win rate 40%, trung bình thắng +2R và thua -1R. Kỳ vọng (R) của hệ thống là bao nhiêu?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Expectancy = 0.4×2 - 0.6×1 = <strong>0.2R</strong> mỗi lệnh.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">4</span>
            <span class="exercise-text"><strong>Kịch bản dừng ngày:</strong> Bạn đã thua liên tiếp -1R, -1R trong ngày. Quy tắc dừng ngày của bạn là 2R. Bạn nên làm gì?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content"><strong>Dừng giao dịch trong ngày</strong> (đã chạm giới hạn), review lại lý do vào lệnh và tâm lý.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">5</span>
            <span class="exercise-text"><strong>Correlation:</strong> Nêu 2 ví dụ về các lệnh có thể "tương quan" và cách bạn giảm rủi ro.</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">EUR/USD Buy và GBP/USD Buy (đều "short USD"). Cách giảm: chỉ chọn 1 kèo tốt nhất hoặc chia nhỏ rủi ro.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">6</span>
            <span class="exercise-text"><strong>Drawdown:</strong> Nếu tài khoản giảm -30%, bạn cần lời bao nhiêu % để quay về hòa vốn?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Nếu còn 70% vốn, cần tăng để về 100%: 100/70 - 1 ≈ <strong>+42.9%</strong>.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">7</span>
            <span class="exercise-text"><strong>Tổng rủi ro đang mở:</strong> Tài khoản $5,000, 1R = 1% ($50). Bạn đang mở 2 lệnh rủi ro 1R và 1.5R. Nếu giới hạn tổng rủi ro mở là 3R, bạn còn được mở thêm tối đa bao nhiêu R?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Đang mở 1R + 1.5R = 2.5R. Giới hạn 3R ⇒ còn <strong>0.5R</strong>.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">8</span>
            <span class="exercise-text"><strong>Đổi SL:</strong> Bạn muốn đặt SL xa hơn từ 30 pips lên 45 pips nhưng vẫn giữ rủi ro $20. Lot size phải thay đổi như thế nào?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">SL tăng từ 30 lên 45 pips (×1.5) ⇒ <strong>lot phải giảm 1.5 lần</strong> (còn 2/3 so với trước).</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">9</span>
            <span class="exercise-text"><strong>Chi phí giao dịch:</strong> Phí khiến mỗi lệnh thắng bị trừ 0.1R và mỗi lệnh thua nặng thêm 0.1R. Với win rate 40%, AvgWinR=2R, AvgLossR=1R, expectancy mới là bao nhiêu R?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">AvgWinR thực nhận = 1.9R. AvgLossR thực chịu = 1.1R. Expectancy = 0.4×1.9 - 0.6×1.1 = <strong>0.10R</strong>.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">10</span>
            <span class="exercise-text"><strong>Dời SL về hòa vốn:</strong> Nêu 2 lợi ích và 2 rủi ro khi dời SL về BE quá sớm.</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content"><strong>Lợi ích:</strong> giảm rủi ro tâm lý; tránh lệnh thắng thành lỗ lớn.<br><strong>Rủi ro:</strong> dễ bị quét BE rồi giá chạy đúng hướng; làm méo thống kê hệ thống.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">11</span>
            <span class="exercise-text"><strong>Kỷ luật sau chuỗi thắng:</strong> Bạn thắng 3 lệnh liên tiếp và muốn tăng gấp đôi lot. Hãy viết 1 quy tắc giúp bạn tránh overconfidence.</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Chỉ tăng khối lượng theo kế hoạch (ví dụ mỗi 20–30 lệnh mới review), không thay đổi risk/lot dựa trên cảm xúc.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">12</span>
            <span class="exercise-text"><strong>Checklist trước lệnh:</strong> Viết 5 tiêu chí tối thiểu trước khi bấm Buy/Sell.</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Có setup rõ ràng; điểm vào theo plan; SL tại invalidation; RR tối thiểu ≥1:2; kiểm tra tin mạnh/giờ phiên.</div></div>
    </div>
</div>
        `
    },
    5: {
        title: "CHƯƠNG 5: PROP FIRM - KỶ NGUYÊN GIAO DỊCH QUỸ",
        content: `
<h1>Chương 5: Prop Firm - Kỷ Nguyên Giao Dịch Quỹ</h1>

<h2>1. Prop Firm là gì?</h2>
<p><strong>Proprietary Trading Firm (Prop Firm)</strong> là các công ty cấp vốn cho trader. Bạn không cần bỏ vốn lớn, chỉ cần vượt qua bài thi để được cấp tài khoản giao dịch thật.</p>

<table>
    <tr><th>Bước</th><th>Mô tả</th></tr>
    <tr><td>1</td><td>Trader đóng <strong>phí thi</strong> (từ $50 - $1000+)</td></tr>
    <tr><td>2</td><td>Vượt qua <strong>Challenge</strong> (Phase 1 & 2)</td></tr>
    <tr><td>3</td><td>Nhận <strong>Funded Account</strong> ($10K - $400K+)</td></tr>
    <tr><td>4</td><td>Giao dịch và được <strong>chia lợi nhuận</strong> (80-90%)</td></tr>
</table>

<h2>2. Tại sao nên thi Prop Firm?</h2>
<table>
    <tr><th>Lợi ích</th><th>Giải thích</th></tr>
    <tr><td><strong>Không cần vốn lớn</strong></td><td>Chỉ cần $100-500 để thi tài khoản $50K-$200K</td></tr>
    <tr><td><strong>Chia sẻ rủi ro</strong></td><td>Thua = mất phí thi, không mất vốn cá nhân</td></tr>
    <tr><td><strong>Thu nhập cao</strong></td><td>Profit 5% của $100K = $5,000, bạn nhận $4,000-4,500</td></tr>
    <tr><td><strong>Kỷ luật</strong></td><td>Quy định của quỹ buộc bạn phải giao dịch có kỷ luật</td></tr>
</table>

<h2>3. Các quy định quan trọng</h2>

<h3>🔴 Daily Drawdown (Lỗ tối đa ngày) - thường 4-5%</h3>
<p><strong>Ví dụ:</strong> Tài khoản $100,000, Daily DD 5% → Không được lỗ quá <strong>$5,000</strong> trong 1 ngày</p>

<h3>🔴 Max Drawdown (Lỗ tổng) - thường 8-12%</h3>
<p><strong>Ví dụ:</strong> Tài khoản $100,000, Max DD 10% → Equity không được giảm dưới <strong>$90,000</strong></p>

<h3>🟢 Profit Target</h3>
<table>
    <tr><th>Phase</th><th>Target phổ biến</th></tr>
    <tr><td><strong>Phase 1</strong></td><td>8-10%</td></tr>
    <tr><td><strong>Phase 2</strong></td><td>5%</td></tr>
</table>

<h2>4. Một số Prop Firm phổ biến</h2>
<table>
    <tr><th>Tên</th><th>Đặc điểm</th><th>Phí thi (100K)</th></tr>
    <tr><td><strong>FTMO</strong></td><td>Lâu đời, uy tín nhất</td><td>~$540</td></tr>
    <tr><td><strong>Funding Pips</strong></td><td>Phí rẻ, nhiều ưu đãi</td><td>~$499</td></tr>
    <tr><td><strong>The5ers</strong></td><td>Instant funding, scale plan</td><td>~$260</td></tr>
    <tr><td><strong>Funded Next</strong></td><td>Express challenge</td><td>~$549</td></tr>
</table>

<blockquote>⚠️ <strong>Lưu ý:</strong> Luôn kiểm tra reviews và payout proof trước khi đóng phí.</blockquote>

<h2>5. Những điều CẤM trong Prop Firm</h2>
<table>
    <tr><th>Điều cấm</th><th>Hậu quả</th></tr>
    <tr><td><strong>Martingale</strong></td><td>Vi phạm, mất tài khoản</td></tr>
    <tr><td><strong>Grid trading</strong></td><td>Vi phạm quy định</td></tr>
    <tr><td><strong>News trading</strong> (một số quỹ)</td><td>Lệnh bị hủy hoặc mất acc</td></tr>
    <tr><td><strong>Copy trade từ người khác</strong></td><td>Vi phạm</td></tr>
    <tr><td><strong>Giữ lệnh qua cuối tuần</strong></td><td>Lệnh bị đóng tự động</td></tr>
</table>

<h2>6. Tips khi thi Prop Firm</h2>
<table>
    <tr><th>Tips</th><th>Giải thích</th></tr>
    <tr><td><strong>Đọc kỹ rules</strong></td><td>Mỗi quỹ có quy định khác nhau</td></tr>
    <tr><td><strong>Trade như thật</strong></td><td>Đừng ép target, trade bình thường</td></tr>
    <tr><td><strong>Chia nhỏ rủi ro</strong></td><td>0.25-0.5% mỗi lệnh thay vì 1-2%</td></tr>
    <tr><td><strong>Không FOMO</strong></td><td>Chỉ vào lệnh khi có setup đẹp</td></tr>
    <tr><td><strong>Bảo vệ tài khoản</strong></td><td>Mục tiêu là không bị loại, không phải thắng nhanh</td></tr>
</table>

<blockquote>💡 <strong>Điểm mấu chốt khi thi quỹ là không vi phạm rule, không phải "ăn target thật nhanh".</strong></blockquote>

<h2>📝 Bài tập Chương Prop Firm</h2>
<div class="exercises-container">
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">1</span>
            <span class="exercise-text"><strong>Khái niệm:</strong> Daily Drawdown là gì? Khác gì so với Max Drawdown?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Daily DD = giới hạn lỗ <strong>trong ngày</strong>; Max DD = giới hạn lỗ <strong>toàn tài khoản</strong>. Daily thường reset theo ngày.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">2</span>
            <span class="exercise-text"><strong>Tính toán:</strong> Tài khoản $50,000, Daily DD 5%. Bạn được phép lỗ tối đa bao nhiêu USD trong ngày?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">5% × $50,000 = <strong>$2,500</strong>.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">3</span>
            <span class="exercise-text"><strong>Tính toán:</strong> Tài khoản $50,000, Max DD 10%. Equity tối thiểu được phép là bao nhiêu USD?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Equity không được < $50,000 × (1 - 0.10) = <strong>$45,000</strong>.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">4</span>
            <span class="exercise-text"><strong>Quy tắc:</strong> Minimum Trading Days nghĩa là gì? Vì sao quỹ đặt quy định này?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Minimum Trading Days = phải trade ít nhất X ngày để pass. Quỹ đặt để hạn chế việc "all-in 1 ngày" và đánh giá tính ổn định.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">5</span>
            <span class="exercise-text"><strong>Phân biệt:</strong> 2-phase challenge khác gì 1-phase challenge?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">2-phase thường target chia 2 giai đoạn (ví dụ 8% rồi 5%) và giữ DD tương tự; 1-phase thường target 1 lần nhưng DD có thể chặt hơn.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">6</span>
            <span class="exercise-text"><strong>Trailing DD:</strong> Trailing max drawdown là gì? Vì sao nó "khó" hơn drawdown cố định?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Trailing max DD là "sàn" drawdown <strong>dời theo đỉnh equity/balance</strong>. Khó hơn vì bạn có thể bị loại dù đang có lãi nếu trả lại lợi nhuận quá nhiều.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">7</span>
            <span class="exercise-text"><strong>Ví dụ:</strong> Với tài khoản $100,000, Daily DD 5% và bạn chọn 1R = 0.5%. Daily DD tương đương bao nhiêu R?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Daily DD 5% = 10 lần 0.5% ⇒ <strong>10R/ngày</strong>.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">8</span>
            <span class="exercise-text"><strong>Quản lý rủi ro:</strong> Nếu bạn đang thua -2R trong ngày và rule cá nhân là stop day tại -2R, bạn nên làm gì?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content"><strong>Dừng giao dịch trong ngày</strong>; review lại lệnh/thói quen; tránh "gỡ" vì dễ vi phạm DD.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">9</span>
            <span class="exercise-text"><strong>Tổng rủi ro mở:</strong> Nếu giới hạn tổng rủi ro lệnh đang mở là 3R, bạn đã có 2 lệnh rủi ro 1R và 1.5R. Còn được mở tối đa bao nhiêu R?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Đang mở 2.5R ⇒ còn <strong>0.5R</strong>.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">10</span>
            <span class="exercise-text"><strong>Cấm:</strong> Nêu ít nhất 3 hành vi thường bị cấm trong prop firm và hậu quả.</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Martingale, grid, copy trade trái phép, vi phạm news/weekend rule, dùng EA bị cấm… Hậu quả: lệnh bị hủy, không tính profit, hoặc mất tài khoản.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">11</span>
            <span class="exercise-text"><strong>News rule:</strong> Nếu quỹ cấm news trading trong 5 phút trước/sau tin mạnh, bạn nên xử lý lệnh đang mở thế nào?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Giảm/đóng bớt vị thế trước thời điểm cấm; tránh mở lệnh mới; tốt nhất tuân theo plan và rule quỹ.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">12</span>
            <span class="exercise-text"><strong>Tâm lý:</strong> Vì sao "ép target" thường khiến fail challenge? Nêu 2 dấu hiệu bạn đang ép target.</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Ép target làm tăng rủi ro và mất kỷ luật. Dấu hiệu: tăng lot bất thường; vào lệnh ngoài setup; trade quá nhiều để "kiếm cho đủ %".</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">13</span>
            <span class="exercise-text"><strong>Due diligence:</strong> Trước khi mua challenge, bạn cần kiểm tra tối thiểu 5 mục gì?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Rule DD, news/weekend, sản phẩm được trade, spread/commission, nền tảng & server, payout proof & lịch payout, profit split, chính sách refund.</div></div>
    </div>
    <div class="exercise-item" onclick="this.classList.toggle('open')">
        <div class="exercise-question">
            <span class="exercise-num">14</span>
            <span class="exercise-text"><strong>Kịch bản vi phạm:</strong> Bạn đang lãi +3% nhưng mở thêm lệnh lớn khiến rủi ro tổng vượt Daily DD. Sai ở đâu và sửa thế nào?</span>
            <span class="exercise-toggle">▼</span>
        </div>
        <div class="exercise-answer"><div class="exercise-answer-content">Sai ở chỗ ưu tiên "kiếm nhanh" hơn bảo vệ tài khoản; cần giảm rủi ro mỗi lệnh, giới hạn tổng rủi ro mở, và dừng khi gần chạm DD.</div></div>
    </div>
</div>
        `
    }
};

// ===== DOM Elements =====
const modal = document.getElementById('chapterModal');
const chapterContent = document.getElementById('chapterContent');
const chapterLabel = document.getElementById('chapterLabel');
const prevBtn = document.getElementById('prevChapter');
const nextBtn = document.getElementById('nextChapter');

let currentChapter = 1;

// ===== Chapter Modal =====
function openChapter(chapterNum) {
    currentChapter = chapterNum;
    renderChapter();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeChapter() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function renderChapter() {
    const chapter = chapters[currentChapter];
    if (chapter) {
        chapterContent.innerHTML = chapter.content;
        chapterLabel.textContent = `Chương ${currentChapter}`;
        updateNavButtons();
        chapterContent.scrollTop = 0;
    }
}

function updateNavButtons() {
    prevBtn.disabled = currentChapter <= 1;
    nextBtn.disabled = currentChapter >= 5;
}

function navigateChapter(direction) {
    const newChapter = currentChapter + direction;
    if (newChapter >= 1 && newChapter <= 5) {
        currentChapter = newChapter;
        renderChapter();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeChapter();
    }
    if (e.key === 'Escape' && quizModal.classList.contains('active')) {
        closeQuiz();
    }
});

// Handle back button on mobile
window.addEventListener('popstate', () => {
    if (modal.classList.contains('active')) {
        closeChapter();
    }
    if (quizModal.classList.contains('active')) {
        closeQuiz();
    }
});

// ===== Quiz Data =====
const quizData = [
    {
        question: "Forex là gì?",
        options: [
            "Thị trường giao dịch cổ phiếu toàn cầu",
            "Thị trường giao dịch ngoại hối (Foreign Exchange)",
            "Thị trường giao dịch hàng hóa",
            "Thị trường giao dịch trái phiếu"
        ],
        correct: 1,
        explanation: "Forex = Foreign Exchange = Thị trường ngoại hối"
    },
    {
        question: "Trong cặp EUR/USD, đâu là đồng tiền cơ sở (Base Currency)?",
        options: ["USD", "EUR", "Cả hai", "Không có đồng nào"],
        correct: 1,
        explanation: "EUR là base currency (đứng trước), USD là quote currency"
    },
    {
        question: "1 Pip của cặp EUR/USD tương đương với bao nhiêu?",
        options: ["0.1", "0.01", "0.001", "0.0001"],
        correct: 3,
        explanation: "Với hầu hết các cặp forex, 1 pip = 0.0001 (chữ số thập phân thứ 4)"
    },
    {
        question: "Với 1 Standard Lot (1.0 lot) vàng XAU/USD, giá trị 1 pip xấp xỉ bao nhiêu USD?",
        options: ["$0.10", "$1", "$10", "$100"],
        correct: 2,
        explanation: "Với vàng XAU/USD, 1 pip = 0.10; 1 lot (100 oz) ⇒ $0.10 × 100 ≈ $10/pip"
    },
    {
        question: "Với 1 Standard Lot (1.0 lot) EUR/USD, giá trị 1 pip xấp xỉ bao nhiêu USD?",
        options: ["$1", "$10", "$100", "$0.10"],
        correct: 1,
        explanation: "1.0 lot ≈ $10/pip với các cặp xxxUSD"
    },
    {
        question: "Đòn bẩy 1:100 có nghĩa là gì?",
        options: [
            "Bạn chỉ cần 1% vốn để kiểm soát 100% giá trị giao dịch",
            "Bạn được lãi gấp 100 lần",
            "Bạn chỉ có thể thua tối đa 1%",
            "Bạn phải đặt cọc 100% giá trị giao dịch"
        ],
        correct: 0,
        explanation: "Đòn bẩy 1:100 = Margin 1% = Kiểm soát $100 với $1 vốn"
    },
    {
        question: "Spread là gì?",
        options: [
            "Phí rút tiền từ sàn",
            "Chênh lệch giữa giá Bid và giá Ask",
            "Lãi suất qua đêm",
            "Phí mở tài khoản"
        ],
        correct: 1,
        explanation: "Spread = Ask - Bid, là chi phí giao dịch"
    },
    {
        question: "Khung giờ nào có thanh khoản cao nhất trong ngày (theo giờ Việt Nam)?",
        options: ["05:00 - 10:00", "10:00 - 14:00", "19:00 - 23:00", "00:00 - 05:00"],
        correct: 2,
        explanation: "19:00-23:00 (VN) = London + New York overlap"
    },
    {
        question: "Lệnh Buy Limit được sử dụng khi nào?",
        options: [
            "Muốn mua ở giá cao hơn giá hiện tại",
            "Muốn mua ở giá thấp hơn giá hiện tại",
            "Muốn bán ở giá cao hơn giá hiện tại",
            "Muốn bán ở giá thấp hơn giá hiện tại"
        ],
        correct: 1,
        explanation: "Buy Limit = Chờ mua ở giá thấp hơn (giá tốt hơn)"
    },
    {
        question: "Nến Hammer xuất hiện ở đáy xu hướng giảm thường báo hiệu điều gì?",
        options: [
            "Xu hướng giảm sẽ tiếp tục",
            "Có thể đảo chiều tăng",
            "Thị trường sẽ đi ngang",
            "Không có ý nghĩa gì"
        ],
        correct: 1,
        explanation: "Hammer ở đáy = Tín hiệu đảo chiều tăng tiềm năng"
    },
    {
        question: "\"Trend is your friend\" có nghĩa là gì?",
        options: [
            "Nên giao dịch ngược xu hướng",
            "Nên giao dịch theo xu hướng",
            "Nên chờ đợi xu hướng kết thúc",
            "Xu hướng không quan trọng"
        ],
        correct: 1,
        explanation: "Giao dịch theo xu hướng có xác suất thành công cao hơn"
    },
    {
        question: "Theo quy tắc quản lý rủi ro, mỗi lệnh nên rủi ro tối đa bao nhiêu % tài khoản?",
        options: ["5-10%", "3-5%", "1-2%", "10-20%"],
        correct: 2,
        explanation: "Quy tắc 1-2% giúp bảo vệ vốn và sống sót lâu dài"
    },
    {
        question: "Nếu tài khoản giảm 50%, bạn cần lời bao nhiêu % để về hòa vốn?",
        options: ["50%", "75%", "100%", "150%"],
        correct: 2,
        explanation: "Toán học: 100/50 - 1 = 100% cần để phục hồi"
    },
    {
        question: "Risk/Reward ratio 1:2 có nghĩa là gì?",
        options: [
            "Bạn rủi ro 2 để kiếm 1",
            "Bạn rủi ro 1 để kiếm 2",
            "Bạn cần thắng 2 lệnh để bù 1 lệnh thua",
            "Bạn cần win rate 50%"
        ],
        correct: 1,
        explanation: "R:R 1:2 = Mỗi $1 rủi ro có thể kiếm $2 lợi nhuận"
    },
    {
        question: "Công thức tính Lot Size là gì?",
        options: [
            "Lot = Số tiền rủi ro × SL pips",
            "Lot = Số tiền rủi ro / (SL pips × Giá trị 1 pip)",
            "Lot = Vốn / Đòn bẩy",
            "Lot = SL pips / Số tiền rủi ro"
        ],
        correct: 1,
        explanation: "Lot = Số tiền rủi ro / (SL (pips) × Giá trị 1 pip)"
    },
    {
        question: "FOMO trong giao dịch là gì?",
        options: [
            "Sợ mất cơ hội (Fear Of Missing Out)",
            "Phương pháp phân tích kỹ thuật",
            "Loại lệnh đặc biệt",
            "Chiến lược giao dịch"
        ],
        correct: 0,
        explanation: "FOMO = Fear Of Missing Out, dẫn đến vào lệnh vội vàng"
    },
    {
        question: "Prop Firm là gì?",
        options: [
            "Sàn giao dịch Forex",
            "Công ty cấp vốn cho trader giao dịch",
            "Quỹ đầu tư chứng khoán",
            "Ngân hàng cung cấp dịch vụ Forex"
        ],
        correct: 1,
        explanation: "Prop Firm cấp vốn cho trader và chia lợi nhuận"
    },
    {
        question: "Daily Drawdown 5% trên tài khoản $100,000 có nghĩa là gì?",
        options: [
            "Bạn phải kiếm ít nhất $5,000/ngày",
            "Bạn không được lỗ quá $5,000 trong 1 ngày",
            "Bạn được lỗ tối đa $5,000 toàn bộ challenge",
            "Phí thi mỗi ngày là $5,000"
        ],
        correct: 1,
        explanation: "Daily DD 5% = Không được lỗ quá 5% trong 1 ngày"
    },
    {
        question: "Trailing Max Drawdown khác gì với Static Max Drawdown?",
        options: [
            "Trailing DD cố định, Static DD thay đổi",
            "Trailing DD dời theo đỉnh equity, Static DD cố định từ đầu",
            "Trailing DD chỉ tính trong ngày",
            "Không có sự khác biệt"
        ],
        correct: 1,
        explanation: "Trailing DD dời theo đỉnh equity; Static DD cố định từ lúc bắt đầu"
    },
    {
        question: "Hành vi nào thường BỊ CẤM trong hầu hết các Prop Firm?",
        options: [
            "Đặt Stop Loss",
            "Giao dịch theo xu hướng",
            "Martingale / Grid trading",
            "Sử dụng phân tích kỹ thuật"
        ],
        correct: 2,
        explanation: "Martingale/Grid bị cấm vì rủi ro cao và thiếu quản lý rủi ro"
    },
    {
        question: "Khi thi Prop Firm, điều quan trọng nhất là gì?",
        options: [
            "Đạt target profit càng nhanh càng tốt",
            "Không vi phạm rules và bảo vệ tài khoản",
            "Giao dịch càng nhiều lệnh càng tốt",
            "Sử dụng đòn bẩy cao nhất có thể"
        ],
        correct: 1,
        explanation: "Mục tiêu #1 = Không bị loại, không phải thắng nhanh"
    }
];

// ===== Quiz State =====
let currentQuestion = 0;
let userAnswers = [];
let quizCompleted = false;

// ===== Quiz DOM Elements =====
const quizModal = document.getElementById('quizModal');
const quizContent = document.getElementById('quizContent');
const quizProgress = document.getElementById('quizProgress');

// ===== Quiz Functions =====
function openQuiz() {
    currentQuestion = 0;
    userAnswers = new Array(quizData.length).fill(null);
    quizCompleted = false;
    renderQuizQuestion();
    quizModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeQuiz() {
    quizModal.classList.remove('active');
    document.body.style.overflow = '';
}

function renderQuizQuestion() {
    if (quizCompleted) {
        renderQuizResults();
        return;
    }

    const q = quizData[currentQuestion];
    const hasAnswered = userAnswers[currentQuestion] !== null;
    const isCorrect = hasAnswered && userAnswers[currentQuestion] === q.correct;

    quizProgress.textContent = `Câu ${currentQuestion + 1}/${quizData.length}`;

    let optionsHTML = q.options.map((opt, index) => {
        let optionClass = 'quiz-option';
        if (hasAnswered) {
            if (index === q.correct) {
                optionClass += ' correct';
            } else if (index === userAnswers[currentQuestion] && index !== q.correct) {
                optionClass += ' incorrect';
            }
        } else if (userAnswers[currentQuestion] === index) {
            optionClass += ' selected';
        }

        const letter = ['A', 'B', 'C', 'D'][index];
        const clickHandler = hasAnswered ? '' : `onclick="selectAnswer(${index})"`;

        return `
            <div class="${optionClass}" ${clickHandler}>
                <span class="quiz-option-letter">${letter}</span>
                <span class="quiz-option-text">${opt}</span>
            </div>
        `;
    }).join('');

    const explanationClass = hasAnswered ? 'quiz-explanation show' : 'quiz-explanation';
    const explanationHTML = `
        <div class="${explanationClass}">
            <strong>Giải thích:</strong> ${q.explanation}
        </div>
    `;

    const isLastQuestion = currentQuestion === quizData.length - 1;
    const nextBtnText = isLastQuestion ? 'Xem kết quả' : 'Câu tiếp theo →';

    quizContent.innerHTML = `
        <div class="quiz-question-card">
            <span class="quiz-question-num">Câu ${currentQuestion + 1}</span>
            <div class="quiz-question-text">${q.question}</div>
            <div class="quiz-options">
                ${optionsHTML}
            </div>
            ${explanationHTML}
        </div>
        <div class="quiz-nav">
            <button class="quiz-nav-btn" onclick="prevQuestion()" ${currentQuestion === 0 ? 'disabled' : ''}>
                ← Câu trước
            </button>
            <button class="quiz-nav-btn primary" onclick="nextQuestion()" ${!hasAnswered ? 'disabled' : ''}>
                ${nextBtnText}
            </button>
        </div>
    `;

    quizContent.scrollTop = 0;
}

function selectAnswer(index) {
    userAnswers[currentQuestion] = index;
    renderQuizQuestion();
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        renderQuizQuestion();
    }
}

function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        renderQuizQuestion();
    } else {
        quizCompleted = true;
        renderQuizResults();
    }
}

function renderQuizResults() {
    const correctCount = userAnswers.filter((ans, idx) => ans === quizData[idx].correct).length;
    const incorrectCount = quizData.length - correctCount;
    const percentage = Math.round((correctCount / quizData.length) * 100);

    let icon, stars, message;
    if (correctCount >= 19) {
        icon = '🏆';
        stars = '⭐⭐⭐⭐⭐';
        message = 'Xuất sắc! Bạn đã sẵn sàng cho Prop Firm Challenge!';
    } else if (correctCount >= 16) {
        icon = '🎉';
        stars = '⭐⭐⭐⭐';
        message = 'Tốt! Cần ôn lại một vài khái niệm trước khi thi quỹ.';
    } else if (correctCount >= 13) {
        icon = '👍';
        stars = '⭐⭐⭐';
        message = 'Khá! Nên học thêm trước khi thử sức với Prop Firm.';
    } else if (correctCount >= 10) {
        icon = '📚';
        stars = '⭐⭐';
        message = 'Trung bình. Cần học kỹ lại các chương trước khi giao dịch thật.';
    } else {
        icon = '📖';
        stars = '⭐';
        message = 'Hãy dành thời gian học từ đầu trước khi tiếp tục.';
    }

    quizProgress.textContent = 'Kết quả';

    quizContent.innerHTML = `
        <div class="quiz-results">
            <div class="quiz-results-icon">${icon}</div>
            <div class="quiz-results-score">${correctCount}/${quizData.length}</div>
            <div class="quiz-results-text">Bạn đạt ${percentage}% số câu đúng</div>
            <div class="quiz-results-rating">
                <span class="quiz-results-stars">${stars}</span>
            </div>
            <div class="quiz-results-message">${message}</div>
            <div class="quiz-results-breakdown">
                <div class="quiz-stat">
                    <div class="quiz-stat-value correct">${correctCount}</div>
                    <div class="quiz-stat-label">Đúng</div>
                </div>
                <div class="quiz-stat">
                    <div class="quiz-stat-value incorrect">${incorrectCount}</div>
                    <div class="quiz-stat-label">Sai</div>
                </div>
            </div>
            <button class="quiz-restart-btn" onclick="restartQuiz()">
                🔄 Làm lại bài test
            </button>
        </div>
    `;

    quizContent.scrollTop = 0;
}

function restartQuiz() {
    currentQuestion = 0;
    userAnswers = new Array(quizData.length).fill(null);
    quizCompleted = false;
    renderQuizQuestion();
}
