$(document).ready(function(){

  $(window).resize(function(){
	  $('#horizontal_bar').css({top: .66*(($(window).height() - $('#horizontal_bar').outerHeight())/2)});
  });

  navigating = false
  $("#navigation a").live('click', function(e){
    if (!navigating) {
      navigating = true
      $(".page_contents").fadeOut('slow');
      id = $(this).attr("id").split("_").slice(0, -1).join("_");
      $("#" + $(this).attr("id").split("_").slice(0, -1).join("_")).delay(300).fadeIn('slow');
      if(id=="theme") {
         setTimeout('addDot()',300);  
      }
      navigating = false;
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

var addDot = function() {
  loadScript("http://assets.pinterest.com/js/pinit.js");
}
function loadScript(url)
{
     var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
           script.type = 'text/javascript';
              script.src = url;
                    head.appendChild(script);
}
var myPrettyCode = function() {

};
