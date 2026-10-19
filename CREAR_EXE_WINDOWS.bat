@echo off
cd /d "%~dp0"
echo AntiGhost Lab Desktop - Compilador para Windows
where npm >nul 2>nul
if errorlevel 1 (
 echo.
 echo No se encontro Node.js. Instala la version LTS desde https://nodejs.org/
 pause
 exit /b 1
)
call npm install
if errorlevel 1 goto :error
call npm run dist
if errorlevel 1 goto :error
echo.
echo LISTO: Busca el ejecutable portable en la carpeta dist.
explorer dist
pause
exit /b 0
:error
echo.
echo Error al descargar dependencias o crear el ejecutable. Revisa la conexion a Internet.
pause
exit /b 1
