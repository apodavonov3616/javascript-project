class Chart {
    constructor() {

    }

    chartRender() {

        const DUMMY_DATA = [
            {muscle: "Biceps", value: 0},
            {muscle: "Latissimus Dorsi", value: 0},
            {muscle: "Erector Spinae", value: 1},
            {muscle: "Trapezius", value: 0},
            {muscle: "Deltoids", value: 0},
            {muscle: "Triceps", value: 0},
            {muscle: "Pectorals", value: 0},
            {muscle: "Abdominals", value: 0},
            {muscle: "Glutes", value: 0},
            {muscle: "Quadriceps", value: 0},
            {muscle: "Hamstrings", value: 0},
            {muscle: "Calves", value: 0}
        ]
    

        const MARGINS = {top: 20, bottom:10};
        const CHART_WIDTH = 1000;
        const CHART_HEIGHT = 400 - MARGINS.top - MARGINS.bottom;

        const x = d3.scaleBand().rangeRound([0, CHART_WIDTH]).padding(0.1);
        const y = d3.scaleLinear().range([CHART_HEIGHT, 0]);

        

    }

    //     chart.selectAll('.bar')
    //         .data(DUMMY_DATA)
    //         .enter()
    //         .append('rect')
    //         .classed('bar', true)
    //         .attr('width', x.bandwidth())
    //         .attr('height', data => CHART_HEIGHT - y(data.value))
    //         .attr('x', (data) => x(data.muscle))
    //         .attr('y', (data) => y(data.value));

    //     chart.selectAll('.label')
    //         .data(DUMMY_DATA)
    //         .enter()
    //         .append('text')
    //         .text((data) => data.value)
    //         .attr('x', data => x(data.muscle)+x.bandwidth() / 2)
    //         .attr('y', data => y(data.value)-20)
    //         .attr('text-anchor', 'middle')
    //         .classed('label', true)
    // }
}


module.exports = Chart