# CHƯƠNG 2: KIẾN THỨC CƠ BẢN & THUẬT NGỮ

![Currency Pairs](./images/currency_pairs_1767753123505.png)

---

## 1. Các loại cặp tiền tệ

Trong Forex, có **hơn 100 cặp tiền tệ** nhưng chúng được chia thành 3 nhóm chính:

### 🔹 Major Pairs (Cặp chính)
Các cặp tiền bao gồm **USD** và một đồng tiền mạnh khác. Đây là những cặp có thanh khoản cao nhất.

| Cặp tiền | Tên gọi | Biệt danh |
|----------|---------|-----------|
| EUR/USD | Euro / US Dollar | **Fiber** |
| GBP/USD | British Pound / US Dollar | **Cable** |
| USD/JPY | US Dollar / Japanese Yen | **Gopher** |
| USD/CHF | US Dollar / Swiss Franc | **Swissy** |
| AUD/USD | Australian Dollar / US Dollar | **Aussie** |
| USD/CAD | US Dollar / Canadian Dollar | **Loonie** |
| NZD/USD | New Zealand Dollar / US Dollar | **Kiwi** |

### 🔸 Minor Pairs (Cặp phụ / Cross)
Các cặp tiền **không chứa USD** nhưng bao gồm các đồng tiền mạnh.

| Ví dụ | Giải thích |
|-------|------------|
| EUR/GBP | Euro / Bảng Anh |
| EUR/JPY | Euro / Yên Nhật |
| GBP/JPY | Bảng Anh / Yên Nhật (Biến động mạnh!) |
| AUD/NZD | Đô la Úc / Đô la New Zealand |

### 🔻 Exotic Pairs (Cặp ngoại lai)
Cặp tiền bao gồm USD hoặc đồng tiền mạnh với **đồng tiền của các nền kinh tế mới nổi**.

| Ví dụ | Quốc gia |
|-------|----------|
| USD/TRY | Thổ Nhĩ Kỳ |
| USD/ZAR | Nam Phi |
| EUR/TRY | Thổ Nhĩ Kỳ |

> ⚠️ **Cảnh báo:** Exotic pairs có **spread rất cao** và **biến động khó lường**. Không khuyến khích cho người mới.

---

## 2. Pip và Point

### Pip là gì?
**Pip** (Percentage in Point) là đơn vị đo lường sự thay đổi giá nhỏ nhất của một cặp tiền tệ.

### Cách tính Pip:

| Loại cặp tiền | Vị trí Pip | Ví dụ |
|---------------|------------|-------|
| Hầu hết các cặp | Chữ số thập phân **thứ 4** | EUR/USD: 1.10**0**0 → 1.10**0**1 = +1 pip |
| Cặp có JPY | Chữ số thập phân **thứ 2** | USD/JPY: 150.**0**0 → 150.**0**1 = +1 pip |

### Point là gì?
**Point** = 1/10 của Pip (chữ số thập phân thứ 5 hoặc 3 với JPY).

```
1 Pip = 10 Points
```

### Quy ước 4/5 chữ số (Pipette)
Nhiều nền tảng báo giá **5 chữ số** (hoặc **3 chữ số** với JPY). Khi đó:
- **Pip** vẫn là chữ số thập phân thứ **4** (hoặc thứ **2** với JPY)
- Chữ số “thừa” còn lại thường gọi là **pipette/point** (nhỏ hơn pip 10 lần)

### Giá trị 1 pip (ước tính nhanh)
Với các cặp mà **USD là đồng định giá** (ví dụ EUR/USD, GBP/USD):
- **1.0 lot ≈ $10/pip**
- **0.1 lot ≈ $1/pip**
- **0.01 lot ≈ $0.10/pip**

> ⚠️ Lưu ý: Với các cặp mà USD **không** là đồng định giá (ví dụ USD/JPY, EUR/GBP...), giá trị pip sẽ thay đổi theo tỷ giá và đồng tiền tài khoản.

### 🥇 Ví dụ về Vàng (XAU/USD):

| Biến động | Giá trị |
|-----------|---------|
| 2000.00 → 2000.10 | +1 Pip (10 Points) |
| 2000.00 → 2001.00 | +10 Pips (100 Points) = "1 giá" |

> 💡 **Mẹo:** Với Vàng, trader thường nói "tăng 1 giá" khi giá tăng $1.00 (ví dụ từ 2000 lên 2001).

---

## 3. Lot (Khối lượng giao dịch)

**Lot** là đơn vị đo lường khối lượng giao dịch trong Forex.

### Bảng quy đổi Lot:

| Loại Lot | Số đơn vị tiền tệ | Giá trị 1 Pip (EUR/USD) |
|----------|-------------------|-------------------------|
| **Standard Lot** (1.0) | 100,000 | ~$10 |
| **Mini Lot** (0.1) | 10,000 | ~$1 |
| **Micro Lot** (0.01) | 1,000 | ~$0.10 |
| **Nano Lot** (0.001) | 100 | ~$0.01 |

### Ví dụ thực tế:
> Bạn vào lệnh **Buy EUR/USD 0.1 lot**, giá tăng **50 pips**.
> 
> **Lợi nhuận = 50 pips × $1/pip = $50**

> 💡 Ghi nhớ: **Lot = khối lượng** (size). Đòn bẩy chỉ ảnh hưởng **margin cần có**, không làm “đổi” số pip thị trường chạy.

---

## 4. Đòn bẩy (Leverage) và Ký quỹ (Margin)

### Leverage là gì?

**Đòn bẩy** cho phép bạn kiểm soát một lượng tiền lớn hơn số vốn thực có trong tài khoản.

| Đòn bẩy | Ý nghĩa | Margin cần có |
|---------|---------|---------------|
| 1:10 | $1 của bạn = $10 giao dịch | 10% |
| 1:50 | $1 của bạn = $50 giao dịch | 2% |
| 1:100 | $1 của bạn = $100 giao dịch | 1% |
| 1:500 | $1 của bạn = $500 giao dịch | 0.2% |

### Ví dụ cụ thể:

```
Vốn của bạn: $1,000
Đòn bẩy: 1:100
Khả năng giao dịch: $1,000 × 100 = $100,000 (tương đương 1 Standard Lot)
```

### ⚠️ CẢNH BÁO VỀ ĐÒN BẨY

> **Đòn bẩy là con dao hai lưỡi!**
> 
> - Đòn bẩy cao = Lợi nhuận tiềm năng lớn hơn
> - Đòn bẩy cao = **Rủi ro mất vốn nhanh hơn**
> 
> Với đòn bẩy 1:100, chỉ cần giá đi ngược 1% là bạn **mất hết 100% vốn**.

### Margin là gì?

**Margin (Ký quỹ)** là số tiền tối thiểu sàn yêu cầu bạn phải có để duy trì một vị thế giao dịch.

### Balance vs Equity (rất hay bị nhầm)

| Thuật ngữ | Ý nghĩa |
|----------|--------|
| **Balance** | Số dư tài khoản sau khi đã chốt lệnh (không tính lãi/lỗ đang chạy) |
| **Equity** | Giá trị tài khoản hiện tại = **Balance + lãi/lỗ đang chạy (floating P/L)** |

| Thuật ngữ | Định nghĩa |
|-----------|------------|
| **Used Margin** | Số tiền đang bị "khóa" cho các lệnh đang mở |
| **Free Margin** | Số tiền còn lại có thể dùng để mở lệnh mới |
| **Margin Level** | (Equity / Used Margin) × 100% |
| **Margin Call** | Cảnh báo khi Margin Level xuống thấp (~50-100%) |
| **Stop Out** | Sàn tự động đóng lệnh khi Margin Level quá thấp (~20-50%) |

### Công thức margin nhanh (ước tính)
Với Forex (giả sử 1 lot = 100,000 đơn vị):

```
Notional ≈ Lot × 100,000
Used Margin ≈ Notional / Leverage
Margin Level (%) = (Equity / Used Margin) × 100%
```

> ⚠️ Thực tế: Một số sản phẩm (vàng, chỉ số, crypto) có contract size và margin requirement khác; sàn cũng có thể tăng margin lúc tin mạnh/qua tuần.

---

## 5. Spread và Commission

### Spread là gì?

**Spread** là sự chênh lệch giữa giá **Bid (Bán)** và giá **Ask (Mua)**.

```
EUR/USD
Bid: 1.1000  |  Ask: 1.1002
Spread = 1.1002 - 1.1000 = 0.0002 = 2 pips
```

### Các loại Spread:

| Loại | Đặc điểm |
|------|----------|
| **Fixed Spread** | Spread cố định, không đổi theo biến động thị trường |
| **Variable Spread** | Spread thay đổi, thường thấp hơn khi thanh khoản cao |

### Commission là gì?

Một số tài khoản (đặc biệt là **ECN/Raw Spread**) có spread rất thấp nhưng thu thêm **phí hoa hồng** cho mỗi giao dịch.

| Loại tài khoản | Spread | Commission |
|----------------|--------|------------|
| Standard | 1.5 - 2 pips | Không có |
| Raw/ECN | 0.0 - 0.3 pips | $3 - $7 /lot /chiều |

### Khi nào spread thường nới rộng?
- Lúc **tin tức mạnh** (CPI, NFP...) hoặc ngay khi mở phiên
- Gần thời điểm **rollover/đổi ngày** (thường khoảng 04:00–06:00 giờ VN tùy sàn)
- Khi thị trường ít thanh khoản (đầu tuần/giữa phiên vắng)

### Swap (Phí qua đêm) là gì?
Nếu giữ lệnh qua đêm, bạn có thể bị tính hoặc được cộng **swap** (phí/lãi qua đêm), tùy chênh lệch lãi suất và quy định của sàn.

> 💡 Người mới nên kiểm tra mục **Swap/Overnight** của từng sản phẩm trong MT4/MT5 trước khi giữ lệnh dài ngày.

---

## 6. Các loại lệnh giao dịch

### Lệnh thị trường (Market Order)

| Loại lệnh | Mô tả |
|-----------|-------|
| **Buy (Long)** | Mua ngay lập tức ở giá Ask hiện tại |
| **Sell (Short)** | Bán ngay lập tức ở giá Bid hiện tại |

### Lệnh chờ (Pending Order)

| Loại lệnh | Sử dụng khi | Ví dụ |
|-----------|-------------|-------|
| **Buy Limit** | Muốn mua ở giá **thấp hơn** giá hiện tại | Giá đang 1.1000, đặt Buy Limit ở 1.0950 |
| **Sell Limit** | Muốn bán ở giá **cao hơn** giá hiện tại | Giá đang 1.1000, đặt Sell Limit ở 1.1050 |
| **Buy Stop** | Muốn mua ở giá **cao hơn** giá hiện tại (breakout) | Giá đang 1.1000, đặt Buy Stop ở 1.1050 |
| **Sell Stop** | Muốn bán ở giá **thấp hơn** giá hiện tại (breakdown) | Giá đang 1.1000, đặt Sell Stop ở 1.0950 |

> 💡 Mẹo nhớ nhanh: **Limit = chờ giá tốt hơn** (mua thấp/bán cao). **Stop = chờ phá vỡ** (mua cao/bán thấp).

### Lệnh quản lý rủi ro

| Loại lệnh | Mục đích |
|-----------|----------|
| **Stop Loss (SL)** | Tự động đóng lệnh khi lỗ đến một mức nhất định |
| **Take Profit (TP)** | Tự động đóng lệnh khi lời đến một mức nhất định |
| **Trailing Stop** | Stop Loss di động, tự động điều chỉnh theo hướng có lợi |

> ⚠️ Lưu ý: Khi thị trường biến động mạnh có thể xảy ra **trượt giá (slippage)**, giá khớp SL/TP có thể khác đôi chút so với mức đặt.

---

## 📝 Bài tập Chương 2

1. **Tính toán:** Nếu bạn vào lệnh Sell 0.05 lot EUR/USD và giá giảm 30 pips, bạn lời bao nhiêu?
2. **Phân tích:** Với vốn $500 và đòn bẩy 1:100, bạn có thể giao dịch tối đa bao nhiêu lot?
3. **Thực hành:** Mở tài khoản Demo và thử đặt các loại lệnh Pending Order.
4. **Pip/Point:** EUR/USD tăng từ 1.10500 lên 1.10537. Giá tăng bao nhiêu **pips** và bao nhiêu **points**?
5. **Pip với JPY:** USD/JPY tăng từ 150.00 lên 150.25. Giá tăng bao nhiêu **pips**?
6. **Giá trị pip:** Với EUR/USD, nếu bạn vào lệnh 0.20 lot thì 1 pip tương đương khoảng bao nhiêu USD?
7. **Chi phí spread:** Nếu spread EUR/USD là 2 pips, bạn vào lệnh 0.10 lot thì chi phí spread (ước tính) là bao nhiêu USD?
8. **Commission:** Tài khoản Raw thu commission $3/lot/chiều. Bạn vào 0.50 lot và đóng lệnh sau đó. Tổng commission (mở + đóng) là bao nhiêu?
9. **Margin:** Tài khoản $1,000, đòn bẩy 1:100. Bạn mở 0.30 lot EUR/USD (giả sử 1 lot = $100,000). Used margin xấp xỉ bao nhiêu USD?
10. **Margin level:** Tiếp câu 9, giả sử Equity hiện tại là $950. Margin level xấp xỉ bao nhiêu %?

## ✅ Đáp án gợi ý (Chương 2)

1. **Đáp án:** Với EUR/USD, 1.0 lot ≈ **$10/pip** ⇒ 0.05 lot ≈ **$0.5/pip**. Giá giảm 30 pips khi Sell ⇒ **lãi ≈ 30 × $0.5 = $15** (chưa tính spread/commission).
2. **Đáp án:** Đòn bẩy 1:100 ⇒ margin ~1%. Với tài khoản $500, notional tối đa (lý thuyết) ≈ **$500 × 100 = $50,000** ⇒ tương đương **0.5 lot** (với 1 lot = $100,000). Thực tế còn phụ thuộc cặp tiền, loại tài khoản và yêu cầu margin của sàn; không khuyến khích dùng “tối đa”.
3. **Gợi ý thực hành:** Thử đặt đủ 4 lệnh chờ (**Buy Limit/Sell Limit/Buy Stop/Sell Stop**) với khối lượng nhỏ (ví dụ 0.01 lot) và ghi lại: điều kiện kích hoạt, giá khớp, spread tại thời điểm khớp, và cách SL/TP hoạt động.
4. **Đáp án:** 1.10500 → 1.10537 là +0.00037 ⇒ **3.7 pips** = **37 points**.
5. **Đáp án:** Với cặp JPY, pip ở chữ số thập phân thứ 2: 150.00 → 150.25 ⇒ **25 pips**.
6. **Đáp án:** 1.0 lot ≈ $10/pip ⇒ 0.20 lot ≈ **$2/pip**.
7. **Đáp án:** 0.10 lot ≈ $1/pip. Spread 2 pips ⇒ chi phí ≈ **2 × $1 = $2**.
8. **Đáp án:** $3/lot/chiều ⇒ 0.50 lot: $1.5/chiều. Mở + đóng = 2 chiều ⇒ **$3**.
9. **Đáp án:** 0.30 lot ⇒ notional ≈ 0.30 × $100,000 = **$30,000**. Leverage 1:100 ⇒ margin ~1% ⇒ used margin ≈ **$300**.
10. **Đáp án:** Margin level = (Equity / Used Margin) × 100% ≈ (950 / 300) × 100% ≈ **316.7%**.

---

**[⬅️ Chương trước](./chuong_1_tong_quan.md)** | **[Mục lục](./README.md)** | **[Chương tiếp theo ➡️](./chuong_3_ptkt_nen_tang.md)**
