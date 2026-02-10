# HƯỚNG DẪN CHỈNH SỬA NỘI DUNG NHANH

## 🚀 Bạn KHÔNG CẦN BIẾT CODE để chỉnh sửa nội dung!

Tất cả nội dung website đều nằm trong các file TXT ở folder **content/**

---

## 📝 CÁC FILE VÀ CÁCH SỬA

### 1️⃣ **general.txt** - Thông tin chung

**Sửa gì:** Tên studio, email, số điện thoại, địa chỉ, link mạng xã hội

**Cách sửa:**
```json
{
  "studioName": "Tên studio của bạn",
  "tagline": "Slogan của bạn",
  "email": "email@của.bạn",
  "phone": "+84 xxx xxx xxx",
  "address": "Địa chỉ của bạn",
  "facebook": "https://facebook.com/trang-cua-ban",
  "youtube": "https://youtube.com/@kenh-cua-ban",
  "instagram": "https://instagram.com/tai-khoan-cua-ban"
}
```

---

### 2️⃣ **hero.txt** - Banner đầu trang

**Sửa gì:** Tiêu đề lớn, mô tả, nút bấm

**Cách sửa:**
```json
{
  "title": "Tiêu đề chính của bạn",
  "subtitle": "Tiêu đề phụ",
  "description": "Mô tả ngắn về studio",
  "primaryButton": "Tên nút chính",
  "secondaryButton": "Tên nút phụ"
}
```

**Ví dụ:**
```json
{
  "title": "Livestream Chuyên Nghiệp",
  "subtitle": "Chất lượng cao - Giá tốt",
  "description": "Chúng tôi là đội ngũ livestream hàng đầu VN",
  "primaryButton": "Xem dịch vụ",
  "secondaryButton": "Liên hệ"
}
```

---

### 3️⃣ **about.txt** - Giới thiệu studio

**Sửa gì:** Giới thiệu về studio, các điểm mạnh

**Cách sửa:**
```json
{
  "title": "Về chúng tôi",
  "subtitle": "Đối tác tin cậy",
  "description": "Giới thiệu chi tiết về studio...",
  "features": [
    {
      "icon": "📹",
      "title": "Tên tính năng",
      "description": "Mô tả tính năng"
    }
  ]
}
```

**Các icon có thể dùng:** 📹 📺 🎥 🎬 ⚡ 🎯 💡 ⭐ 🏆 👥 🎨 📊

---

### 4️⃣ **services.txt** - Dịch vụ

**Sửa gì:** Danh sách dịch vụ, chi tiết từng dịch vụ

**Cách thêm dịch vụ mới:**
```json
{
  "title": "Dịch vụ của chúng tôi",
  "subtitle": "Giải pháp toàn diện",
  "services": [
    {
      "name": "Tên dịch vụ",
      "description": "Mô tả dịch vụ",
      "features": [
        "Tính năng 1",
        "Tính năng 2",
        "Tính năng 3",
        "Tính năng 4"
      ]
    }
  ]
}
```

**Ví dụ thêm dịch vụ:**
```json
{
  "name": "Livestream Gaming",
  "description": "Phát sóng game với chất lượng cao, âm thanh sống động",
  "features": [
    "OBS Studio setup",
    "Overlay đẹp mắt",
    "Hỗ trợ 24/7",
    "Giá cả phải chăng"
  ]
}
```

---

### 5️⃣ **projects.txt** - Dự án đã làm

**Sửa gì:** Danh sách dự án tiêu biểu

**Cách thêm dự án:**
```json
{
  "title": "Dự án tiêu biểu",
  "subtitle": "Những gì chúng tôi đã làm",
  "projects": [
    {
      "name": "Tên dự án",
      "description": "Mô tả dự án",
      "image": "project1.jpg",
      "category": "Thể loại"
    }
  ]
}
```

**Các category gợi ý:**
- Bóng đá
- Bóng rổ
- Esports
- Tennis
- Marathon
- Sự kiện

---

### 6️⃣ **contact.txt** - Liên hệ

**Sửa gì:** Tiêu đề phần liên hệ, giờ làm việc

```json
{
  "title": "Liên hệ với chúng tôi",
  "subtitle": "Câu mô tả",
  "description": "Lời mời liên hệ",
  "workingHours": "Thứ 2 - CN: 8:00 - 22:00",
  "formFields": {
    "namePlaceholder": "Họ và tên",
    "emailPlaceholder": "Email",
    "phonePlaceholder": "Số điện thoại",
    "messagePlaceholder": "Nội dung tin nhắn",
    "submitButton": "Gửi tin nhắn"
  }
}
```

---

## ⚠️ LƯU Ý QUAN TRỌNG

### ✅ PHẢI LÀM:
1. **Lưu file sau khi sửa** (Ctrl + S)
2. **Giữ nguyên cấu trúc JSON** (dấu ngoặc, dấu phẩy)
3. **Dùng dấu ngoặc kép `"` chứ không phải `'`**
4. **Refresh trang web (F5) sau khi sửa**
5. **Backup file trước khi sửa**

### ❌ KHÔNG LÀM:
1. Xóa dấu `{`, `}`, `[`, `]`
2. Quên dấu phẩy `,` giữa các dòng
3. Dùng ký tự đặc biệt không hợp lệ trong JSON
4. Xóa toàn bộ nội dung file

---

## 🔍 KIỂM TRA JSON HỢP LỆ

Nếu sau khi sửa mà website không hiển thị đúng:

1. Truy cập: https://jsonlint.com
2. Copy nội dung file txt bạn vừa sửa
3. Paste vào và click "Validate JSON"
4. Nếu có lỗi, nó sẽ chỉ ra lỗi ở dòng nào

---

## 📋 QUY TRÌNH SỬA NHANH

```
1. Mở file .txt cần sửa (bằng Notepad, VS Code, hoặc editor nào cũng được)
2. Tìm phần cần sửa
3. Sửa nội dung (GIỮ NGUYÊN format)
4. Lưu file (Ctrl + S)
5. Mở trình duyệt và refresh (F5)
6. Xem kết quả
```

---

## 💡 VÍ DỤ THỰC TẾ

**Tình huống:** Bạn muốn đổi số điện thoại

**Bước 1:** Mở `content/general.txt`

**Bước 2:** Tìm dòng:
```json
"phone": "+84 123 456 789",
```

**Bước 3:** Sửa thành:
```json
"phone": "+84 987 654 321",
```

**Bước 4:** Lưu file (Ctrl + S)

**Bước 5:** Refresh website (F5)

**XONG!** Số điện thoại đã được cập nhật trên toàn bộ website.

---

## 📞 CẦN TRỢ GIÚP?

Nếu gặp khó khăn:
1. Kiểm tra file có đúng format JSON không (dùng jsonlint.com)
2. Đảm bảo đã lưu file
3. Xóa cache trình duyệt (Ctrl + Shift + R)
4. Liên hệ support nếu vẫn không được

---

**🎉 Chúc bạn chỉnh sửa thành công!**