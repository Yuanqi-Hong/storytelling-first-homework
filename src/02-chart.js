import * as d3 from 'd3'

(function () {
  var width = 400
  var height = 200

  const widthScale = d3.scaleLinear()
    .domain([0, 100])
    .range([0, width])

  const fillScale = d3.scaleOrdinal()
    .range(['#FC8D59', '#91CF60', '#91BFDB'])

  // Here is your data
  var countries = [
    {
      name: 'Blahstia',
      continent: 'North America',
      gdp: 40
    },
    {
      name: 'Bleers',
      continent: 'Europe',
      gdp: 12
    },
    {
      name: 'Blolo',
      continent: 'Antarctica',
      gdp: 35
    },
    {
      name: 'Blurben',
      continent: 'North America',
      gdp: 90
    }
  ]

  // Get the svg with the id of 'chart2'
  var svg = d3.select('#chart2')
    .attr('width', width)
    .attr('height', height)

  // Get the rectangles inside of it
  svg.selectAll('rect')
    .data(countries)
    .attr('width', d => {
      return widthScale(d.gdp)
    })
    .attr('height', 50)
    .attr('fill', d => {
      return fillScale(d.continent)
    })
})()
