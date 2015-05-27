$(function(){
  // Code for google map api calls
  function initialize(mapName, lat, long) {
    var mapCanvas = document.getElementById(mapName);
    var mapOptions = {
      center: new google.maps.LatLng(lat, long),
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);
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
