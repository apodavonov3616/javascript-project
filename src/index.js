
const Buttons = require("./scripts/buttons")
const Squat = require("./scripts/squat")
const Bench = require("./scripts/bench")
const Deadlift = require("./scripts/deadlift")
const MainController = require("./scripts/main_controller")
const {exertion} = require("./scripts/data");
console.log(exertion[0]["Squat"][1])


console.log("webpack is working")
console.log(d3)

document.addEventListener("DOMContentLoaded", () => {

    let main_controller = new MainController()
    console.log("hello")
    let $current_exercise = "squat"

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

        if (event.target.matches('#next')) {
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

    const DUMMY_DATA = exertion[0]["Squat"][2]

    const MARGINS = {top: 20, bottom:10};
    const CHART_WIDTH = 1000;
    const CHART_HEIGHT = 400 - MARGINS.top - MARGINS.bottom;

    const x = d3.scaleBand().rangeRound([0, CHART_WIDTH]).padding(0.1);
    const y = d3.scaleLinear().range([CHART_HEIGHT, 0]);

    const chartContainer = d3.select('svg')
        .attr('width', CHART_WIDTH)
        .attr('height', CHART_HEIGHT + MARGINS.top + MARGINS.bottom);

        x.domain(DUMMY_DATA.map((d) => d.muscle));
        y.domain([0, d3.max(DUMMY_DATA, d=> d.value) + 3])

    const chart = chartContainer.append('g');

    chart.append('g')
        .call(d3.axisBottom(x).tickSizeOuter(0))
        .attr('transform', `translate(0, ${CHART_HEIGHT})`)
        .attr('color', 'purple')

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
        .attr('x', data => x(data.muscle)+x.bandwidth() / 2)
        .attr('y', data => y(data.value)-20)
        .attr('text-anchor', 'middle')
        .classed('label', true)
})

