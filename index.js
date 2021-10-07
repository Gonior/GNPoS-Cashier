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
    console.log('dah running cok')
    win.loadURL(path.join(__dirname, "public/index.html"))
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