// Graph of the Needs of Values querying a particular term in a graph

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawValuesChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Attribute');
  data.addColumn('number', 'Rating');
  data.addRows([
    ['Conservation', conservation1],
    ['Openness to Change', openness_to_change1],
    ['Hedonism', hedonism1],
    ['Self Enhancement', self_enhancement1],
    ['Self Transcendence', self_transcendence1]
  ]);

  // Set chart options
  var options ={ 'title':'Values Chart',
  'legend': 'none',
  'width':500,
  'height':550,
  min: 0,
  max: 1,
  hAxis: {direction:-1, slantedText:true, slantedTextAngle:90 }};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_value_div'));
  chart.draw(data, options);
}

function drawValuesChart2() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Attribute');
  data.addColumn('number', 'Rating');
  data.addRows([
    ['Conservation', conservation2],
    ['Openness to Change', openness_to_change2],
    ['Hedonism', hedonism2],
    ['Self Enhancement', self_enhancement2],
    ['Self Transcendence', self_transcendence2]
  ]);

  // Set chart options
  var options ={ 'title':'Values Chart',
  'legend': 'none',
  'width':500,
  'height':550,
  min: 0,
  max: 1,
  hAxis: {direction:-1, slantedText:true, slantedTextAngle:90 }};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_value_div2'));
  chart.draw(data, options);
}
