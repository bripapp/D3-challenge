// SVG SETUP //
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

