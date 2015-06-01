$(function(){

  var mapCoordinates = [];

  function makeCoords(dataPointWeight) {
    var i = 0;
    //translate array of lat/longs to coordinates on Google Map
    while (locations[i]) {
      lat = locations[i][0];
      long = locations[i][1];
      i++;
      if(dataPointWeight){
        coords = {location: new google.maps.LatLng(lat,long), weight: dataPointWeight};
        mapCoordinates.push(coords);
      }
      else{
        coords = new google.maps.LatLng(lat,long);
        mapCoordinates.push(coords);
      }
    }
  }

  function displayHeatMap() {
    document.getElementById('map-canvas').style.display="block";
    initializeHeatMap();
  }

  function initializeHeatMap() {
    makeCoords(1);
    console.log(mapCoordinates);
    var heatMapOptions = {
      zoom: 2,
      center: new google.maps.LatLng(39.7392,-104.9903),
      mapTypeId: google.maps.MapTypeId.SATELLITE
    };
    heatmap_map = new google.maps.Map(document.getElementById('map-canvas'),
    heatMapOptions);
    var pointArray = new google.maps.MVCArray(mapCoordinates);
    heatmap = new google.maps.visualization.HeatmapLayer({
      data: pointArray
    });
    heatmap.setMap(heatmap_map);
    heatmap.set('radius', 50);
  }


  displayHeatMap();
  // displayHeatMap('map-canvas-2');

});
