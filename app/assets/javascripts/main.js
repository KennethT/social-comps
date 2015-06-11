$(function(){

  // default sections hidden
  $(".tweet_both").hide();
  $(".personality_both").hide();
  $(".sentiment_both").hide();
  $(".need_both").hide();
  $(".value_both").hide();

  //Three Primary Buttons - Hiding and Showing
  function buttonSelect(cssElement, selectedItem, deselected1, deselected2, deselected3, deselected4, deselected5) {
    $(cssElement).on('click', function(){
      $(selectedItem).show();
      $(deselected1).hide();
      $(deselected2).hide();
      $(deselected3).hide();
      $(deselected4).hide();
      $(deselected5).hide();
    });
  }

  buttonSelect(".twt_btn", ".tweet_both", ".map_both", ".personality_both", ".sentiment_both", ".need_both", ".value_both");
  buttonSelect(".map_btn", ".map_both", ".tweet_both", ".personality_both", ".sentiment_both", ".need_both", ".value_both");
  buttonSelect(".per_btn", ".personality_both", ".tweet_both", ".map_both", ".sentiment_both", ".need_both", ".value_both");
  buttonSelect(".sen_btn", ".sentiment_both", ".personality_both", ".tweet_both", ".map_both", ".need_both", ".value_both");
  buttonSelect(".nee_btn", ".need_both", ".sentiment_both", ".personality_both", ".tweet_both", ".map_both", ".value_both");
  buttonSelect(".val_btn", ".value_both", ".need_both", ".sentiment_both", ".personality_both", ".tweet_both", ".map_both");

});
