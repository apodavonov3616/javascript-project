// import Buttons from "./scripts/buttons"
// import Slider from "./scripts/slider"
// import Squat from "./scripts/squat"
// import Bench from "./scripts/bench"
// import Deadlift from "./scripts/deadlift"
const Buttons = require("./scripts/buttons")
// const Slider = require("./scripts/slider")
const Squat = require("./scripts/squat")
const Bench = require("./scripts/bench")
const Deadlift = require("./scripts/deadlift")
const MainController = require("./scripts/main_controller")



console.log("webpack is working")
console.log(d3)

document.addEventListener("DOMContentLoaded", () => {

    main_controller = new MainController()
    // main_controller.renderSlider()
    console.log("hello")

    document.getElementById("Squat").addEventListener("click", function () {
        main_controller.makeImage("Squat");
    });
    document.getElementById("Bench").addEventListener("click", function () {
        main_controller.makeImage("Bench");
    });
    document.getElementById("Deadlift").addEventListener("click", function () {
        main_controller.makeImage("Deadlift");
    });
});

// const main = document.getElementById("main")
// new Bench(main)
// let img = new Image();
// img.src = "../src/images/squat/00001.png"
// img.onload = function () {
//     ctx.drawImage(img, 240, 240)
// }


    // document.getElementById("main-canvas").innerHTML='<img src="../src/images/strick_figure.png" alt="sample"'>;
// });
