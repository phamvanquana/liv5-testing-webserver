# 📸 Images Folder

Thư mục này chứa hình ảnh cho các dự án và nội dung khác của website.

## 🖼️ Cách thêm ảnh cho dự án

### Bước 1: Thêm ảnh vào folder này
Copy file ảnh của bạn vào folder `images/`

**Ví dụ:**
```
images/
├── football-tournament.jpg
├── esports-championship.png
├── marathon-event.jpg
└── tennis-open.jpg
```

### Bước 2: Cập nhật file projects.txt
Mở file `content/projects.txt` và thay đổi giá trị `"image"`:

**Trước:**
```json
{
  "name": "Giải bóng đá Cup Vàng 2025",
  "description": "Livestream toàn bộ 32 trận đấu",
  "image": "project1.jpg",
  "category": "Bóng đá"
}
```

**Sau:**
```json
{
  "name": "Giải bóng đá Cup Vàng 2025",
  "description": "Livestream toàn bộ 32 trận đấu",
  "image": "football-tournament.jpg",
  "category": "Bóng đá"
}
```

### Bước 3: Refresh website
- Nhấn F5 trong browser
- Ảnh sẽ tự động hiển thị!

## 📋 Quy tắc đặt tên file

### ✅ Nên:
- Dùng chữ thường: `football.jpg`
- Dùng dấu gạch ngang thay khoảng trắng: `cup-vang-2025.jpg`
- Tên ngắn gọn, dễ nhớ: `esports-final.jpg`
- Định dạng: `.jpg`, `.jpeg`, `.png`, `.webp`

### ❌ Không nên:
- Dùng khoảng trắng: `cup vang 2025.jpg` ❌
- Dùng ký tự đặc biệt: `cup@vàng#2025.jpg` ❌
- Tên quá dài: `giai-bong-da-cup-vang-nam-2025-vong-chung-ket.jpg` ❌

## 🎨 Khuyến nghị kích thước ảnh

### Cho Project Cards:
- **Kích thước:** 600x400 pixels (tỷ lệ 3:2)
- **Dung lượng:** < 200KB (để load nhanh)
- **Format:** JPEG cho ảnh thật, PNG cho ảnh có nền trong suốt

### Tối ưu ảnh:
Dùng các tool online để nén ảnh:
- https://tinypng.com
- https://squoosh.app
- https://compressor.io

## 📝 Ví dụ hoàn chỉnh

**File: content/projects.txt**
```json
{
  "title": "Dự án tiêu biểu",
  "subtitle": "Những sự kiện chúng tôi đã thực hiện",
  "projects": [
    {
      "name": "Giải bóng đá Cup Vàng 2025",
      "description": "Livestream toàn bộ 32 trận đấu với hơn 500,000 người xem",
      "image": "football-cup-2025.jpg",
      "category": "Bóng đá"
    },
    {
      "name": "Giải Esports National Championship",
      "description": "Phát sóng 3 ngày liên tục với 4 camera",
      "image": "esports-championship.png",
      "category": "Esports"
    }
  ]
}
```

**Folder images:**
```
images/
├── football-cup-2025.jpg        ← Ảnh cho dự án 1
├── esports-championship.png     ← Ảnh cho dự án 2
└── README.md
```

## 🔄 Nếu không có ảnh

Nếu để `"image": "project1.jpg"` (hoặc 2, 3, 4) - website sẽ hiển thị gradient placeholder với icon 📹

## 💡 Tips

1. **Lazy Loading:** Ảnh được load lazy (chỉ load khi scroll đến) để tăng tốc độ
2. **Hover Effect:** Ảnh sẽ zoom nhẹ khi hover chuột
3. **Responsive:** Ảnh tự động resize theo màn hình
4. **Alt Text:** Tên dự án được dùng làm alt text cho SEO

## 🎯 Checklist khi thêm ảnh

- [ ] Ảnh đã được nén/tối ưu (< 200KB)
- [ ] Tên file không có khoảng trắng hoặc ký tự đặc biệt
- [ ] Đã copy ảnh vào folder `images/`
- [ ] Đã cập nhật `content/projects.txt` với tên file chính xác
- [ ] Đã refresh website (F5) để kiểm tra
- [ ] Ảnh hiển thị đúng và đẹp

---

**Happy coding! 🚀**
