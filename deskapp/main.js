const { app, BrowserWindow } = require('electron')
require('electron-reload')(__dirname, {
  // Next.jsのビルドファイルを除外
  ignored: /node_modules|[\/\\]\./,
  // Electronが起動するたびにすべてのRendererプロセスを強制リロード
  hardResetMethod: 'exit'});
function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    }
  })

  win.loadURL('http://localhost:3000')  // Next.jsの開発サーバーに接続
}

app.whenReady().then(createWindow)
