@echo off
REM ================================================
REM Liv5Studio Landing Page - Quick Start Script
REM Double-click để chạy development server
REM ================================================

echo.
echo ================================================
echo  Liv5Studio Landing Page - Quick Start
echo ================================================
echo.

REM Check if Python is installed
python --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] Python khong duoc tim thay!
    echo Vui long cai dat Python tu https://www.python.org/downloads/
    echo.
    pause
    exit /b 1
)

REM Run the development server
echo Dang khoi chay server...
echo.
python debugging_live_run.py

REM If server stops
echo.
echo ================================================
echo  Server da dung.
echo ================================================
echo.
pause
