function drawGaugeChart() {

  var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Sentiment', sentimentValue1]
  ]);

  var options = {
    width: 800, height: 240,
    greenFrom: 50, greenTo: 100,
    redFrom:-100, redTo: -5,
    min: -100, max: 100,
    minorTicks: 5
  };

  var chart = new google.visualization.Gauge(document.getElementById('chart_gauge1_div'));

  chart.draw(data, options);

  setInterval(function() {
    data.setValue(0, 1, sentimentValue1 + Math.round(1 * Math.random()));
    chart.draw(data, options);
  }, 1000);
}

function drawGaugeChart2() {

  var data = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Sentiment', sentimentValue2]
  ]);

  var options = {
    width: 800, height: 240,
    greenFrom: 50, greenTo: 100,
    redFrom:-100, redTo: -5,
    min: -100, max: 100,
    minorTicks: 5
  };

  var chart = new google.visualization.Gauge(document.getElementById('chart_gauge2_div'));

  chart.draw(data, options);

  setInterval(function() {
    data.setValue(0, 1, sentimentValue2 + Math.round(1 * Math.random()));
    chart.draw(data, options);
  }, 1000);
}
