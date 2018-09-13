import * as d3 from 'd3'

(function () {
  const widthScale = d3.scaleLinear()
    .domain([0, 200])
    .range([0, 400])
  const colorScale = d3.scaleOrdinal()
    .domain(['man', 'woman'])
    .range(['#BDB76B', '#ADFF2F'])

  var svg = d3.select('#chart1')
  var rect = svg.select('rect')

  rect
    .attr('fill', colorScale('woman'))
    .attr('width', widthScale(165))
    .attr('x', 0)
    .attr('y', 15)
    .attr('height', 20)
})()
