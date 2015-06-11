// Big 5 - OCEAN profile

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawNeedsChart() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Attribute');
  data.addColumn('number', 'Rating');
  data.addRows([
    ['Neuroticism', need_challenge1],
    ['Agreeableness', need_closeness1],
    ['Extraversion', need_curiosity1],
    ['Conscientious', need_excitement1],
    ['Harmony', need_harmony1],
    ['Ideal', need_ideal1],
    ['Liberty', need_liberty1],
    ['Love', need_love1],
    ['Practicality', need_practicality1],
    ['Self-Expression', need_selfexpression1],
    ['Stability', need_stability1],
    ['Structure', need_structure1],
  ]);

  // Set chart options
  var options ={ 'title':'Needs Chart',
  'legend': 'none',
  'width':500,
  'height':550,
  hAxis: {direction:-1, slantedText:true, slantedTextAngle:90 }};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_need_div'));
  chart.draw(data, options);
}

function drawNeedsChart2() {

  // Create the data table.
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Attribute');
  data.addColumn('number', 'Rating');
  data.addRows([
    ['Neuroticism', need_challenge2],
    ['Agreeableness', need_closeness2],
    ['Extraversion', need_curiosity2],
    ['Conscientious', need_excitement2],
    ['Harmony', need_harmony2],
    ['Ideal', need_ideal2],
    ['Liberty', need_liberty2],
    ['Love', need_love2],
    ['Practicality', need_practicality2],
    ['Self-Expression', need_selfexpression2],
    ['Stability', need_stability2],
    ['Structure', need_structure2],
  ]);

  // Set chart options
  var options ={ 'title':'Needs Chart',
  'legend': 'none',
  'width':500,
  'height':550,
  hAxis: {direction:-1, slantedText:true, slantedTextAngle:90 }};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_need_div2'));
  chart.draw(data, options);
}
