@echo off
REM ================================================
REM Download Sample Images Script
REM ================================================

echo.
echo ================================================
echo  Downloading Sample Images for Projects
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

REM Run the download script
echo Dang tai anh mau tu Unsplash...
echo.
python download_sample_images.py

echo.
echo ================================================
echo  Hoan thanh!
echo ================================================
echo.
pause
