
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
    $current_exercise = "squat"

    document.getElementById("Squat").addEventListener("click", function () {
        main_controller.makeImage("Squat");
        $current_exercise = "Squat"
    });
    document.getElementById("Bench").addEventListener("click", function () {
        main_controller.makeImage("Bench");
        $current_exercise = "Bench"
    });
    document.getElementById("Deadlift").addEventListener("click", function () {
        main_controller.makeImage("Deadlift");
        $current_exercise = "Deadlift"
    });


    document.querySelector('.our_container').addEventListener('click', event => {

        // Check if the clicked element was actually a .remove-button
        if (event.target.matches('#next')) {
            // event.target.closest('.todo-item').remove();
            // console.log(squat_instance)
            if ($current_exercise === "Squat"){
                squat_instance.nextImage()
            } else if ($current_exercise === "Bench"){
                bench_instance.nextImage()
            } else {
                deadlift_instance.nextImage()
            }
        } else {
            if ($current_exercise === "Squat"){
                squat_instance.lastImage()
            } else if ($current_exercise === "Bench"){
                bench_instance.lastImage()
            } else {
                deadlift_instance.lastImage()
            }
        }
    });

    // function renderNext() {
    //     if ($current_exercise === "Squat") {
    //         console.log('hi world')
    //         squat_instance.nextImage()
    //     }
    // }

})
// const main = document.getElementById("main")
// new Bench(main)
// let img = new Image();
// img.src = "../src/images/squat/00001.png"
// img.onload = function () {
//     ctx.drawImage(img, 240, 240)
// }


    // document.getElementById("main-canvas").innerHTML='<img src="../src/images/strick_figure.png" alt="sample"'>;
// });
