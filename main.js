const { app, BrowserWindow, dialog } = require('electron');
const path = require('node:path');

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1180,
    height: 900,
    minWidth: 780,
    minHeight: 620,
    backgroundColor: '#111019',
    title: 'AntiGhost Lab Desktop',
    autoHideMenuBar: true,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true
    }
  });
  win.loadFile(path.join(__dirname, 'index.html'));
  win.webContents.setWindowOpenHandler(() => ({ action: 'deny' }));
  win.webContents.on('will-navigate', (event, url) => {
    if (url !== win.webContents.getURL()) event.preventDefault();
  });
  win.on('close', event => {
    if (win.webContents.isLoading()) return;
    const result = dialog.showMessageBoxSync(win, {
      type: 'question', buttons: ['Cancelar', 'Salir'], defaultId: 0, cancelId: 0,
      title: 'Cerrar AntiGhost Lab',
      message: '¿Quieres cerrar AntiGhost Lab?',
      detail: 'Las pruebas completadas se guardan automáticamente.'
    });
    if (result === 0) event.preventDefault();
  });
};
app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });
});
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
