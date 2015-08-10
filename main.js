var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start();

var mainWindow = null;

/**
 * Close the application's window once all other windows are closed
**/
app.on('window-all-closed', function(){
  if(process.platform != 'darwin'){
    app.quit();
  }
});

/**
 * Create a browser window
**/
app.on('ready', function(){
  // Create a browser window
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600
  });

  // Load the index.html page into the window
  mainWindow.loadUrl('file://' + __dirname + '/index.html');

  // Handle window closing events
  mainWindow.on('close', function(){
    mainWindow = null;
  });
});
