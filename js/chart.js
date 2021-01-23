var domainList = [
    {
      key: "HTML5",
      value: 85
    },
    {
      key: "CSS3",
      value: 80
    },
    {
      key: "SASS",
      value: 64
    },
    {
      key: "React",
      value: 32
    },
    {
      key: "Python",
      value: 50
    },
    {
      key: "Node.js",
      value: 24
    },
    {
      key: "Amazon Web Service EC2",
      value: 79
    },
    {
      key: "MongoDB",
      value: 30
    },
    {
      key: "Typescript",
      value: 8
    },
    {
      key: "Vue.js",
      value: 8
    },
    {
      key: "React Hooks",
      value: 15
    },
    {
      key: "Redux",
      value: 20
    }
  ];
  
  domainList.sort(function (a, b) { return b.value - a.value; });
  
  var chart = d3.select('#chartbox');
  var margin = { top: 30, right: 20, bottom: 50, left: 40 },
      width = chart.node().getBoundingClientRect().width - margin.left - margin.right,
      height = chart.node().getBoundingClientRect().height - margin.top - margin.bottom;
  var svg = chart.append('svg')
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', 'translate(' + [margin.left, margin.top] + ')');
  var x = d3.scaleBand().range([0, width]).domain(domainList.map(d => d.key)).padding(.05);
  var y = d3.scaleLinear().range([height, 0]).domain([0, d3.max(domainList, d => d.value)]);
  
  var colorScale = d3.scaleOrdinal(d3.schemeCategory20c);
  
  colorScale.domain(domainList.map(d => d.key));
  var xAxis = svg.append('g')
      .attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x));                    
  xAxis.selectAll("text")	
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", ".15em")
      .attr("transform", "rotate(-65)");
  var yAxis = svg.append('g')
      .call(d3.axisLeft(y));
  
  
  var bars = svg.selectAll('rect')
      .data(domainList)
      .enter().append('rect')
      .attr('x', d => x(d.key))
      .attr('y', d => y(0))
      .attr('width', x.bandwidth())
      .attr('height', d => 0)
      .style('fill', d => colorScale(d.key));
  bars.transition().duration(500).ease(d3.easeElastic)
      .delay((d,i) => i * 100)
      .attr('height', d => height - y(d.value))
      .attr('y', d => y(d.value));
  
  window.onresize = function() {
    var chartDiv = d3.select('#chart')
    width = chartDiv.node().getBoundingClientRect().width - margin.right - margin.left;
    height = chartDiv.node().getBoundingClientRect().height - margin.top - margin.bottom;
    chartDiv.select('svg')
      .attr('width', width + margin.right + margin.left)
      .attr('height', height + margin.top + margin.bottom);
  
    x.range([0, width]);
    y.range([height, 0]);
  
    xAxis.transition()
      //.attr('transform', 'translate(0,' + height + ')')
      .call(d3.axisBottom(x));
    yAxis.transition()
      .call(d3.axisLeft(y));
    
    bars.transition()
      .attr('x', function (d) { return x(d.key); })
      .attr('y', function (d) { return y(d.value); })
      .attr('width', x.bandwidth())
      .attr('height', function (d) { return height - y(d.value); });
  }
  