$(function(){

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
