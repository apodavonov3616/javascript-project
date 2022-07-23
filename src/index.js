const Squat = require("./scripts/squat")
const Bench = require("./scripts/bench")
const Deadlift = require("./scripts/deadlift")
const MainController = require("./scripts/main_controller")
const { exertion } = require("./scripts/data");


let textbox = ""

document.addEventListener("DOMContentLoaded", () => {

    let main_controller = new MainController()
    let $current_exercise = "squat"

    document.getElementById("Squat").addEventListener("click", function () {
        main_controller.makeImage("Squat", textbox);
        $current_exercise = "Squat"
        textbox = squat_instance.recommendation(0)
        d3.select("g").remove()
        chartRender("Squat", 1)

    });
    document.getElementById("Bench").addEventListener("click", function () {
        main_controller.makeImage("Bench");
        $current_exercise = "Bench"
        textbox = bench_instance.recommendation(0)
        d3.select("g").remove()
        chartRender("Bench", 1)
    });
    document.getElementById("Deadlift").addEventListener("click", function () {
        main_controller.makeImage("Deadlift");
        $current_exercise = "Deadlift"
        textbox = deadlift_instance.recommendation(0)
        d3.select("g").remove()
        chartRender("Deadlift", 1)
    });



    document.querySelector('.our_container').addEventListener('click', event => {

        if (event.target.matches('#next')) {
            if ($current_exercise === "Squat") {
                let $exercise_number = squat_instance.nextImage()
                textbox = squat_instance.recommendation($exercise_number)
                d3.select("g").remove()
                chartRender("Squat", $exercise_number + 1)
            } else if ($current_exercise === "Bench") {
                let $exercise_number = bench_instance.nextImage()
                textbox = bench_instance.recommendation($exercise_number)
                d3.select("g").remove()
                chartRender("Bench", $exercise_number + 1)
            } else {
                let $exercise_number = deadlift_instance.nextImage()
                textbox = deadlift_instance.recommendation($exercise_number)
                d3.select("g").remove()
                chartRender("Deadlift", $exercise_number + 1)
            }
        }
        if (event.target.matches('#back')) {
            if ($current_exercise === "Squat") {
                let $exercise_number = squat_instance.lastImage()
                textbox = squat_instance.recommendation($exercise_number)
                d3.select("g").remove()
                chartRender("Squat", $exercise_number + 1)
            } else if ($current_exercise === "Bench") {
                let $exercise_number = bench_instance.lastImage()
                textbox = bench_instance.recommendation($exercise_number)
                d3.select("g").remove()
                chartRender("Bench", $exercise_number + 1)
            } else {
                let $exercise_number = deadlift_instance.lastImage()
                textbox = deadlift_instance.recommendation($exercise_number)
                d3.select("g").remove()
                chartRender("Deadlift", $exercise_number + 1)
            }
        }
    });

    function chartRender(exercise, image_number) {

        const DUMMY_DATA = exertion[0][exercise][image_number]

        const MARGINS = { top: 20, bottom: 10 };
        const CHART_WIDTH = 1000;
        const CHART_HEIGHT = 300 - MARGINS.top - MARGINS.bottom;

        const x = d3.scaleBand().rangeRound([0, CHART_WIDTH]).padding(0.2);
        const y = d3.scaleLinear().range([CHART_HEIGHT, 0]);

        const chartContainer = d3.select('svg')
            .attr('width', CHART_WIDTH)
            .attr('height', CHART_HEIGHT + MARGINS.top + MARGINS.bottom);


        x.domain(DUMMY_DATA.map((d) => d.muscle));
        y.domain([0, 17])

        const chart = chartContainer.append('g');

        d3.select('svg')
            .append("text")
            .attr("x", 500)
            .attr("y", 50)
            .attr("text-anchor", "middle")
            .text("PERCEIVED LEVEL OF MUSCULAR EXERTION")
            .style('fill', 'rgb(191, 189, 189)');

        chart.append('g')
            .call(d3.axisBottom(x).tickSizeOuter(0))
            .attr('transform', `translate(0, ${CHART_HEIGHT})`)
            .attr('color', 'rgb(191, 189, 189)')

        chart.selectAll('.bar')
            .data(DUMMY_DATA)
            .enter()
            .append('rect')
            .classed('bar', true)
            .attr('width', x.bandwidth())
            .attr('height', data => CHART_HEIGHT - y(data.value))
            .attr('x', (data) => x(data.muscle))
            .attr('y', (data) => y(data.value));

        chart.selectAll('.label')
            .data(DUMMY_DATA)
            .enter()
            .append('text')
            .text((data) => data.value)
            .attr('x', data => x(data.muscle) + x.bandwidth() / 2)
            .attr('y', data => y(data.value) - 20)
            .attr('text-anchor', 'middle')
            .classed('label', true)
    }

    document.querySelector('#canvas').addEventListener('mouseover', function () {

        let element = document.getElementById("canvas_text");

        element.style.opacity = 1.0
        const textNode = document.createTextNode(textbox);

        element.style.color = "white";
        element.style.fontSize = "30px";
        element.appendChild(textNode);

    })

    document.querySelector('#canvas').addEventListener('mouseout', e => {

        var element = document.getElementById("canvas_text");
        element.style.opacity = 1.0
        while (element.hasChildNodes()) {
            element.removeChild(element.firstChild);
        }

    })


    document.addEventListener('click', e => {

        var element = document.getElementById("readme");
        while (element.hasChildNodes()) {
            element.removeChild(element.firstChild);
        }

    })
})

