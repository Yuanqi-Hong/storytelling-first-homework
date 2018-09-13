import * as d3 from 'd3'

(function () {
  var height = 200; var width = 400

  var svg = d3.select('#chart5')
    .select('svg')
    .attr('height', height)
    .attr('width', width)

  var datapoints = [
    { 'hotdogs': 10, 'hamburgers': 10, 'animal': 'dog', 'name': 'Stevie' },
    { 'hotdogs': 3, 'hamburgers': 3, 'animal': 'cat', 'name': 'Nicholas' },
    { 'hotdogs': 2, 'hamburgers': 2, 'animal': 'cat', 'name': 'Bubbletree' },
    { 'hotdogs': 10, 'hamburgers': 3, 'animal': 'cow', 'name': 'Particle' },
    { 'hotdogs': 7, 'hamburgers': 5, 'animal': 'dog', 'name': 'Jumpup' },
    { 'hotdogs': 4, 'hamburgers': 9, 'animal': 'dog', 'name': 'Parlay' },
    { 'hotdogs': 3, 'hamburgers': 1, 'animal': 'cat', 'name': 'Hio' }
  ]

  // Build your scales here
  const cxScale = d3.scaleLinear()
    .domain([0, 10])
    .range([0, width])

  const fillScale = d3.scaleOrdinal()
    .range(['#FFB6C1', '#7FCDBB', '#2C7FB8'])

  const radiusScale = d3.scaleSqrt()
    .domain([0, 10])
    .range([0, 30])

  // Add your circles and style them here
  svg.selectAll('circle')
    .data(datapoints)
    .enter().append('circle')
    .attr('cy', height / 2)
    .attr('cx', d => {
      return cxScale(d.hamburgers)
    })
    .attr('fill', d => {
      return fillScale(d.name)
    })
    .attr('r', d => {
      return radiusScale(d.hotdogs)
    })
    .attr('opacity', 0.5)
})()
