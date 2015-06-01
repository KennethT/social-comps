$(function(){
  console.log(locations);

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

  // // Code for google map api calls
  // function initialize(mapName, lat, long) {
  //   // var heatmapData = [
  //   //   new google.maps.LatLng(37.782, -122.447),
  //   //   new google.maps.LatLng(37.782, -122.445),
  //   //   new google.maps.LatLng(37.782, -122.443),
  //   //   new google.maps.LatLng(37.782, -122.441),
  //   //   new google.maps.LatLng(37.782, -122.439),
  //   //   new google.maps.LatLng(37.782, -122.437),
  //   //   new google.maps.LatLng(37.782, -122.435),
  //   //   new google.maps.LatLng(37.785, -122.447),
  //   //   new google.maps.LatLng(37.785, -122.445),
  //   //   new google.maps.LatLng(37.785, -122.443),
  //   //   new google.maps.LatLng(37.785, -122.441),
  //   //   new google.maps.LatLng(37.785, -122.439),
  //   //   new google.maps.LatLng(37.785, -122.437),
  //   //   new google.maps.LatLng(37.785, -122.435)
  //   // ];
  //
  //   var citylatLong = new google.maps.LatLng(lat, long);
  //
  //   map = new google.maps.Map(document.getElementById(mapName), {
  //     center: citylatLong,
  //     zoom: 3,
  //     mapTypeId: google.maps.MapTypeId.SATELLITE
  //   });
  //
  //   var heatmap = new google.maps.visualization.HeatmapLayer({
  //     data: heatmapData
  //   });
  //   heatmap.setMap(map);
  // }
  //
  // initialize("map-canvas",39.7392,-104.9903);
  // initialize("map-canvas-2",40.7127, -74.0059);



  // default sections hidden
  $(".tweet_both").hide();
  $(".sentiment_both").hide();

  //Three Primary Buttons - Hiding and Showing
  $(".twt_btn").on('click', function(){
        $(".map_both").hide();
        $(".sentiment_both").hide();
        $(".tweet_both").show();
  });

  $(".map_btn").on('click', function(){
        $(".tweet_both").hide();
        $(".sentiment_both").hide();
        $(".map_both").show();
  });

  $(".sen_btn").on('click', function(){
        $(".tweet_both").hide();
        $(".map_both").hide();
        $(".sentiment_both").show();
  });

});
