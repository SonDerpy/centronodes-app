
const {app, BrowserWindow, nativeTheme} = require('electron')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 700,
    minWidth: 540,
    minHeight: 33,
    backgroundColor: '#333',
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      webviewTag: true,
      enableRemoteModule: true,
      icon: path.join(__dirname, '/src/images/centronodes-normal.png'), // Set app icon
    
    }
  })

  mainWindow.setMenuBarVisibility(false)
  mainWindow.loadFile('index.html')

  mainWindow.setIcon(path.join(__dirname, '/src/images/centronodes-normal.png')); // Set app icon

}

app.whenReady().then(() => {
  createWindow()
  
  app.on('activate', function () {
    
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

