const Slider = require("./slider")

class MainController {

    constructor() {

    }

    renderSlider() {
        new Slider(
            document.querySelector(".slider")
        );

    }

    renderChart() {
        newChart(

        )
    }
}


module.exports = MainController
