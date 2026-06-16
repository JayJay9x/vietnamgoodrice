# Viet Nam Good Rice — Website tĩnh

Website B2B xuất khẩu gạo của **Viet Nam Good Rice** — desk xuất khẩu gạo độc lập tại khu vực **Đồng bằng sông Cửu Long, tỉnh An Giang**. Build sẵn dạng **HTML tĩnh** (Tailwind qua CDN) — push lên GitHub là chạy ngay, không cần build.

## Cấu trúc trang
- `index.html` Trang chủ
- `about.html` Giới thiệu desk xuất khẩu & cam kết với người mua
- `products.html` Danh mục gạo (Jasmine, gạo thơm, Japonica, gạo trắng, nếp, private label)
- `operations.html` Năng lực vận hành: sourcing · packing · chứng từ · giao hàng
- `quality.html` Chất lượng & bộ chứng từ xuất khẩu
- `tenders.html` Gói thầu chính phủ & mua sắm tổ chức
- `track.html` Tra cứu lô hàng (giao diện; gắn dữ liệu n8n ở bước sau)
- `partners.html` Mô hình khách hàng volume / mua định kỳ
- `quote.html` Liên hệ / Yêu cầu báo giá (RFQ)
- `style-guide.html` Design system (tham khảo nội bộ, ngoài menu)
- `assets/` favicon, icon PWA, `styles.css`, `tw-config.js`, `site.js`
- `manifest.json` · `sitemap.xml` · `robots.txt` · `404.html` · `CNAME`

## Thiết kế — phong cách Đông Dương (Indochine)
Giao diện theo tông Đông Dương: kết hợp nét thuộc địa Pháp và mỹ thuật Việt.
- **Màu:** ngọc bích `#0F4C3A` (primary) · vàng hoàng thổ `#C8962F` (gold) · gạch `#A24E36` (terracotta) · nền kem `#F5EFE0`.
- **Typography:** `Playfair Display` cho tiêu đề (serif thanh lịch) + `Inter` cho nội dung.
- **Họa tiết:** gạch bông (encaustic tile) làm texture nền, viền vàng trang trí, đường kẻ kim cương, vòm (arch).
- Mọi style dùng chung qua `assets/styles.css` + `assets/tw-config.js`; header/footer đồng nhất trên toàn site.

## Liên hệ trên site
Email RFQ: **sales@vietnamgoodrice.com** · Base: Đồng bằng sông Cửu Long, tỉnh An Giang, Việt Nam.
> Cập nhật số điện thoại / địa chỉ chi tiết trong header & footer khi có thông tin chính thức.

## Deploy bằng GitHub Pages (miễn phí)
1. Vào **Settings ▸ Pages**: Source = `Deploy from a branch`, Branch = `main`, Folder = `/ (root)` → Save.
2. Mục **Custom domain** nhập `vietnamgoodrice.com` (file `CNAME` đã có sẵn) → Save → tick **Enforce HTTPS** sau khi DNS đã trỏ.

## Trỏ tên miền
Tại quản trị DNS, thêm:
- 4 bản ghi `A` cho `@`: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- 1 bản ghi `CNAME` cho `www` trỏ tới `<tài-khoản-github>.github.io`

## Bước tiếp theo (gợi ý)
- **Track lô hàng:** nối `track.html` với webhook n8n đọc Google Sheet hợp đồng → trả milestone thật.
- **Form RFQ:** hiện dùng `mailto:`; có thể nối n8n / Microsoft Forms / Power Automate để lưu lead.
- **Ảnh sản phẩm:** bổ sung ảnh thật vào `assets/` để tăng độ tin cậy.
- **Đa ngôn ngữ:** thêm i18n (JSON + JS); tiếng Ả Rập cần RTL.
- **Số liệu năng lực:** xác nhận với ban lãnh đạo trước khi công bố con số cụ thể.
