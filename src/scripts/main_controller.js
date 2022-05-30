// const Slider = require("./slider")
const Squat = require("./squat")
const Bench = require("./bench")
const Deadlift = require("./deadlift")

class MainController {

    constructor() {

    }

    makeImage(ctx, exercise) {
        if (exercise === "Squat") {
            squat_instance = new Squat(ctx)
        } else if (exercise === "Bench") {
            bench_instance = new Bench(ctx)
        } else {
            deadlift_instance = new Deadlift(ctx)
        }

    }

    // renderSlider() {
    //     new Slider(
    //         document.querySelector(".slider")
    //     );

    // }

    // renderChart() {
    //     newChart(

    //     )
    // }
}


module.exports = MainController
