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
    ['Openness', oR],
    ['Conscientiousness', cR],
    ['Extraversion', eR],
    ['Agreeableness', aR],
    ['Neuroticism', nR]
  ]);

  // Set chart options
  var options = {'title':'Big Five Personality Model',
  'width':600,
  'height':450};

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
    ['Openness', oR2],
    ['Conscientiousness', cR2],
    ['Extraversion', eR2],
    ['Agreeableness', aR2],
    ['Neuroticism', nR2]
  ]);

  // Set chart options
  var options = {'title':'Big Five Personality Model',
  'width':600,
  'height':450};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div2'));
  chart.draw(data, options);
}
