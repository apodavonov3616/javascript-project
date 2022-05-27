console.log("webpack is working")

document.addEventListener("DOMContentLoaded", () => {

    const canvasEl = document.getElementById("main-canvas");
    canvasEl.width = 600;
    canvasEl.height = 800;

    const ctx = canvasEl.getContext("2d");
    // ctx.fillStyle = "grey";
    // ctx.fillRect(0, 0, 600, 800);
});
