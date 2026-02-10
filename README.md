# 🎬 Liv5Studio Landing Page

Website landing page chuyên nghiệp cho **Liv5Studio** - Studio livestream sự kiện thể thao hàng đầu.

## ✨ Tính năng nổi bật

- 🌓 **Dark/Light Mode** - Chuyển đổi giao diện sáng/tối với 1 click
- 🌍 **Đa ngôn ngữ** - Hỗ trợ Tiếng Việt & English
- 📱 **Responsive Design** - Tương thích mọi thiết bị
- ⚡ **Fast Loading** - Tối ưu hiệu năng
- ✏️ **Dễ chỉnh sửa** - Content được lưu trong file TXT đơn giản
- 🎨 **OriginUI Style** - Thiết kế hiện đại, minimal, clean
- 🚀 **IIS Ready** - Sẵn sàng deploy lên Windows Server

## 📁 Cấu trúc thư mục

```
Liv5LandingPage/
│
├── index.html                  # File HTML chính
├── web.config                  # Cấu hình IIS (sẵn sàng deploy)
├── debugging_live_run.py       # 🚀 Development server với tính năng đầy đủ
├── START-SERVER.bat            # 🚀 Double-click để chạy server (Windows)
├── DOWNLOAD-IMAGES.bat         # 📥 Tải ảnh mẫu từ Unsplash
├── download_sample_images.py   # Script tải ảnh
│
├── content_vn/                 # 🇻🇳 Nội dung Tiếng Việt
│   ├── general.txt            # Thông tin chung
│   ├── hero.txt               # Phần Hero (banner)
│   ├── about.txt              # Giới thiệu
│   ├── services.txt           # Dịch vụ
│   ├── projects.txt           # Dự án
│   └── contact.txt            # Liên hệ
│
├── content_en/                 # 🇬🇧 Nội dung English
│   ├── general.txt            # General info
│   ├── hero.txt               # Hero section
│   ├── about.txt              # About
│   ├── services.txt           # Services
│   ├── projects.txt           # Projects
│   └── contact.txt            # Contact
│
├── images/                     # Hình ảnh dự án
│   ├── football-tournament.jpg
│   ├── esports-gaming.jpg
│   ├── basketball-league.jpg
│   └── badminton-championship.jpg
│
├── logo/                       # Logo studio
│   ├── For Black BG use.png   # Logo cho nền đen
│   └── For White BG use.png   # Logo cho nền trắng
│
├── styles/
│   └── main.css               # CSS chính (OriginUI + Dark Mode)
│
├── scripts/
│   └── main.js                # JavaScript (Content Loader + Theme/Lang Switch)
│
└── docs/                       # Tài liệu hướng dẫn
    ├── HUONG-DAN-SUA-NOI-DUNG.md
    ├── DEBUGGING-SCRIPT-GUIDE.md
    └── DARK-MODE-AND-MULTILANG-GUIDE.md
```

## 🎨 Thiết kế & Giao diện

Website được thiết kế theo phong cách **OriginUI** - hiện đại, minimal, clean với:

### 🎨 Design System
- **Typography:** Inter font family - chuyên nghiệp, dễ đọc
- **Color Scheme:** Primary (Indigo), Accent (Pink), Neutral grays
- **Spacing:** Consistent spacing scale (0.5rem → 6rem)
- **Border Radius:** Smooth rounded corners (0.375rem → 1.5rem)
- **Shadows:** Subtle elevation system (sm → xl)

### 🌓 Dark/Light Mode
- **Light Mode:** Clean white background, dark text
- **Dark Mode:** Deep slate background (#0F172A), light text
- **Auto-persist:** LocalStorage lưu preference
- **Smooth transition:** 0.3s ease animation
- **Toggle button:** 🌙/☀️ icon trong navigation

### 🌍 Multi-Language Support
- **Vietnamese (VN):** Default language, nội dung trong `content_vn/`
- **English (EN):** Translations trong `content_en/`
- **Language switcher:** VN/EN button trong navigation
- **Auto-reload:** Content tự động load khi đổi ngôn ngữ

### 📱 Responsive Design
- **Desktop:** Full layout với grid system
- **Tablet (< 1024px):** Adjusted columns
- **Mobile (< 768px):** Stacked layout, hamburger menu
- **Small Mobile (< 480px):** Optimized typography & spacing

### ✨ Animations
- **Smooth scrolling:** Navigation mượt mà
- **Hover effects:** Transform, scale, color transitions
- **Card animations:** Lift on hover với shadow
- **Button feedback:** Subtle translateY effect

---

## 🚀 Quick Start - Chạy website ngay

### Cách 1️⃣: Double-click (Đơn giản nhất - Windows)
1. Double-click file **`START-SERVER.bat`**
2. Trình duyệt tự động mở tại http://localhost:8080
3. Done! 🎉

### Cách 2️⃣: Python Script (Đầy đủ tính năng)
```bash
python debugging_live_run.py
```

**Tính năng:**
- ✅ Tự động mở browser
- ✅ Logging có màu sắc
- ✅ Kiểm tra project structure
- ✅ Hiển thị Local & Network URLs
- ✅ No-cache headers (luôn load file mới nhất)

**Options:**
```bash
python debugging_live_run.py --port 3000        # Chạy trên port 3000
python debugging_live_run.py --no-browser       # Không tự mở browser
python debugging_live_run.py --host 0.0.0.0     # Cho phép truy cập từ thiết bị khác
python debugging_live_run.py --help             # Xem tất cả options
```

👉 **Chi tiết:** Xem file [DEBUGGING-SCRIPT-GUIDE.md](DEBUGGING-SCRIPT-GUIDE.md)

### Cách 3️⃣: Live Server Extension (VS Code)
1. Cài extension "Live Server"
2. Right-click `index.html` > Open with Live Server

### Cách 4️⃣: Python HTTP Server thông thường
```bash
python -m http.server 8080
```
Sau đó mở http://localhost:8080

---

## ✏️ Cách chỉnh sửa nội dung

### 🌍 Chọn ngôn ngữ cần chỉnh sửa

Website hỗ trợ 2 ngôn ngữ với content riêng biệt:
- **Tiếng Việt:** Chỉnh sửa file trong folder `content_vn/`
- **English:** Chỉnh sửa file trong folder `content_en/`

### Bước 1: Mở file TXT tương ứng

Tất cả nội dung website được lưu ở dạng JSON trong các file `.txt`. Bạn chỉ cần mở file bằng Notepad/VS Code và chỉnh sửa.

### Bước 2: Chỉnh sửa theo cấu trúc JSON

**Ví dụ - Chỉnh sửa Hero Section (content_vn/hero.txt):**

```json
{
  "title": "Tiêu đề mới của bạn",
  "subtitle": "Phụ đề mới",
  "description": "Mô tả chi tiết hơn...",
  "primaryButton": "Nút chính",
  "secondaryButton": "Nút phụ"
}
```

**Ví dụ - Thêm dịch vụ mới (content_vn/services.txt):**

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
        "Tính năng 3"
      ]
    }
  ]
}
```

### Bước 3: Lưu file và refresh trình duyệt

Sau khi chỉnh sửa, lưu file và reload trang web (F5 hoặc Ctrl+R) để thấy thay đổi.

### 💡 Tips khi chỉnh sửa

- ⚠️ **Giữ nguyên cấu trúc JSON** - Không xóa dấu ngoặc, dấu phẩy
- ✅ **Validate JSON** - Sử dụng [jsonlint.com](https://jsonlint.com) để kiểm tra
- 💾 **Backup trước khi sửa** - Copy file gốc để phòng trường hợp sai
- 🌍 **Đồng bộ 2 ngôn ngữ** - Nhớ cập nhật cả `content_vn/` và `content_en/`

## 📋 Danh sách file nội dung

| File | Mục đích | Ví dụ nội dung |
|------|----------|----------------|
| **general.txt** | Thông tin chung | Tên studio, slogan, email, phone, địa chỉ, mạng xã hội |
| **hero.txt** | Banner đầu trang | Tiêu đề chính, mô tả, nút CTA |
| **about.txt** | Giới thiệu studio | Mô tả chi tiết, các tính năng nổi bật (icon + text) |
| **services.txt** | Dịch vụ | Danh sách dịch vụ, mô tả, features từng dịch vụ |
| **projects.txt** | Dự án đã làm | Tên dự án, mô tả, category, tên file ảnh |
| **contact.txt** | Liên hệ | Text mô tả, thông tin liên hệ, placeholder form |

👉 **Chi tiết:** Xem [HUONG-DAN-SUA-NOI-DUNG.md](HUONG-DAN-SUA-NOI-DUNG.md)

## 🚀 Hướng dẫn deploy lên IIS (Windows Server)

### 📋 Yêu cầu hệ thống

- ✅ Windows Server 2012 R2 trở lên (hoặc Windows 10/11 Pro)
- ✅ IIS (Internet Information Services) đã được cài đặt
- ✅ .NET Framework 4.7+ (tùy chọn, cho ASP.NET nếu cần mở rộng sau)

### 🔧 Bước 1: Cài đặt IIS (nếu chưa có)

**Windows Server:**
1. Mở **Server Manager**
2. Click **Add roles and features**
3. Chọn **Web Server (IIS)**
4. Cài đặt các features:
   - ✅ Static Content
   - ✅ Default Document
   - ✅ Directory Browsing
   - ✅ HTTP Errors
   - ✅ HTTP Logging

**Windows 10/11 Pro:**
1. **Control Panel** > **Programs** > **Turn Windows features on or off**
2. Tích chọn **Internet Information Services**
3. Expand và chọn:
   - ✅ Web Management Tools > IIS Management Console
   - ✅ World Wide Web Services > Common HTTP Features > Static Content
   - ✅ World Wide Web Services > Common HTTP Features > Default Document

### 📦 Bước 2: Chuẩn bị files

1. **Copy toàn bộ project** vào server:
   ```
   C:\inetpub\wwwroot\Liv5Studio\
   ```
   
2. **Kiểm tra cấu trúc folder:**
   ```
   C:\inetpub\wwwroot\Liv5Studio\
   ├── index.html
   ├── web.config          ← Quan trọng!
   ├── content_vn\
   ├── content_en\
   ├── images\
   ├── logo\
   ├── styles\
   └── scripts\
   ```

3. **Verify file web.config:**
   - File này CỰC KỲ QUAN TRỌNG cho IIS
   - Đã được config sẵn với:
     - ✅ MIME types cho .txt, .json, fonts
     - ✅ Default document (index.html)
     - ✅ URL rewriting rules
     - ✅ Error pages
     - ✅ Compression (gzip)

### 🌐 Bước 3: Tạo Website trong IIS

1. **Mở IIS Manager:**
   - Nhấn `Windows + R` > gõ `inetmgr` > Enter
   - Hoặc: Start Menu > tìm "Internet Information Services"

2. **Tạo Website mới:**
   - Trong cây bên trái, expand **Server** > click phải **Sites** > **Add Website**
   
3. **Điền thông tin Website:**
   ```
   Site name:         Liv5Studio
   Application pool:  DefaultAppPool (hoặc tạo mới)
   Physical path:     C:\inetpub\wwwroot\Liv5Studio
   
   Binding:
   - Type:            http
   - IP address:      All Unassigned
   - Port:            80 (hoặc 8080 nếu port 80 đã dùng)
   - Host name:       liv5studio.com (hoặc để trống cho localhost)
   ```
   
4. Click **OK** để tạo website

### ⚙️ Bước 4: Cấu hình Application Pool

1. **Click vào Application Pools** (cột bên trái)
2. **Tìm App Pool của website** (ví dụ: DefaultAppPool hoặc Liv5Studio)
3. **Click phải** > **Advanced Settings**
4. **Cấu hình:**
   ```
   .NET CLR Version:       No Managed Code  ← QUAN TRỌNG!
   Managed Pipeline Mode:  Integrated
   Start Mode:             AlwaysRunning (khuyến nghị)
   Identity:               ApplicationPoolIdentity
   ```
5. Click **OK**

> **📌 Lưu ý:** Set `.NET CLR Version = No Managed Code` vì đây là **static website** (HTML/CSS/JS), không cần ASP.NET runtime.

### 🔐 Bước 5: Cấu hình Permissions

1. **Mở File Explorer**, navigate đến:
   ```
   C:\inetpub\wwwroot\Liv5Studio
   ```

2. **Click phải folder** > **Properties** > **Security tab**

3. **Thêm permissions cho IIS:**
   - Click **Edit** > **Add**
   - Nhập: `IIS_IUSRS` > **Check Names** > **OK**
   - Permissions cho IIS_IUSRS:
     - ✅ Read
     - ✅ Read & Execute
     - ✅ List folder contents
   - Click **Apply** > **OK**

4. **Optional - Thêm IUSR** (nếu IIS_IUSRS không đủ):
   - Lặp lại bước trên với user `IUSR`
   - Cấp quyền **Read** và **Read & Execute**

### 🔥 Bước 6: Cấu hình MIME Types (đã có sẵn trong web.config)

File `web.config` đã cấu hình sẵn các MIME types cần thiết:

```xml
<staticContent>
    <mimeMap fileExtension=".txt" mimeType="text/plain" />
    <mimeMap fileExtension=".json" mimeType="application/json" />
    <mimeMap fileExtension=".woff" mimeType="font/woff" />
    <mimeMap fileExtension=".woff2" mimeType="font/woff2" />
</staticContent>
```

**Nếu gặp lỗi MIME type duplicate:**
1. IIS Manager > Site > **MIME Types**
2. Xóa các entries bị trùng (.txt, .json, .woff, .woff2)
3. IIS sẽ đọc từ web.config

### 🌐 Bước 7: Kiểm tra DNS & Domain (Production)

**Cho LocalHost/Testing:**
- Truy cập: `http://localhost`
- Hoặc: `http://localhost:8080` (nếu dùng port 8080)

**Cho Production với Domain:**
1. **Cấu hình DNS:**
   - Tạo A Record: `liv5studio.com` → IP Server
   - Tạo CNAME: `www.liv5studio.com` → `liv5studio.com`

2. **Update Binding trong IIS:**
   - IIS Manager > Site > click phải > **Bindings**
   - **Add** > Type: `http`, Port: `80`, Host name: `liv5studio.com`
   - **Add** > Type: `http`, Port: `80`, Host name: `www.liv5studio.com`

3. **Cài đặt SSL Certificate (HTTPS):**
   - Có SSL? Click **Add** > Type: `https`, Port: `443`, SSL certificate: [chọn cert]
   - Không có? Dùng **Let's Encrypt** hoặc **Cloudflare** để có free SSL

### 🧪 Bước 8: Test Website

1. **Browse từ IIS:**
   - IIS Manager > Site > click phải > **Manage Website** > **Browse**
   - Hoặc click **Browse *:80 (http)** ở cột bên phải

2. **Test từ Browser:**
   ```
   http://localhost
   http://SERVER_IP
   http://liv5studio.com
   ```

3. **Checklist:**
   - ✅ Website hiển thị đúng
   - ✅ Logo xuất hiện
   - ✅ Dark/Light mode toggle hoạt động
   - ✅ Language switch (VN/EN) hoạt động
   - ✅ Hình ảnh projects hiển thị
   - ✅ Form contact hoạt động
   - ✅ Responsive trên mobile

### 🔄 Bước 9: Enable Compression (Tối ưu tốc độ)

File `web.config` đã enable compression sẵn:

```xml
<urlCompression doStaticCompression="true" doDynamicCompression="true" />
```

**Kiểm tra compression hoạt động:**
1. Mở **Developer Tools** (F12)
2. Tab **Network** > Reload trang
3. Click vào file (ví dụ: main.css)
4. Xem **Response Headers** > tìm `Content-Encoding: gzip`

### 🛡️ Bước 10: Security Headers (Khuyến nghị)

Thêm vào `web.config` trong section `<system.webServer>`:

```xml
<httpProtocol>
    <customHeaders>
        <add name="X-Frame-Options" value="SAMEORIGIN" />
        <add name="X-Content-Type-Options" value="nosniff" />
        <add name="X-XSS-Protection" value="1; mode=block" />
        <add name="Referrer-Policy" value="strict-origin-when-cross-origin" />
    </customHeaders>
</httpProtocol>
```

### 📊 Bước 11: Monitoring & Logging

1. **Enable Failed Request Tracing:**
   - IIS Manager > Site > **Failed Request Tracing**
   - Giúp debug khi có lỗi

2. **Xem Logs:**
   ```
   C:\inetpub\logs\LogFiles\W3SVC[ID]\
   ```

3. **Event Viewer:**
   - `Windows + R` > `eventvwr`
   - **Windows Logs** > **Application**
   - Filter theo Source: **IIS**

---

## 🔧 Troubleshooting (Xử lý lỗi)

---

## 🔧 Troubleshooting (Xử lý lỗi)

### ❌ Lỗi 404 - File không tìm thấy

**Nguyên nhân:**
- Physical Path sai
- File index.html không tồn tại
- Default Document chưa được cấu hình

**Giải pháp:**
1. Kiểm tra Physical Path trong IIS có đúng không
2. Verify file `index.html` có trong folder root
3. IIS Manager > Site > **Default Document**
   - Đảm bảo `index.html` nằm trong list
   - Nếu không có: Click **Add** > nhập `index.html`
4. Restart site: Click phải > **Manage Website** > **Restart**

### ❌ Lỗi 500 - Internal Server Error

**Nguyên nhân:**
- File `web.config` sai cú pháp
- Module IIS chưa được cài đặt
- Application Pool bị stop

**Giải pháp:**
1. Kiểm tra file `web.config` có đúng cú pháp XML không
2. Xem chi tiết lỗi:
   - Mở `web.config`
   - Thêm vào `<system.webServer>`:
     ```xml
     <httpErrors errorMode="Detailed" />
     ```
   - Reload trang để xem error message chi tiết
3. Kiểm tra Application Pool:
   - IIS Manager > **Application Pools**
   - Tìm pool của site > nếu **Stopped** thì click **Start**
4. Xem Event Viewer:
   - `eventvwr` > **Application** logs
   - Tìm error từ IIS

### ❌ Lỗi 403 - Forbidden

**Nguyên nhân:**
- Thiếu quyền truy cập file/folder
- Directory Browsing bị block

**Giải pháp:**
1. Cấp quyền cho IIS_IUSRS (xem Bước 5 ở trên)
2. Đảm bảo có file `index.html` trong folder root
3. IIS Manager > Site > **Directory Browsing**
   - Enable nếu muốn browse folders (không khuyến nghị production)

### ⚠️ Nội dung không hiển thị / Hiển thị mặc định

**Nguyên nhân:**
- File .txt trong `content_vn/` hoặc `content_en/` bị thiếu
- JSON không hợp lệ
- JavaScript bị block
- MIME type không đúng

**Giải pháp:**
1. Kiểm tra all 6 files trong `content_vn/` và `content_en/`:
   - general.txt, hero.txt, about.txt, services.txt, projects.txt, contact.txt
2. Validate JSON của từng file tại [jsonlint.com](https://jsonlint.com)
3. Mở **Developer Tools** (F12) > **Console**:
   - Xem có error JavaScript không
   - Xem có file nào 404 không
4. Kiểm tra MIME type:
   - IIS Manager > Site > **MIME Types**
   - Đảm bảo `.txt` = `text/plain`
   - Đảm bảo `.json` = `application/json`

### 🖼️ Logo / Hình ảnh không hiển thị

**Nguyên nhân:**
- File không tồn tại
- Đường dẫn sai trong code
- MIME type thiếu

**Giải pháp:**
1. Verify files tồn tại:
   ```
   logo\For Black BG use.png
   logo\For White BG use.png
   images\football-tournament.jpg
   images\esports-gaming.jpg
   images\basketball-league.jpg
   images\badminton-championship.jpg
   ```
2. Check casing (uppercase/lowercase) - Windows không phân biệt nhưng Linux có
3. Mở F12 > **Network** tab > Reload > xem file nào 404
4. MIME types cho images:
   - `.jpg` = `image/jpeg`
   - `.png` = `image/png`
   - `.svg` = `image/svg+xml`

### 🌓 Dark Mode / Language Switch không hoạt động

**Nguyên nhân:**
- JavaScript bị block
- LocalStorage bị disable
- Browser cache cũ

**Giải pháp:**
1. Hard refresh: `Ctrl + Shift + R` (hoặc `Ctrl + F5`)
2. Clear browser cache & LocalStorage:
   - F12 > **Application** tab
   - **Local Storage** > delete entries
   - Reload trang
3. Kiểm tra JavaScript không bị error:
   - F12 > **Console** > không có lỗi màu đỏ
4. Test browser khác (Chrome, Firefox, Edge)

### 🐌 Website load chậm

**Giải pháp:**
1. Enable compression trong `web.config` (đã có sẵn)
2. Optimize images:
   - Nén ảnh xuống < 500KB/file
   - Dùng tools: TinyPNG, Squoosh
3. Enable Browser Caching trong `web.config`:
   ```xml
   <system.webServer>
       <staticContent>
           <clientCache cacheControlMode="UseMaxAge" cacheControlMaxAge="7.00:00:00" />
       </staticContent>
   </system.webServer>
   ```
4. CDN: Dùng Cloudflare hoặc CDN khác

### 🔒 HTTPS không hoạt động

**Giải pháp:**
1. Cài SSL Certificate:
   - **Let's Encrypt** (free): Dùng Certify The Web
   - **Commercial**: DigiCert, GoDaddy, etc.
2. Bind certificate trong IIS:
   - Site > **Bindings** > **Add**
   - Type: `https`, Port: `443`, SSL certificate: [chọn cert]
3. Force HTTPS redirect trong `web.config`:
   ```xml
   <rewrite>
       <rules>
           <rule name="HTTP to HTTPS redirect" stopProcessing="true">
               <match url="(.*)" />
               <conditions>
                   <add input="{HTTPS}" pattern="off" />
               </conditions>
               <action type="Redirect" url="https://{HTTP_HOST}/{R:1}" redirectType="Permanent" />
           </rule>
       </rules>
   </rewrite>
   ```

---

## 🎯 Tính năng

- ✅ **Dark/Light Mode** - Theme switcher với LocalStorage persistence
- ✅ **Multi-language** - Vietnamese & English content
- ✅ **Responsive Design** - Mobile, tablet, desktop
- ✅ **Smooth Scrolling** - Navigation mượt mà
- ✅ **Dynamic Content** - Load từ JSON text files
- ✅ **Contact Form** - Ready for backend integration
- ✅ **Social Media Links** - Facebook, YouTube, Instagram, TikTok
- ✅ **Modern UI** - OriginUI design system
- ✅ **Fast Loading** - Optimized performance
- ✅ **SEO Friendly** - Semantic HTML, meta tags
- ✅ **IIS Ready** - Pre-configured web.config
- ✅ **Compression** - Gzip enabled
- ✅ **Cross-browser** - Chrome, Firefox, Safari, Edge

## 📝 Best Practices & Tips

### 🔐 Security
1. **Luôn dùng HTTPS** cho production
2. **Update Windows & IIS** thường xuyên
3. **Firewall**: Chỉ mở port 80/443
4. **Backup**: Backup website và database định kỳ
5. **Security Headers**: Đã config trong web.config

### ⚡ Performance
1. **Optimize images**: Nén ảnh < 500KB, dùng WebP nếu có thể
2. **CDN**: Dùng Cloudflare cho static assets
3. **Browser Caching**: Đã enable trong web.config
4. **Compression**: Gzip đã bật sẵn
5. **Minify CSS/JS**: Có thể minify để giảm file size

### 🎨 Content Management
1. **Backup trước khi sửa**: Copy file .txt trước khi edit
2. **Validate JSON**: Dùng jsonlint.com
3. **Đồng bộ 2 ngôn ngữ**: Content VN và EN nên tương đồng
4. **Test trên local**: Test bằng debugging_live_run.py trước khi deploy lên server
5. **Version Control**: Dùng Git để track changes

### 📊 Monitoring
1. **Google Analytics**: Thêm tracking code vào index.html
2. **Uptime Monitoring**: Dùng UptimeRobot hoặc Pingdom
3. **IIS Logs**: Kiểm tra logs định kỳ tại `C:\inetpub\logs\`
4. **Error Monitoring**: Dùng Sentry hoặc New Relic

### 🚀 SEO
1. **Meta Tags**: Cập nhật title, description trong index.html
2. **Open Graph**: Thêm OG tags cho social sharing
3. **Sitemap**: Tạo sitemap.xml
4. **robots.txt**: Tạo file robots.txt
5. **Google Search Console**: Submit sitemap

---

## 📚 Tài liệu tham khảo

- 📄 [HUONG-DAN-SUA-NOI-DUNG.md](HUONG-DAN-SUA-NOI-DUNG.md) - Hướng dẫn chi tiết sửa nội dung
- 🐛 [DEBUGGING-SCRIPT-GUIDE.md](DEBUGGING-SCRIPT-GUIDE.md) - Hướng dẫn development server
- 🌓 [DARK-MODE-AND-MULTILANG-GUIDE.md](DARK-MODE-AND-MULTILANG-GUIDE.md) - Dark mode & Multi-language

## 📞 Hỗ trợ

Nếu cần hỗ trợ kỹ thuật:
- 📧 Email: contact@liv5studio.com
- 📱 Phone: +84 123 456 789
- 🌐 Website: https://liv5studio.com

---

**🎬 © 2026 Liv5Studio - Professional Sports Livestream Studio**

Made with ❤️ using OriginUI Design System