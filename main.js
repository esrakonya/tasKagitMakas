const electron = require("electron");
const url = require("url");
const path = require("path");
const { app, BrowserWindow } = require("electron");


let mainWindow;


app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 500,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation:false
        }
    });
    

    mainWindow.loadURL(
        url.format({
            pathname: path.join(__dirname, "index.html"),
            protocol: "file",
            slashes: true
        })
    );
});

