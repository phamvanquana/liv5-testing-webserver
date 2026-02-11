#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Liv5Studio Landing Page - Live Development Server
==================================================
Script để chạy local server và tự động mở trình duyệt cho development.

Cách dùng:
    python debugging_live_run.py
    
Hoặc với port tùy chỉnh:
    python debugging_live_run.py --port 3000
"""

import http.server
import socketserver
import webbrowser
import os
import sys
import socket
import argparse
from pathlib import Path
from datetime import datetime


class Colors:
    """ANSI color codes for terminal output"""
    HEADER = '\033[95m'
    BLUE = '\033[94m'
    CYAN = '\033[96m'
    GREEN = '\033[92m'
    YELLOW = '\033[93m'
    RED = '\033[91m'
    BOLD = '\033[1m'
    UNDERLINE = '\033[4m'
    END = '\033[0m'


class CustomHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    """Custom HTTP request handler with logging"""
    
    def log_message(self, format, *args):
        """Override to add colors and better formatting"""
        timestamp = datetime.now().strftime('%H:%M:%S')
        method = args[0].split()[0] if args else ''
        
        # Color code based on HTTP method
        if method == 'GET':
            method_color = Colors.GREEN
        elif method == 'POST':
            method_color = Colors.BLUE
        else:
            method_color = Colors.YELLOW
        
        sys.stdout.write(f"{Colors.CYAN}[{timestamp}]{Colors.END} "
                        f"{method_color}{format % args}{Colors.END}\n")
        sys.stdout.flush()
    
    def end_headers(self):
        """Add custom headers"""
        self.send_header('Cache-Control', 'no-store, no-cache, must-revalidate')
        self.send_header('Expires', '0')
        super().end_headers()


def is_port_available(port):
    """Check if a port is available"""
    with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
        try:
            s.bind(('localhost', port))
            return True
        except OSError:
            return False


def find_available_port(start_port=8080, max_attempts=10):
    """Find an available port starting from start_port"""
    for port in range(start_port, start_port + max_attempts):
        if is_port_available(port):
            return port
    return None


def print_banner():
    """Print welcome banner"""
    banner = f"""
{Colors.BOLD}{Colors.BLUE}╔═══════════════════════════════════════════════════════════╗
║                                                           ║
║           🎬 Liv5Studio Landing Page                      ║
║              Live Development Server                      ║
║                                                           ║
╚═══════════════════════════════════════════════════════════╝{Colors.END}
"""
    print(banner)


def print_server_info(host, port):
    """Print server information"""
    url = f"http://{host}:{port}"
    
    info = f"""
{Colors.GREEN}✓ Server started successfully!{Colors.END}

{Colors.BOLD}Server Information:{Colors.END}
  • Local:            {Colors.CYAN}{url}{Colors.END}
  • Network:          {Colors.CYAN}http://{get_local_ip()}:{port}{Colors.END}
  • Port:             {Colors.YELLOW}{port}{Colors.END}
  • Root Directory:   {Colors.YELLOW}{os.getcwd()}{Colors.END}

{Colors.BOLD}Pages:{Colors.END}
  • Home:             {Colors.CYAN}{url}/index.html{Colors.END}
  • Content Files:    {Colors.CYAN}{url}/content/{Colors.END}

{Colors.BOLD}Quick Actions:{Colors.END}
  • Press {Colors.BOLD}Ctrl+C{Colors.END} to stop the server
  • Refresh browser ({Colors.BOLD}F5{Colors.END}) to see changes
  • Edit files in {Colors.YELLOW}content/{Colors.END} folder for quick updates

{Colors.YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━{Colors.END}
{Colors.GREEN}Serving files... (logs will appear below){Colors.END}
{Colors.YELLOW}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━{Colors.END}
"""
    print(info)


def get_local_ip():
    """Get local IP address"""
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except Exception:
        return "localhost"


def check_project_structure():
    """Check if required files and folders exist"""
    required_items = {
        'index.html': 'File HTML chính',
        'content/': 'Folder chứa nội dung',
        'styles/': 'Folder chứa CSS',
        'scripts/': 'Folder chứa JavaScript',
        'logo/': 'Folder chứa logo'
    }
    
    missing = []
    for item, description in required_items.items():
        path = Path(item)
        if not path.exists():
            missing.append(f"  ✗ {item} - {description}")
    
    if missing:
        print(f"{Colors.RED}{Colors.BOLD}⚠ Warning: Missing files/folders:{Colors.END}")
        for item in missing:
            print(f"{Colors.YELLOW}{item}{Colors.END}")
        print()
        response = input(f"{Colors.YELLOW}Continue anyway? (y/n): {Colors.END}").lower()
        if response != 'y':
            print(f"{Colors.RED}Exiting...{Colors.END}")
            sys.exit(1)
    else:
        print(f"{Colors.GREEN}✓ Project structure verified{Colors.END}\n")


def open_browser(url, delay=1.5):
    """Open browser after a short delay"""
    import threading
    import time
    
    def _open():
        time.sleep(delay)
        try:
            webbrowser.open(url)
            print(f"\n{Colors.GREEN}✓ Browser opened automatically{Colors.END}\n")
        except Exception as e:
            print(f"\n{Colors.YELLOW}⚠ Could not open browser automatically: {e}{Colors.END}")
            print(f"{Colors.YELLOW}  Please open {url} manually{Colors.END}\n")
    
    thread = threading.Thread(target=_open)
    thread.daemon = True
    thread.start()


def run_server(port=8080, host='localhost', open_browser_flag=True):
    """Run the HTTP server"""
    
    # Change to script directory
    script_dir = Path(__file__).parent.absolute()
    os.chdir(script_dir)
    
    print_banner()
    check_project_structure()
    
    # Find available port
    if not is_port_available(port):
        print(f"{Colors.YELLOW}⚠ Port {port} is in use, finding alternative...{Colors.END}")
        new_port = find_available_port(port)
        if new_port:
            port = new_port
            print(f"{Colors.GREEN}✓ Using port {port} instead{Colors.END}\n")
        else:
            print(f"{Colors.RED}✗ No available ports found{Colors.END}")
            sys.exit(1)
    
    # Create server
    try:
        with socketserver.TCPServer((host, port), CustomHTTPRequestHandler) as httpd:
            httpd.allow_reuse_address = True
            
            # Print server info
            print_server_info(host, port)
            
            # Open browser
            if open_browser_flag:
                url = f"http://{host}:{port}"
                open_browser(url)
            
            # Start serving
            try:
                httpd.serve_forever()
            except KeyboardInterrupt:
                print(f"\n\n{Colors.YELLOW}{'─' * 60}{Colors.END}")
                print(f"{Colors.GREEN}✓ Server stopped gracefully{Colors.END}")
                print(f"{Colors.BLUE}Thank you for using Liv5Studio Development Server!{Colors.END}")
                print(f"{Colors.YELLOW}{'─' * 60}{Colors.END}\n")
                sys.exit(0)
                
    except OSError as e:
        print(f"{Colors.RED}✗ Error starting server: {e}{Colors.END}")
        sys.exit(1)
    except Exception as e:
        print(f"{Colors.RED}✗ Unexpected error: {e}{Colors.END}")
        sys.exit(1)


def main():
    """Main function"""
    parser = argparse.ArgumentParser(
        description='Liv5Studio Landing Page Development Server',
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  python debugging_live_run.py                    # Run on default port 8080
  python debugging_live_run.py --port 3000        # Run on port 3000
  python debugging_live_run.py --no-browser       # Don't open browser automatically
  python debugging_live_run.py -p 9000 --host 0.0.0.0  # Run on all interfaces
        """
    )
    
    parser.add_argument(
        '-p', '--port',
        type=int,
        default=8080,
        help='Port number to run server on (default: 8080)'
    )
    
    parser.add_argument(
        '--host',
        type=str,
        default='localhost',
        help='Host to bind to (default: localhost, use 0.0.0.0 for all interfaces)'
    )
    
    parser.add_argument(
        '--no-browser',
        action='store_true',
        help='Do not open browser automatically'
    )
    
    args = parser.parse_args()
    
    run_server(
        port=args.port,
        host=args.host,
        open_browser_flag=not args.no_browser
    )


if __name__ == '__main__':
    main()
