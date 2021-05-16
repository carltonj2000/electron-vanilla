const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 900,
    frame: false,
    icon: "./electron/logo-512.png",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true,
    },
  });

  win.loadURL("http://localhost:5500/src/index.html");
  win.webContents.openDevTools();

  ipcMain.on("close", () => win.close());

  ipcMain.on("min", () => win.minimize());

  ipcMain.on("max", () => win.maximize());
}

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
