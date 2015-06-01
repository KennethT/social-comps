
function mapBuilder(canvasname, location_data){
  var mapCoordinates = [];
  initializeHeatMap(canvasname, location_data, mapCoordinates);
  console.log(location_data);
}

function initializeHeatMap(mapName, loc, mapCoordinates) {
  document.getElementById(mapName).style.display="block";
  makeCoords(1, loc, mapCoordinates);
  var heatMapOptions = {
    zoom: 2,
    center: new google.maps.LatLng(39.7392,-104.9903),
    mapTypeId: google.maps.MapTypeId.SATELLITE
  };
  heatmap_map = new google.maps.Map(document.getElementById(mapName),
  heatMapOptions);
  var pointArray = new google.maps.MVCArray(mapCoordinates);
  heatmap = new google.maps.visualization.HeatmapLayer({
    data: pointArray
  });
  heatmap.setMap(heatmap_map);
  heatmap.set('radius', 50);
}


function makeCoords(dataPointWeight,loc, mapCoordinates) {
  var i = 0;
  //translate array of lat/longs to coordinates on Google Map
  while (loc[i]) {
    lat = loc[i][0];
    long = loc[i][1];
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
