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
    ['Openness', 0.5],
    ['Conscientiousness', 0.9],
    ['Extraversion', 0.8],
    ['Agreeableness', 0.2],
    ['neuroticism', 0.1]
  ]);

  // Set chart options
  var options = {'title':'Big Five Personality Model',
  'width':600,
  'height':450};

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
