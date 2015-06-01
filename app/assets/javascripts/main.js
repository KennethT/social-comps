$(function(){

  // default sections hidden
  $(".tweet_both").hide();
  $(".sentiment_both").hide();

  //Three Primary Buttons - Hiding and Showing
  function buttonSelect(cssElement, selectedItem, deselected1, deselected2) {
    $(cssElement).on('click', function(){
      $(selectedItem).show();
      $(deselected1).hide();
      $(deselected2).hide();
    });
  }

  buttonSelect(".twt_btn", ".tweet_both", ".map_both", ".sentiment_both");
  buttonSelect(".map_btn", ".map_both", ".tweet_both", ".sentiment_both");
  buttonSelect(".sen_btn", ".sentiment_both", ".tweet_both", ".map_both");

});
