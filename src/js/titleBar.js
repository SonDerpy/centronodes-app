const remote =  require("electron").remote;

window.onload=function(){
var minimize = document.getElementById("minimize");
var maximize = document.getElementById("maximize");
var exit = document.getElementById("quit");

minimize.addEventListener("click",minimizeApp)
maximize.addEventListener("click",maximizeApp)
exit.addEventListener("click",closeApp)

function minimizeApp() {
    remote.BrowserWindow.getFocusedWindow().minimize();
}

function maximizeApp() {
    remote.BrowserWindow.getFocusedWindow().maximize();
}

function closeApp() {
    remote.getCurrentWindow().close();
}
}