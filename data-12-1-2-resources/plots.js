// Code for Line Graph
Plotly.newPlot("draftArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

Plotly.newPlot("testArea", {x: [5,10,15], y: [10,20,30]});


//Code for Bar Chart

var trace = {
    x: ["burrito", "pizza", "chicken"],
    y: [10, 18, 5],
    type: "bar"
};

var layout = {
    title: "Luncheon Survey",
    xaxis: {title: "Food Option"},
    yaxis: {title: "Number of Respondents"}
};

Plotly.newPlot("plotArea", [trace], layout);