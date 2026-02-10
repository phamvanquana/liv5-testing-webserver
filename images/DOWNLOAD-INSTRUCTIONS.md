# 📥 Tải Ảnh Mẫu cho Projects

## 🚀 Cách 1: Tự động tải bằng Python Script (Khuyến nghị)

### Chạy script:
```bash
python download_sample_images.py
```

Script sẽ tự động:
- ✅ Tải 4 ảnh mẫu từ Unsplash (miễn phí)
- ✅ Lưu vào folder `images/`
- ✅ Tối ưu kích thước (600x400px)

### Danh sách ảnh sẽ tải:
1. `football-tournament.jpg` - Sân bóng đá
2. `esports-gaming.jpg` - Gaming/Esports
3. `marathon-running.jpg` - Marathon/Chạy bộ
4. `tennis-match.jpg` - Sân tennis

## 📱 Cách 2: Tự tải thủ công

### Nguồn ảnh miễn phí (free stock photos):

#### Unsplash (Không cần đăng ký):
- **Sports:** https://unsplash.com/s/photos/sports
- **Football:** https://unsplash.com/s/photos/football
- **Esports:** https://unsplash.com/s/photos/gaming
- **Marathon:** https://unsplash.com/s/photos/marathon
- **Tennis:** https://unsplash.com/s/photos/tennis

#### Pexels (Không cần đăng ký):
- **Sports:** https://www.pexels.com/search/sports/
- **Gaming:** https://www.pexels.com/search/gaming/

#### Pixabay:
- https://pixabay.com/images/search/sports/

### Các bước tải thủ công:
1. Vào một trong các trang trên
2. Tìm ảnh phù hợp
3. Download ảnh (chọn size 600-800px wide)
4. Đổi tên file (vd: `football-tournament.jpg`)
5. Copy vào folder `images/`
6. Cập nhật `content/projects.txt`

## 🔧 Sau khi có ảnh:

### Cập nhật content/projects.txt:

```json
{
  "projects": [
    {
      "name": "Giải bóng đá Cup Vàng 2025",
      "description": "Livestream toàn bộ 32 trận đấu",
      "image": "football-tournament.jpg",    ← Đổi tên ảnh
      "category": "Bóng đá"
    },
    {
      "name": "Giải Esports National Championship",
      "description": "Phát sóng 3 ngày liên tục",
      "image": "esports-gaming.jpg",         ← Đổi tên ảnh
      "category": "Esports"
    },
    {
      "name": "Marathon TP.HCM 2025",
      "description": "Livestream với drone",
      "image": "marathon-running.jpg",       ← Đổi tên ảnh
      "category": "Thể thao ngoài trời"
    },
    {
      "name": "Giải Tennis Mở rộng",
      "description": "Phát sóng chuyên nghiệp",
      "image": "tennis-match.jpg",           ← Đổi tên ảnh
      "category": "Tennis"
    }
  ]
}
```

### Refresh website (F5) để xem kết quả! 🎉

## 💡 Tips

- **Kích thước:** 600x400px hoặc 800x533px (tỷ lệ 3:2)
- **Dung lượng:** Nên < 200KB
- **Format:** JPG (cho ảnh thật), PNG (cho ảnh có logo/text)
- **Tên file:** Không dấu, không khoảng trắng

## ⚠️ Lưu ý bản quyền

Tất cả ảnh từ Unsplash, Pexels, Pixabay đều:
- ✅ Miễn phí sử dụng
- ✅ Không cần credit (nhưng nên credit)
- ✅ Có thể dùng cho commercial
- ✅ Có thể chỉnh sửa

---

**Chúc bạn thành công! 🚀**
