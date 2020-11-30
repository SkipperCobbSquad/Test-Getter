const { app, BrowserWindow, Notification  } = require('electron');
const path = require('path')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
    icon: path.join(__dirname, 'Logo.png')
  });
  win.menuBarVisible = false;
  win.loadFile('src/index.html');
  // win.webContents.openDevTools();
}

// function showNotification () {
//   const notification = {
//     title: 'Basic Notification',
//     body: 'Notification from the Main process'
//   }
//   new Notification(notification).show()
// }

app.on('ready', createWindow);

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});