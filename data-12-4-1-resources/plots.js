// The init() is the function that is called when the page is initially rendered, before any event takes place.
function init() {
  data = [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16] }];
  Plotly.newPlot("plot", data);
};

//Specifically, through the d3.selectAll() function, when a change takes place to the HTML DOM element with the id of dropdownMenu,
// the upDatePlotly() function is triggered.
d3.selectAll("#dropdownMenu").on("change", updatePlotly);
// The updatePlotly() is the function that is called when a user creates an event
// —in this case, selecting a dropdown menu option.
function updatePlotly() {
  var dropdownMenu = d3.select("#dropdownMenu");
  var dataset = dropdownMenu.property("value");

  var xData = [1, 2, 3, 4, 5];
  var yData = [];

  if (dataset === 'dataset1') {
    yData = [1, 2, 4, 8, 16];
  };

  if (dataset === 'dataset2') {
    yData = [1, 10, 100, 1000, 10000];
  };

  var trace = {
    x: [xData],
    y: [yData],
  };
  Plotly.restyle("plot", trace);
};

init();