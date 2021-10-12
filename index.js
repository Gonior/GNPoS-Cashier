const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");

function createWindow() {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        show : true,
        webPreferences: {
            nodeIntegration : true
        }
    })
    win.setMenuBarVisibility(false)

    win.loadURL(path.join(__dirname, "public/index.html"))
    // win.loadURL('http://localhost:5000')
}


app.whenReady().then(() => {
    createWindow()
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})

ipcMain.on('close-me', () => {
    app.quit()
})