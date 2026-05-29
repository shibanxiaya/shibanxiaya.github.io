@echo off
chcp 65001 >nul
echo ============================================================
echo   My World Site - Push to GitHub Pages
echo ============================================================
echo.

cd /d "C:\ProgramData\WorkBuddy\chromium-env\135znc7\WorkBuddy\2026-05-29-15-00-20\my-world-site"

echo [1/3] 检查状态...
git status --short
echo.

echo [2/3] 推送到 GitHub (main 分支)...
git push -u origin main
if %ERRORLEVEL% NEQ 0 (
    echo.
    echo   !! 推送失败，可能是网络问题 !!
    echo   请检查网络后重新运行此脚本
    pause
    exit /b 1
)
echo.
echo [3/3] 推送成功！
echo.
echo   你的网站地址: https://shibanxiaya.github.io
echo   等 2-3 分钟让 GitHub Pages 构建完成后刷新查看
echo.
echo ============================================================
pause
