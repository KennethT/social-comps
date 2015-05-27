$(function(){
  // Code for google map api calls
  function initialize(mapName, lat, long) {
    var heatmapData = [
      new google.maps.LatLng(37.782, -122.447),
      new google.maps.LatLng(37.782, -122.445),
      new google.maps.LatLng(37.782, -122.443),
      new google.maps.LatLng(37.782, -122.441),
      new google.maps.LatLng(37.782, -122.439),
      new google.maps.LatLng(37.782, -122.437),
      new google.maps.LatLng(37.782, -122.435),
      new google.maps.LatLng(37.785, -122.447),
      new google.maps.LatLng(37.785, -122.445),
      new google.maps.LatLng(37.785, -122.443),
      new google.maps.LatLng(37.785, -122.441),
      new google.maps.LatLng(37.785, -122.439),
      new google.maps.LatLng(37.785, -122.437),
      new google.maps.LatLng(37.785, -122.435)
    ];

    var citylatLong = new google.maps.LatLng(lat, long);

    map = new google.maps.Map(document.getElementById(mapName), {
      center: citylatLong,
      zoom: 3,
      mapTypeId: google.maps.MapTypeId.SATELLITE
    });

    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: heatmapData
    });
    heatmap.setMap(map);
  }

  initialize("map-canvas",39.7392,-104.9903);
  initialize("map-canvas-2",40.7127, -74.0059);



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
