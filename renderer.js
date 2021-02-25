// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

window.onload = () => {
    const webview = document.querySelector("#webview")
    const loading = document.querySelector(".loading")

    webview.addEventListener("did-start-loading", () => {
        loading.innerHTML = "Loading..."
    })

    webview.addEventListener("did-stop-loading", () => {
        loading.innerHTML = ""
    })

    webview.addEventListener("dom-ready", () => {
        console.log("dom loaded")
    })


}