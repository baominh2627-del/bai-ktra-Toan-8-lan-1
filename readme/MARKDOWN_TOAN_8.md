# Tài Liệu Kỹ Thuật: Web App Thi Trắc Nghiệm Toán Học Tự Động

## 1. Phong Cách Giao Diện (UI/UX)
Dự án sử dụng phong cách thiết kế mô phỏng bài kiểm tra trên giấy ô ly truyền thống, kết hợp với các thành phần giao diện hiện đại (Card-based UI).

*   **Bảng màu chủ đạo (CSS Variables):**
    *   Nền (`--paper-off`): `#fbfcfe` kết hợp lưới `linear-gradient` giả lập giấy kẻ ô.
    *   Chữ chính (`--ink`): Xanh đen `#1b3a6b` (mô phỏng màu mực bút máy).
    *   Màu phản hồi: Xanh lá (`--green`: đúng), Đỏ (`--red`: sai), Vàng (`--amber`: đúng một phần/thiếu).
*   **Typography (Kiểu chữ):**
    *   Nội dung đề: `Times New Roman` (chuẩn font hàn lâm giáo dục).
    *   Đồng hồ/Điểm số: `Courier New` (font monospace, dễ đọc số liệu).
*   **Điểm nhấn UX:** Thanh đếm ngược thời gian (Sticky Timerbar) bám sát màn hình khi cuộn, có hiệu ứng cảnh báo nhấp nháy (pulse) khi thời gian làm bài còn dưới 5 phút.

---

## 2. Chức Năng Cốt Lõi
Hệ thống được thiết kế hoàn toàn bằng Vanilla JavaScript (ES6 Modules) với các tính năng:

*   **Cấu trúc đề linh hoạt:** Hỗ trợ 3 định dạng câu hỏi:
    1. Trắc nghiệm 1 đáp án đúng (Radio button).
    2. Đúng/Sai đa mệnh đề (Tính điểm bậc thang: đúng 4 ý = 1đ, 3 ý = 0.5đ, v.v.).
    3. Điền đáp án ngắn (Text input, tự động loại bỏ khoảng trắng khi so khớp).
*   **Render Toán học:** Tích hợp CDN `MathJax` bản 3.x, tự động nhận diện và render công thức LaTeX trong cặp `$ ... $`.
*   **Hệ thống Giám thị Ảo (Anti-cheat):** Sử dụng DOM API `visibilitychange`. Hệ thống đếm số lần học sinh chuyển Tab hoặc thu nhỏ trình duyệt, hiển thị cảnh báo realtime và lưu lại log vi phạm.
*   **Auto-grading & Review:** Thu bài tự động khi hết giờ. Chấm điểm tức thì, bôi màu đáp án và giải thích chi tiết đúng/sai ngay trên giao diện kết quả.

---

## 3. Kiến Trúc Cơ Sở Dữ Liệu (Firebase)
Sử dụng Cloud Firestore làm Database Serverless.

*   **Chế độ kết nối:** Test Mode (Rules: `allow read, write: if true;`) để học sinh nộp bài không cần xác thực tài khoản (No Auth required).
*   **Cấu trúc lưu trữ:** Mọi bài làm được đẩy vào một Collection duy nhất tên là `exam_results`.
*   **Data Model (Cấu trúc 1 Document):**
    *   `name` (String): Họ và tên học sinh.
    *   `class` (String): Lớp học (VD: 8A1).
    *   `score` (Number): Điểm tổng kết (thang 10, format 1 chữ số thập phân).
    *   `cheatCount` (Number): Tổng số lần phát hiện chuyển Tab.
    *   `answers` (Object): Bản ghi chi tiết đáp án học sinh đã chọn cho từng câu.
    *   `timestamp` (ServerTimestamp): Thời điểm nộp bài chính xác lấy từ máy chủ Google.

---

## 4. Hướng Dẫn Triển Khai (Dành Cho Developer)
1.  **Khởi chạy môi trường:** Do file JS sử dụng `type="module"`, dự án phải được chạy qua Local Server (như Live Server) hoặc host lên các nền tảng như Vercel/GitHub Pages, không mở trực tiếp từ file `file:///`.
2.  **Cấu hình Database:** Cần thay thế object `firebaseConfig` ở đầu file `script.js` bằng config từ một Project Firebase mới.
3.  **Cập nhật Ngân hàng đề:** Đề thi được quản lý nội bộ qua Object `examData` trong JS. Để tạo đề mới, chỉ cần thay đổi nội dung JSON theo đúng cấu trúc hiện tại, hệ thống DOM sẽ tự động render các câu hỏi tương ứng.