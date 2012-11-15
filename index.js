$(document).ready(function(){
    $(window).resize(function(){
	$('#horizontal_bar').css({
	    top: ($(window).height() - $('#horizontal_bar').outerHeight())/2
	});
    });

    $("#navigation a").live('click', function(e){
        $(".page_contents").fadeOut('slow');
        e.preventDefault();
    });
    $("#general_info_link").live('click', function(e){
        $("#general_info").delay(300).fadeIn('slow');
        e.preventDefault();
    });

    // To initially run the function:
    $(window).resize();

    $("#horizontal_bar").delay(500).animate({width:'100%'}, 1000);
    $("#horizontal_bar_content").delay(1000).animate({width:'100%'}, 1000);
    $("#vertical_bar").delay(2000).animate({height:'100%'}, 'slow');
    $("#vertical_content").delay("2800").fadeIn('slow');
    $("#general_info").delay(3000).fadeIn('slow');
});

