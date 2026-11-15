# SOP TBANG STORE — giao diện xem trước

Đây là bản ZIP giao diện tĩnh dựa trên phong cách mẫu đen/xanh neon.

## Chạy trên iPhone
1. Tải và giải nén ZIP trong ứng dụng Tệp.
2. Mở `index.html` để xem trước nếu trình duyệt cho phép.
3. Có thể tải cả thư mục lên dịch vụ hosting static để xem giao diện.

## Các phần có trong bản xem trước
- Giao diện responsive cho điện thoại.
- Hạt sáng chuyển động.
- Danh mục game: Free Fire, Liên Quân, PUBG Mobile, 8 Ball Pool.
- Chỉ mở bán tạm thời Mizze Cheat với gói 1 ngày 20.000đ, 7 ngày 70.000đ, 31 ngày 140.000đ; giao hàng tự động mới là nội dung giao diện, chưa tích hợp backend.
- TOP NẠP THÁNG NÀY (chưa có dữ liệu giao dịch thật).
- Biểu mẫu yêu cầu seller (chưa gửi/lưu thật).
- Hộp thoại mã giảm giá (chưa xác minh mã thật).
- Nạp tiền/cá nhân dạng giao diện demo.
- Liên hệ Telegram và Zalo.

## QUAN TRỌNG
Bản này chỉ là **frontend prototype**. Nó KHÔNG kết nối repository GitHub cũ, database, Telegram Bot, SePay/IPN, xác minh thanh toán, kho key hoặc hệ thống đăng nhập. Không dùng để nhận tiền thật hoặc giao key thật. Giá, tên sản phẩm, TOP NẠP và số dư là dữ liệu minh họa; không có số tiền nạp giả được đưa vào bảng xếp hạng.

Để tích hợp vào dự án cũ, cần kiểm tra `bot.py`, `requirements.txt`, `render.yaml` và cấu trúc repo trước; không đưa token/mật khẩu vào frontend hay repository Public.


## Gói Mizze Cheat tạm thời
- 1 ngày: 20.000đ
- 7 ngày: 70.000đ
- 31 ngày: 140.000đ
- Giao hàng: hiển thị tự động trong giao diện; giao key thật chưa hoạt động cho đến khi tích hợp máy chủ/kho key.
