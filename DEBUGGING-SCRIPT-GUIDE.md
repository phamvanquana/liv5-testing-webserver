# 🎬 Debugging Live Run - Hướng dẫn sử dụng

File Python script để chạy local development server cho Liv5Studio Landing Page.

## 🚀 Cách sử dụng

### Cách 1: Chạy mặc định (Port 8080)
```bash
python debugging_live_run.py
```

### Cách 2: Chỉ định port khác
```bash
python debugging_live_run.py --port 3000
python debugging_live_run.py -p 9000
```

### Cách 3: Không tự động mở browser
```bash
python debugging_live_run.py --no-browser
```

### Cách 4: Chạy trên tất cả network interfaces
```bash
python debugging_live_run.py --host 0.0.0.0
```

### Cách 5: Kết hợp nhiều options
```bash
python debugging_live_run.py -p 3000 --host 0.0.0.0 --no-browser
```

## 📋 Tính năng

✅ **Tự động kiểm tra project structure**
- Xác minh file index.html tồn tại
- Kiểm tra các folder cần thiết (content, styles, scripts, logo)

✅ **Tự động tìm port khả dụng**
- Nếu port 8080 đang dùng, tự động tìm port khác

✅ **Tự động mở browser**
- Mở trình duyệt sau 1.5 giây

✅ **Logging có màu sắc**
- Dễ theo dõi request trong terminal
- Timestamp cho mỗi request
- Color-coded theo HTTP method

✅ **No-cache headers**
- File được load mới nhất mỗi lần refresh
- Không bị cache cũ

✅ **Hiển thị thông tin chi tiết**
- Local URL
- Network URL (cho các thiết bị khác trong mạng)
- Port đang dùng
- Root directory

## 🎯 Khi nào dùng script này?

### Development (Phát triển)
- Khi đang code và cần xem thay đổi realtime
- Test responsive trên nhiều thiết bị (dùng Network URL)
- Debug JavaScript/CSS

### Testing (Kiểm thử)
- Test trước khi deploy lên IIS
- Kiểm tra content files có load đúng không
- Verify tất cả links và resources

### Demo
- Show website cho client
- Presentation nội bộ

## ⌨️ Shortcuts

| Phím | Chức năng |
|------|-----------|
| `Ctrl+C` | Dừng server |
| `F5` trong browser | Refresh để thấy thay đổi |

## 🔧 Troubleshooting

### Port đã được sử dụng
Script sẽ tự động tìm port khác. Hoặc bạn có thể chỉ định port khác:
```bash
python debugging_live_run.py -p 9000
```

### Browser không tự động mở
Mở thủ công: `http://localhost:8080`

Hoặc chạy với option:
```bash
python debugging_live_run.py --no-browser
```

### File không tìm thấy
Đảm bảo bạn đang ở đúng folder chứa file `index.html`

### Python không được nhận diện
Kiểm tra Python đã cài đặt:
```bash
python --version
```

Hoặc dùng:
```bash
python3 debugging_live_run.py
```

## 📱 Truy cập từ thiết bị khác

1. Chạy server với host `0.0.0.0`:
```bash
python debugging_live_run.py --host 0.0.0.0
```

2. Trên thiết bị khác (điện thoại, tablet) trong cùng mạng WiFi, mở browser và truy cập:
```
http://192.168.1.31:8080
```
(IP này sẽ được hiển thị khi chạy script - phần "Network")

## 💡 Tips

### Tip 1: Live Reload
Chỉnh sửa file trong `content/` → Lưu → Refresh browser (F5) → Thấy thay đổi ngay

### Tip 2: Mobile Testing
- Chạy với `--host 0.0.0.0`
- Dùng Network URL để test trên điện thoại
- Perfect cho test responsive design

### Tip 3: Multiple Ports
Có thể chạy nhiều instance với port khác nhau:
```bash
# Terminal 1
python debugging_live_run.py -p 8080

# Terminal 2
python debugging_live_run.py -p 3000
```

### Tip 4: Quick Stop & Restart
```bash
# Dừng: Ctrl+C
# Chạy lại: ↑ (arrow up) + Enter
```

## 🆚 So sánh với command thông thường

### Trước đây:
```bash
python -m http.server 8080
```
❌ Không có màu sắc
❌ Không tự mở browser
❌ Không kiểm tra structure
❌ Không có thông tin đầy đủ

### Bây giờ:
```bash
python debugging_live_run.py
```
✅ Có màu sắc, dễ đọc
✅ Tự động mở browser
✅ Kiểm tra project structure
✅ Thông tin đầy đủ (Local, Network URLs)
✅ No-cache headers
✅ User-friendly messages

## 📖 Help

Xem tất cả options:
```bash
python debugging_live_run.py --help
```

Output:
```
usage: debugging_live_run.py [-h] [-p PORT] [--host HOST] [--no-browser]

Liv5Studio Landing Page Development Server

optional arguments:
  -h, --help            show this help message and exit
  -p PORT, --port PORT  Port number to run server on (default: 8080)
  --host HOST           Host to bind to (default: localhost)
  --no-browser          Do not open browser automatically

Examples:
  python debugging_live_run.py                    # Run on default port 8080
  python debugging_live_run.py --port 3000        # Run on port 3000
  python debugging_live_run.py --no-browser       # Don't open browser
  python debugging_live_run.py -p 9000 --host 0.0.0.0  # Run on all interfaces
```

## 🎨 Output Example

```
╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║           🎬 Liv5Studio Landing Page                      ║
║              Live Development Server                      ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝

✓ Project structure verified

✓ Server started successfully!

Server Information:
  • Local:            http://localhost:8080
  • Network:          http://192.168.1.31:8080
  • Port:             8080
  • Root Directory:   C:\...\Liv5LandingPage

Pages:
  • Home:             http://localhost:8080/index.html
  • Content Files:    http://localhost:8080/content/

Quick Actions:
  • Press Ctrl+C to stop the server
  • Refresh browser (F5) to see changes
  • Edit files in content/ folder for quick updates

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Serving files... (logs will appear below)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ Browser opened automatically

[22:52:14] "GET / HTTP/1.1" 200 -
[22:52:14] "GET /styles/main.css HTTP/1.1" 200 -
[22:52:15] "GET /scripts/main.js HTTP/1.1" 200 -
```

## 📞 Support

Nếu gặp vấn đề, kiểm tra:
1. Python đã cài đặt chưa (`python --version`)
2. Đang ở đúng thư mục chứa website
3. Port có bị sử dụng không
4. Firewall có block không

---

**Happy Coding! 🚀**