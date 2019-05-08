const {app,BrowserWindow} = require("electron");
let win = null;
function createWindow(){
  win = new BrowserWindow({ width: 1000, height: 600 });
  win.webContents.openDevTools();
  win.loadFile("index.html");
  win.on("close",()=>{
    console.log("close")
    win = null;
  });
}
app.on("ready",createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
app.on("activate",()=>{
  if(win === null){
    createWindow();
  }
});
