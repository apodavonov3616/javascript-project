import Buttons from "./scripts/buttons"
import Squat from "./scripts/squat"
import Bench from "./scripts/bench"
import Deadlift from "./scripts/deadlift"

console.log("webpack is working")

document.addEventListener("DOMContentLoaded", () => {

    const canvasEl = document.getElementById("main-canvas");
    canvasEl.width = 1300;
    canvasEl.height = 1000;

    const ctx = canvasEl.getContext("2d");
    // ctx.fillStyle = "grey";
    // ctx.fillRect(0, 0, 1300, 1000);

    // const main = document.getElementById("main")
    // new Bench(main)
    let img = new Image();
    img.src = "../src/images/colors.png"
    img.onload = function(){
        ctx.drawImage(img, 240, 240)
    }

    
    // document.getElementById("main-canvas").innerHTML='<img src="../src/images/strick_figure.png" alt="sample"'>;
});
