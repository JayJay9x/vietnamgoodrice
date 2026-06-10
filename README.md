# Vietnam Good Rice — Website tĩnh (A An / Tân Long Group)

Website B2B xuất khẩu gạo, build sẵn dạng **HTML tĩnh** (Tailwind qua CDN) — push lên GitHub là chạy ngay, không cần build.

## Cấu trúc
- `index.html` Trang chủ
- `about.html` Giới thiệu A An + hệ sinh thái Tân Long Group
- `products.html` Danh mục gạo
- `operations.html` Năng lực vận hành & chuỗi khép kín
- `quality.html` Chất lượng & chứng từ
- `tenders.html` Gói thầu chính phủ
- `track.html` Tra cứu lô hàng (giao diện; cần gắn dữ liệu n8n ở bước sau)
- `partners.html` Đặc quyền khách volume lớn
- `quote.html` Liên hệ / Yêu cầu báo giá
- `style-guide.html` Design system (tham khảo nội bộ, không nằm trong menu)
- `assets/` favicon + icon · `manifest.json` · `sitemap.xml` · `robots.txt` · `404.html` · `CNAME`

Liên hệ trên toàn site: **Mr. Jay · hoadt@aan.vn · +84 396 529 995** · A An JSC, 14F Diamond Flower Tower, 48 Lê Văn Lương, Hà Nội.

## Deploy bằng GitHub Pages (đơn giản nhất, miễn phí)
1. Tạo repo mới trên GitHub (ví dụ `vietnamgoodrice`).
2. Upload toàn bộ file trong thư mục này vào repo (kéo-thả qua giao diện web GitHub: "Add file" → "Upload files").
3. Vào **Settings ▸ Pages**: Source = `Deploy from a branch`, Branch = `main`, Folder = `/ (root)` → Save.
4. Vẫn ở Pages, mục **Custom domain** nhập `vietnamgoodrice.com` (file `CNAME` đã có sẵn) → Save → tick **Enforce HTTPS** sau khi DNS đã trỏ.

## Trỏ tên miền từ tino.vn
Vào quản trị DNS tino.vn, thêm:
- 4 bản ghi `A` cho domain gốc `@` trỏ tới IP GitHub Pages:
  `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- 1 bản ghi `CNAME` cho `www` trỏ tới `<tên-tài-khoản-github>.github.io`

Chờ DNS lan truyền (vài phút–vài giờ), GitHub Pages sẽ tự cấp SSL.

## Lưu ý quan trọng
- **Ảnh** đang load từ link tạm của Stitch (`lh3.googleusercontent.com`). Link này có thể hết hạn → nên tải ảnh về `assets/` và đổi `src` để site bền vững. (Có thể nhờ Claude xử lý sau.)
- **Đa ngôn ngữ**: nút chọn ngôn ngữ đã có (English active, các thứ tiếng khác đánh dấu "soon"). Logic dịch thật là bước tiếp theo (i18n JSON + JS, tiếng Ả Rập cần RTL).
- **Track lô hàng**: trang `track.html` mới là giao diện mẫu. Gắn dữ liệu thật bằng webhook n8n đọc sheet `2026_contract` là bước tiếp theo.
- **Số liệu năng lực** (15.000+ tấn/ngày, "5 nhà máy", "top 1"): xác nhận với tập đoàn trước khi giữ nguyên trên bản công khai.
