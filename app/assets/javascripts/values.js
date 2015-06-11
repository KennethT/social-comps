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
    ['Neuroticism', conservation1],
    ['Agreeableness', openness_to_change1],
    ['Extraversion', hedonism1],
    ['Conscientious', self_enhancement1],
    ['Harmony', self_transcendence1]
  ]);

  // Set chart options
  var options ={ 'title':'Values Chart',
  'legend': 'none',
  'width':500,
  'height':550,
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
    ['Neuroticism', conservation1],
    ['Agreeableness', openness_to_change1],
    ['Extraversion', hedonism1],
    ['Conscientious', self_enhancement1],
    ['Harmony', self_transcendence1]
  ]);

  // Set chart options
  var options ={ 'title':'Values Chart',
  'legend': 'none',
  'width':500,
  'height':550,
  hAxis: {direction:-1, slantedText:true, slantedTextAngle:90 }};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_value_div2'));
  chart.draw(data, options);
}
