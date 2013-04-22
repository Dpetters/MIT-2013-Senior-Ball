$(document).ready(function(){

  $(window).resize(function(){
	  $('#horizontal_bar').css({top: ($(window).height() - $('#horizontal_bar').outerHeight())/2});
  });

  navigating = false
  $("#navigation a").live('click', function(e){
    if (!navigating) {
      navigating = true
      $(".page_contents").fadeOut('slow');
      $("#" + $(this).attr("id").split("_").slice(0, -1).join("_")).delay(300).fadeIn('slow');
      navigating = false
    }
    e.preventDefault();
  });
  
  // To initially run the function:
  $(window).resize();

  $("#horizontal_bar").delay(500).animate({width:'100%'}, 1000);
  $("#horizontal_bar_content").delay(1000).animate({width:'100%'}, 1000);
  $("#vertical_bar").delay(2000).animate({height:'100%'}, 'slow');
  $("#vertical_content").delay("2800").fadeIn('slow');
  var id_to_show = "#general_info";
  if(location.hash != "" && $(location.hash).length > 0){
    id_to_show = location.hash;
  }
  $(id_to_show).delay(3000).fadeIn('slow');
});

