$(function(){

  function initialize(mapName, lat, long) {
    var mapCanvas = document.getElementById(mapName);
    var mapOptions = {
      center: new google.maps.LatLng(lat, long),
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
  }
  google.maps.event.addDomListener(window, 'load', initialize);

  initialize("map-canvas",39.7392,-104.9903);
  initialize("map-canvas-2",40.7127, -74.0059);


});
