$(document).ready(function() {
    $(".circular-square").animate({
    	"width": "10%"
     }, 10, function(){$(".circular-square").animate({
     	"width": "100%",
     	}, 400)}
     );

	$(function () {
		$("#talon").width(1);
		$("#zinsou").width(1);
	});

	$(function () {
	    $("#talon").animate({
	       width: '24.8%'
	    }, { duration: 1000, queue: false });
	    $("#zinsou").animate({
	       width: '28.44%'
	    }, { duration: 1000, queue: false });
	});

	$('.title').click(function() {
  		$(this).closest('.content-holder').find(".programs").toggle();
	});

});