# 🌓 Dark Mode & Multi-Language Features

## 🎨 Dark Mode

Website hiện đã hỗ trợ **Dark Mode** với nút toggle tích hợp!

### Cách sử dụng:
- Click vào nút **🌙/☀️** trên thanh navigation
- Theme sẽ tự động chuyển đổi giữa Light và Dark mode
- Lựa chọn của bạn được lưu tự động (localStorage)

### Tính năng:
- ✅ Smooth transition giữa 2 themes
- ✅ Tự động nhớ lựa chọn của bạn
- ✅ Tất cả components đều responsive với dark mode
- ✅ Color palette được tối ưu cho cả 2 themes

---

## 🌍 Multi-Language (Vietnamese / English)

Website hỗ trợ **2 ngôn ngữ**: Tiếng Việt và Tiếng Anh!

### Cách sử dụng:
- Click vào nút **VN/EN** trên thanh navigation
- Website sẽ tự động load nội dung theo ngôn ngữ được chọn
- Lựa chọn ngôn ngữ được lưu tự động

### Cấu trúc:
```
content_vn/          ← Nội dung tiếng Việt
├── general.txt
├── hero.txt
├── about.txt
├── services.txt
├── projects.txt
└── contact.txt

content_en/          ← Nội dung tiếng Anh
├── general.txt
├── hero.txt
├── about.txt
├── services.txt
├── projects.txt
└── contact.txt
```

### Cách chỉnh sửa nội dung:

#### Tiếng Việt:
Sửa các file trong folder **`content_vn/`**

#### Tiếng Anh:
Sửa các file trong folder **`content_en/`**

**Ví dụ:**
```json
// content_vn/hero.txt
{
  "title": "Nâng tầm mọi sự kiện thể thao",
  "subtitle": "Livestream chuyên nghiệp - Chất lượng đỉnh cao"
}

// content_en/hero.txt
{
  "title": "Elevate Every Sports Event",
  "subtitle": "Professional Livestream - Premium Quality"
}
```

### Thêm ngôn ngữ mới:
1. Tạo folder mới (vd: `content_fr/` cho tiếng Pháp)
2. Copy tất cả file từ `content_vn/` hoặc `content_en/`
3. Dịch nội dung
4. Cập nhật JavaScript để thêm ngôn ngữ mới

---

## 🎯 Tính năng mới trong Navigation

### Theme Toggle Button (🌙/☀️)
- **Light Mode:** Icon 🌙 (Click để chuyển sang Dark)
- **Dark Mode:** Icon ☀️ (Click để chuyển về Light)

### Language Switch Button (VN/EN)
- **Tiếng Việt:** Hiển thị "EN" (Click để chuyển sang English)
- **English:** Hiển thị "VN" (Click để chuyển về Tiếng Việt)

---

## 🖥️ Technical Details

### LocalStorage Keys:
```javascript
theme: 'light' | 'dark'        // Lưu theme preference
language: 'vn' | 'en'          // Lưu language preference
```

### HTML Attributes:
```html
<html data-theme="light">      <!-- hoặc "dark" -->
```

### CSS Variables:
Dark mode sử dụng CSS custom properties:
```css
[data-theme="dark"] {
  --bg-primary: #0F172A;
  --text-primary: #F1F5F9;
  /* ... */
}
```

---

## 📱 Responsive Support

Cả 2 tính năng đều hoạt động tốt trên:
- ✅ Desktop
- ✅ Tablet
- ✅ Mobile

---

## 🔧 Troubleshooting

### Dark mode không hoạt động?
1. Clear browser cache (Ctrl+Shift+R)
2. Check localStorage: `localStorage.getItem('theme')`
3. Kiểm tra console có lỗi không

### Language switch không đổi nội dung?
1. Kiểm tra folder `content_vn/` và `content_en/` đã có đủ 6 file chưa
2. Refresh page (F5)
3. Check console log

### Nội dung hiển thị sai?
1. Validate JSON trong file content (dùng jsonlint.com)
2. Đảm bảo tên key giống nhau giữa 2 ngôn ngữ
3. Clear cache và refresh

---

## 💡 Best Practices

### Khi chỉnh sửa content:
1. **Luôn sửa cả 2 ngôn ngữ** để đồng bộ
2. **Giữ nguyên structure JSON** giữa VN và EN
3. **Backup trước khi sửa** quan trọng
4. **Test cả 2 languages** sau khi sửa

### Khi design:
1. **Test cả Light và Dark mode** cho mọi thay đổi
2. **Dùng CSS variables** thay vì hardcode colors
3. **Ensure contrast** cho text trong dark mode

---

## 🚀 Quick Start

Để test ngay:
1. Chạy server: `python debugging_live_run.py`
2. Mở website: http://localhost:8080
3. Click nút 🌙 để test dark mode
4. Click nút VN/EN để test language switch

---

**Enjoy your new Dark Mode & Multi-Language website! 🎉**
