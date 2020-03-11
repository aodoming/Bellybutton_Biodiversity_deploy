function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });    
      buildMetadata("940");
      buildCharts("940");

  })}

  init();


  function optionChanged(newSample) {
    buildMetadata(newSample);
    buildCharts(newSample);
  }

  function buildMetadata(sample) {
    d3.json("samples.json").then((data) => {
      var metadata = data.metadata;
      var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
      var result = resultArray[0];
      var PANEL = d3.select("#sample-metadata");

      PANEL.html("");
      PANEL.append("h6").text(result.location);
      PANEL.append("h6").text(["ETHNICITY:", result.ethnicity]);
      PANEL.append("h6").text(["GENDER:", result.gender]);
      PANEL.append("h6").text(["AGE:", result.age]);
      PANEL.append("h6").text(["LOCATION:", result.location]);
      PANEL.append("h6").text(["BBTYPE:", result.bbtype]);
      PANEL.append("h6").text(["WFREQ:", result.wfreq]);
    });
  }
  
  function buildCharts(sample) {
    d3.json("samples.json").then((data) => {
      var resultArray = data.samples.filter(sampleObj => sampleObj.id == sample);
      console.log(resultArray)
      var result = resultArray[0];
      var PANEL = d3.select("#sample-buildcharts");

      // Create a  H. Bar Chart to display the top 10 OTUs found in an individual
      // Use otu_labels as the hover text for the chart.
      console.log(result)

      // get top 10 sample values
      var T_otu_ids = result.otu_ids.slice(0,10)
      var T_otu_labels = result.otu_labels.slice(0,10)
      var T_sample_values = result.sample_values.slice(0,10)

      var bar_trace = [{
        x: T_sample_values,
        y: T_otu_ids.map(otu_id => `OTU ${otu_id}`),
        text: T_otu_labels,
        type: "bar",
        orientation: "h",
      }];
     // var data = [trace];
      var chart_layout = {
        title: "Individual's Top 10 Bacterial Species",
        xaxis: { title: "Sample Values" },
        yaxis: { title: "OTU ID"}
      };
Plotly.newPlot("bar", bar_trace, chart_layout);

      // Create a bubble chart that displays each sample.
      var otu_ids = result.otu_ids
      var otu_labels = result.otu_labels
      var sample_values = result.sample_values

      console.log(otu_labels)

      var bubble_trace = [{
        x: otu_ids,
        y: sample_values,
        text: otu_labels,
        mode: 'markers',
        marker: {
          color: otu_ids,
          size: sample_values.map(sample_value => sample_value * 0.9)
        }
      }];
      //var data1 = [trace1];
      var bubble_layout = {
        title: 'Bubble Chart of Top Ten Colonies',
        xaxis: { title: "OTU ID"},
        yaxis: { title: "Sample Values"},
        showlegend: false,
      };
  Plotly.newPlot('bubble', bubble_trace, bubble_layout);
});
}
