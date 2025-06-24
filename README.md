# End User Website

Dự án này là hệ thống tư vấn tuyển sinh và định hướng ngành học cho FPT University.

## Tính năng chính
- Khảo sát định hướng ngành học (10 câu hỏi)
- Lưu và xem lại lịch sử khảo sát
- Đặt lịch tư vấn trực tuyến hoặc trực tiếp
- Giao diện hiện đại, responsive, có hiệu ứng và âm thanh thiên nhiên

## Cài đặt & Chạy local

1. **Clone repo:**
   ```bash
   git clone https://github.com/nguyenhoangvu1201/End_User_Website.git
   cd End_User_Website
   ```
2. **Cài đặt dependencies:**
   ```bash
   npm install
   ```
3. **Chạy local:**
   ```bash
   npm run dev
   ```
4. Truy cập [http://localhost:3000](http://localhost:3000)

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

## Hướng dẫn tối ưu codebase

- Tách biệt UI và logic (dùng custom hooks, tách function xử lý ra ngoài component).
- Tái sử dụng component cho các phần UI lặp lại.
- Sử dụng state management hợp lý (Context, Redux nếu cần).
- Tối ưu hiệu suất với React.memo, useCallback, useMemo.
- Đặt tên biến, props, component rõ ràng, nhất quán.
- Đảm bảo accessibility (aria-label, role, ...).
- Kiểm tra và refactor code định kỳ.

---
© 2025 FPT University - Hệ thống tư vấn tuyển sinh và định hướng ngành học
