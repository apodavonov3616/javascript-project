// const Slider = require("./slider")
const Squat = require("./squat")
const Bench = require("./bench")
const Deadlift = require("./deadlift")

class MainController {

    constructor() {

    }

    makeImage(exercise, textbox) {
        if (exercise === "Squat") {
            squat_instance = new Squat(textbox)
        } else if (exercise === "Bench") {
            bench_instance = new Bench()
        } else {
            deadlift_instance = new Deadlift()
        }
    }

}


module.exports = MainController
