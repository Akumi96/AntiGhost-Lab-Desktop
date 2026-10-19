@echo off
cd /d "%~dp0"
where npm >nul 2>nul
if errorlevel 1 (
 echo Instala Node.js LTS desde https://nodejs.org/
 pause
 exit /b 1
)
if not exist "node_modules\electron" (
 call npm install
 if errorlevel 1 exit /b 1
)
call npm start
