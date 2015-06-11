// Big 5 - OCEAN profile

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Attribute');
  data.addColumn('number', 'Rating');
  data.addRows([
    ['Neuroticism', nR],
    ['Agreeableness', aR],
    ['Extraversion', eR],
    ['Conscientious', cR],
    ['Openness', oR]
  ]);

  // Set chart options
  var options ={ 'title':'Big Five Personality Model',
  'legend': 'none',
  'width':500,
  'height':550,
  min: 0,
  max: 1, 
  hAxis: {direction:-1, slantedText:true, slantedTextAngle:90 }};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}

function drawChart2() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Attribute');
  data.addColumn('number', 'Rating');
  data.addRows([
    ['Neuroticism', nR2],
    ['Agreeableness', aR2],
    ['Extraversion', eR2],
    ['Conscientious', cR2],
    ['Openness', oR2],
  ]);

  // Set chart options
  var options ={ 'title':'Big Five Personality Model',
  'legend': 'none',
  'width':500,
  'height':550,
  min: 0,
  max: 1,
  hAxis: {direction:-1, slantedText:true, slantedTextAngle:90 }};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div2'));
  chart.draw(data, options);
}
