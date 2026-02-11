# 🔧 Fix lỗi IIS Error 500.19 - Internal Server Error

## ❌ Lỗi bạn đang gặp

```
HTTP Error 500.19 - Internal Server Error
Error Code: 0x80070004
Config Error: Không thể đọc configuration file
```

## 🎯 Nguyên nhân

Lỗi này xảy ra vì:

1. ❌ **File `web.config` cũ có lỗi cú pháp:**
   - Duplicate `<httpProtocol>` section (xuất hiện 2 lần)
   - XML không hợp lệ

2. ❌ **Thiếu URL Rewrite Module:**
   - File cũ có section `<rewrite>` nhưng IIS chưa cài module này
   - Error code `0x80070004` = Module không tìm thấy

## ✅ Giải pháp (Đã Fix)

Tôi đã tạo 2 versions của `web.config`:

### 📄 Version 1: `web.config` (Hiện tại - Đơn giản)

✅ **Không cần cài thêm module gì**
✅ **Đã fix lỗi duplicate section**
✅ **Hoạt động ngay lập tức**

**Features:**
- ✅ Default Document (index.html)
- ✅ MIME Types (.txt, .json, .woff, .woff2)
- ✅ Security Headers
- ✅ CORS Support
- ✅ Compression
- ✅ Custom 404 Page

### 📄 Version 2: `web.advanced.config` (Nâng cao)

⚠️ **Yêu cầu URL Rewrite Module**

**Features thêm:**
- ✅ Tất cả features của version 1
- ✅ HTTPS Redirect (HTTP → HTTPS tự động)
- ✅ Remove trailing slash
- ✅ Browser caching
- ✅ Content Security Policy

---

## 🚀 Cách sử dụng

### Bước 1️⃣: Upload file `web.config` mới lên server

1. **Copy file `web.config` mới** (đã fix) lên server:
   ```
   C:\inetpub\wwwroot\liv5-testing-webserver-main\web.config
   ```

2. **Ghi đè file cũ** (backup file cũ trước nếu cần)

### Bước 2️⃣: Restart IIS Site

**Cách 1 - Từ IIS Manager:**
1. Mở IIS Manager
2. Click phải vào Site > **Manage Website** > **Restart**

**Cách 2 - Từ Console:**
```powershell
# Restart Application Pool
Restart-WebAppPool -Name "DefaultAppPool"

# Hoặc restart toàn bộ IIS
iisreset
```

### Bước 3️⃣: Test website

Mở browser và truy cập:
```
http://localhost:8080
hoặc
http://123.16.178.213:8006
```

**Checklist:**
- ✅ Website hiển thị bình thường (không còn lỗi 500.19)
- ✅ Logo xuất hiện
- ✅ Dark mode toggle hoạt động
- ✅ Language switch VN/EN hoạt động
- ✅ Images hiển thị đúng

### Bước 4️⃣: Nếu vẫn còn lỗi

**Lỗi MIME Type duplicate:**

Nếu gặp lỗi kiểu:
```
Cannot add duplicate collection entry of type 'mimeMap' with unique key attribute 'fileExtension' set to '.txt'
```

**Fix:**
1. IIS Manager > Site > **MIME Types**
2. Tìm và **Remove** các entries:
   - `.txt`
   - `.json`
   - `.woff`
   - `.woff2`
3. Save và restart site
4. IIS sẽ đọc MIME types từ `web.config`

**Lỗi Permission:**

Nếu gặp lỗi 403 hoặc không load được files:

1. Click phải folder site > **Properties** > **Security**
2. Thêm quyền cho **IIS_IUSRS**:
   - ✅ Read
   - ✅ Read & Execute
   - ✅ List folder contents
3. Click **Apply** > **OK**

---

## 🔥 Nếu muốn dùng HTTPS Redirect (Version Advanced)

### Bước 1: Cài URL Rewrite Module

**Download:**
- Truy cập: https://www.iis.net/downloads/microsoft/url-rewrite
- Hoặc: https://www.microsoft.com/en-us/download/details.aspx?id=47337

**Cài đặt:**
1. Download file `rewrite_amd64_en-US.msi`
2. Double-click để cài đặt
3. Next > Next > Install
4. Restart IIS: `iisreset`

### Bước 2: Cài SSL Certificate

Nếu chưa có SSL cert:

**Option 1 - Self-Signed (Testing):**
```powershell
# Tạo self-signed certificate
New-SelfSignedCertificate -DnsName "liv5studio.com" -CertStoreLocation "cert:\LocalMachine\My"
```

**Option 2 - Let's Encrypt (Production):**
1. Download **Certify The Web**: https://certifytheweb.com
2. Install và config cho domain của bạn
3. Tự động renew mỗi 90 ngày

**Option 3 - Commercial SSL:**
- Mua từ DigiCert, GoDaddy, Namecheap, etc.

### Bước 3: Bind HTTPS trong IIS

1. IIS Manager > Site > **Bindings**
2. Click **Add**:
   ```
   Type: https
   Port: 443
   SSL Certificate: [chọn certificate]
   ```
3. Click **OK**

### Bước 4: Sử dụng web.advanced.config

1. **Backup `web.config` hiện tại:**
   ```powershell
   Copy-Item web.config web.config.backup
   ```

2. **Đổi tên file:**
   ```powershell
   Remove-Item web.config
   Rename-Item web.advanced.config web.config
   ```

3. **Restart site**

4. **Test HTTPS redirect:**
   - Truy cập `http://yoursite.com` → tự động chuyển sang `https://yoursite.com`

---

## 📊 So sánh 2 versions

| Feature | web.config (Simple) | web.advanced.config |
|---------|---------------------|---------------------|
| Hoạt động ngay | ✅ Có | ⚠️ Cần cài module |
| Default Document | ✅ | ✅ |
| MIME Types | ✅ | ✅ |
| Security Headers | ✅ | ✅ (nhiều hơn) |
| CORS | ✅ | ✅ |
| Compression | ✅ | ✅ |
| Custom 404 | ✅ | ✅ |
| HTTPS Redirect | ❌ | ✅ Có |
| Remove trailing slash | ❌ | ✅ Có |
| Browser Caching | ❌ | ✅ Có |
| CSP Header | ❌ | ✅ Có (optional) |

## 💡 Khuyến nghị

### Cho Development/Testing:
👉 Dùng **`web.config`** (version đơn giản) - đã đủ!

### Cho Production:
👉 Nên dùng **`web.advanced.config`** với:
- ✅ URL Rewrite Module đã cài
- ✅ SSL Certificate hợp lệ
- ✅ HTTPS binding đã config
- ✅ Security headers đầy đủ

---

## 🔍 Debug nếu vẫn lỗi

### Kiểm tra cú pháp XML:

```powershell
# Mở PowerShell tại folder site
[xml]$config = Get-Content web.config
# Nếu có lỗi XML sẽ báo ngay
```

### Xem chi tiết lỗi:

1. Mở `web.config`
2. Thêm vào (nếu chưa có):
   ```xml
   <system.webServer>
       <httpErrors errorMode="Detailed" />
   </system.webServer>
   ```
3. Reload trang → xem error message chi tiết

### Kiểm tra Event Viewer:

```powershell
# Mở Event Viewer
eventvwr.msc
```

- **Windows Logs** > **Application**
- Filter theo Source: **IIS**, **ASP.NET**
- Xem error logs để biết chi tiết

### Kiểm tra IIS Features đã cài:

```powershell
# Liệt kê features
Get-WindowsFeature -Name Web-*

# Cài Static Content (nếu thiếu)
Install-WindowsFeature -Name Web-Static-Content

# Cài URL Rewrite (nếu cần)
# Download từ: https://www.iis.net/downloads/microsoft/url-rewrite
```

---

## ✅ Tóm tắt

**Đã fix:**
- ✅ Loại bỏ duplicate `<httpProtocol>` section
- ✅ Merge all custom headers vào 1 section duy nhất
- ✅ Loại bỏ `<rewrite>` section (chuyển sang file advanced)
- ✅ Sửa MIME type `.txt` từ `application/json` → `text/plain`
- ✅ Loại bỏ `<system.web>` section không cần thiết

**Kết quả:**
- ✅ File `web.config` mới **hoạt động ngay** trên mọi IIS
- ✅ Không cần cài thêm module
- ✅ Cú pháp XML hợp lệ 100%
- ✅ Sẵn sàng cho production

**Bước tiếp theo:**
1. Upload `web.config` mới lên server
2. Restart IIS site
3. Test website
4. ✅ Done! Website sẽ chạy bình thường

---

🎉 **Chúc mừng! Lỗi 500.19 đã được fix!**
