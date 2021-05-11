/// SVG SETUP ///

// svg height and width
let svgWidth = 1000;
let svgHeight = 650;

// svg borders
let margin = {
    top: 20,
    bottom: 200,
    left: 100,
    right: 40,
};

// calculate chart height and width
let width = svgWidth - margin.right - margin.left;
let height = svgHeight - margin.top - margin.bottom;

// append div class to scatter element
let chart = d3.select('#scatter')
    .append('div') 
    .classed('chart', true);

// append svg element to chart
let svg = chart.append('svg')
    .attr('width', svgWidth)
    .attr('height', svgHeight);

// append svg group
let chartGroup = svg.append('g')
.attr('transform', `translate(${margin.left}, ${margin.top})`);

let chosenXAxis = 'poverty';
let chosenYAxis = 'healthcare';

/// FUNCTIONS ///

// update x-scale variable upon click
function xScale(censusData, chosenXAxis) {
    let xLinearScale = d3.scaleLinear()
        .domain([d3.min(censusData, d => d[chosenXAxis]) * 0.8,
            d3.max(censusData, d => d[chosenXAxis]) * 1.2])
        .range([0, width]);
    return xLinearScale;
}

// update y-scale variable upon click
function yScale(censusData, chosenXAxis) {
    let xLinearScale = d3.scaleLinear()
        .domain([d3.min(censusData, d => d[chosenXAxis]) * 0.8,
            d3.max(censusData, d => d[chosenXAxis]) * 1.2])
        .range([0, width]);
    return xLinearScale;
}





// RETRIEVE DATA //
// d3.csv('./assets/data/data.csv').then(function(censusData) {
//     console.log(censusData);

//     // parse data
//     censusData.forEach(function(data){
//         data.obesity = +data.obesity;
//         data.income = +data.income;
//         data.smokes = +data.smokes;
//         data.age = +data.age;
//         data.healthcare = +data.healthcare;
//         data.poverty = +data.poverty;
//     });

//     // create linear scales
//     var xLinearScale = xScale(censusData, chosenXAxis);
//     var yLinearScale = yScale(censusData, chosenYAxis);

//     // create x axis
//     var bottomAxis = d3.axisBottom(xLinearScale);
//     var leftAxis = d3.axisLeft(yLinearScale);

//     // append X
//     var xAxis = chartGroup.append('g')
//         .classed('x-axis', true)
//         .attr('transform', `translate(0, ${height})`)
//         .call(bottomAxis);

//     // append Y
//     var yAxis = chartGroup.append('g')
//         .classed('y-axis', true)
//         .call(leftAxis);