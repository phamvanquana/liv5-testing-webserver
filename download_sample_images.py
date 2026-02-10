#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Download Sample Images for Liv5Studio Projects
===============================================
Script tự động tải ảnh mẫu từ Unsplash (free stock photos)
"""

import urllib.request
import os
import sys
from pathlib import Path

# Màu sắc cho terminal
class Colors:
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    RED = '\033[91m'
    BLUE = '\033[94m'
    BOLD = '\033[1m'
    END = '\033[0m'

# Danh sách ảnh mẫu từ Unsplash (free to use)
SAMPLE_IMAGES = [
    {
        'name': 'football-tournament.jpg',
        'url': 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=400&fit=crop',
        'description': 'Bóng đá - Football stadium'
    },
    {
        'name': 'esports-gaming.jpg',
        'url': 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=600&h=400&fit=crop',
        'description': 'Esports - Gaming setup'
    },
    {
        'name': 'marathon-running.jpg',
        'url': 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=600&h=400&fit=crop',
        'description': 'Marathon - Running event'
    },
    {
        'name': 'tennis-match.jpg',
        'url': 'https://images.unsplash.com/photo-1554068865-24cecd4e34b8?w=600&h=400&fit=crop',
        'description': 'Tennis - Court action'
    }
]

def download_image(url, filename, description):
    """Download một ảnh từ URL"""
    try:
        print(f"{Colors.BLUE}⏳ Đang tải: {description}{Colors.END}")
        print(f"   → {filename}")
        
        # Set user agent để tránh bị block
        req = urllib.request.Request(
            url,
            headers={'User-Agent': 'Mozilla/5.0'}
        )
        
        # Download
        with urllib.request.urlopen(req, timeout=30) as response:
            data = response.read()
            
        # Lưu file
        filepath = Path('images') / filename
        with open(filepath, 'wb') as f:
            f.write(data)
        
        # Kiểm tra kích thước
        size_kb = len(data) / 1024
        print(f"{Colors.GREEN}   ✓ Hoàn thành! ({size_kb:.1f} KB){Colors.END}\n")
        return True
        
    except Exception as e:
        print(f"{Colors.RED}   ✗ Lỗi: {e}{Colors.END}\n")
        return False

def main():
    """Main function"""
    print(f"""
{Colors.BOLD}{Colors.BLUE}╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║     📸 Download Sample Images for Projects                ║
║        Liv5Studio Landing Page                            ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝{Colors.END}
""")
    
    # Kiểm tra folder images
    images_dir = Path('images')
    if not images_dir.exists():
        print(f"{Colors.YELLOW}⚠ Folder 'images' không tồn tại. Đang tạo...{Colors.END}")
        images_dir.mkdir()
        print(f"{Colors.GREEN}✓ Đã tạo folder 'images'{Colors.END}\n")
    
    # Đổi vào folder images để dễ quản lý
    script_dir = Path(__file__).parent
    os.chdir(script_dir)
    
    print(f"{Colors.BOLD}Sẽ tải {len(SAMPLE_IMAGES)} ảnh mẫu từ Unsplash (miễn phí):{Colors.END}\n")
    
    # Download từng ảnh
    success_count = 0
    for i, img in enumerate(SAMPLE_IMAGES, 1):
        print(f"{Colors.BOLD}[{i}/{len(SAMPLE_IMAGES)}]{Colors.END}")
        if download_image(img['url'], img['name'], img['description']):
            success_count += 1
    
    # Tóm tắt kết quả
    print(f"{Colors.YELLOW}{'─' * 60}{Colors.END}")
    print(f"{Colors.BOLD}Kết quả:{Colors.END}")
    print(f"  • Thành công: {Colors.GREEN}{success_count}/{len(SAMPLE_IMAGES)}{Colors.END}")
    print(f"  • Thất bại: {Colors.RED}{len(SAMPLE_IMAGES) - success_count}{Colors.END}")
    print(f"{Colors.YELLOW}{'─' * 60}{Colors.END}\n")
    
    if success_count > 0:
        print(f"{Colors.GREEN}{Colors.BOLD}✓ Ảnh đã được lưu vào folder 'images/'{Colors.END}")
        print(f"\n{Colors.BLUE}Bước tiếp theo:{Colors.END}")
        print(f"  1. Mở file {Colors.YELLOW}content/projects.txt{Colors.END}")
        print(f"  2. Thay đổi giá trị 'image' thành:")
        print(f"     {Colors.GREEN}• \"football-tournament.jpg\"{Colors.END}")
        print(f"     {Colors.GREEN}• \"esports-gaming.jpg\"{Colors.END}")
        print(f"     {Colors.GREEN}• \"marathon-running.jpg\"{Colors.END}")
        print(f"     {Colors.GREEN}• \"tennis-match.jpg\"{Colors.END}")
        print(f"  3. Refresh website (F5) để xem kết quả! 🎉\n")
    else:
        print(f"{Colors.RED}✗ Không tải được ảnh nào{Colors.END}")
        print(f"\n{Colors.YELLOW}Có thể do:{Colors.END}")
        print(f"  • Không có kết nối internet")
        print(f"  • Firewall chặn kết nối")
        print(f"  • Unsplash đang bảo trì")
        print(f"\n{Colors.BLUE}Giải pháp thay thế:{Colors.END}")
        print(f"  • Tự tải ảnh từ: https://unsplash.com/s/photos/sports")
        print(f"  • Hoặc dùng ảnh riêng của bạn\n")

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print(f"\n\n{Colors.YELLOW}⚠ Đã hủy bởi người dùng{Colors.END}\n")
        sys.exit(0)
    except Exception as e:
        print(f"\n{Colors.RED}✗ Lỗi: {e}{Colors.END}\n")
        sys.exit(1)
