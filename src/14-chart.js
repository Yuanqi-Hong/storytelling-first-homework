import * as d3 from 'd3'

(function () {
  // Build your SVG here
  // using all of that cut-and-paste magic
  var margin = { top: 30, right: 20, bottom: 30, left: 70 }
  var width = 500 - margin.left - margin.right
  var height = 250 - margin.top - margin.bottom

  var svg = d3.select('#chart14')
    .append('svg')
    .attr('width', width + margin.left + margin.right)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

  // Build your scales here
  const bandScale = d3.scaleBand()
    .rangeRound([0, width])

  const heightScale = d3.scaleLinear()
    .domain([0, 10])
    .range([0, height])
    
  const fillScale = d3.scaleOrdinal()
    .range(['#FFB6C1', '#7FCDBB', '#2C7FB8'])

  d3.csv(require('./eating-data.csv'))
    .then(ready)
    .catch(function (err) {
      console.log('Failed with', err)
    })

  function ready (datapoints) {
    // Add and style your marks here

    var names = datapoints.map(d => { return d.name })
    bandScale.domain(names)

    svg.selectAll('rect')
      .data(datapoints)
      .enter().append('rect')
      .attr('x', d => {
        return bandScale(d.name)
      })
      .attr('width', bandScale.bandwidth())
      .attr('height', d => {
        return heightScale(d.hamburgers)
      })
      .attr('y', d => {
        return height - heightScale(d.hamburgers)
      })
      .attr('fill', d => {
        return fillScale(d.animal)
      })

    // Add axes
    var yAxis = d3.axisLeft(heightScale)
    svg
      .append('g')
      .attr('class', 'axis y-axis')
      .call(yAxis)

    var xAxis = d3.axisBottom(bandScale)
    svg
      .append('g')
      .attr('class', 'axis x-axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)
  }
})()
