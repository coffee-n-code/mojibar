'use strict';

const electron = require('electron');
const app = electron.app;
const WIDTH = 460;
const HEIGHT = 540;

var _window = null;

/*
	WINDOW JUNK
*/
app.on('window-all-closed', function() {
	// On OS X, we don't quit the program when all windows are closed (usually)
	if (process.platform != 'darwin')
		app.quit();
});

app.on('ready', function() {
	_window = new electron.BrowserWindow({
		"width": WIDTH,
		"height": HEIGHT
	});
	_window.setMenuBarVisibility(false);
	_window.loadURL('file://' + __dirname + '/app/index.html');
	
	// CLEAN-UP Window
	_window.on('closed', function() {
		_window = null;
	});
});