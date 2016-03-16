$(document).ready(function() {
    $(".circular-square").animate({
    	"width": "10%"
     }, 10, function(){$(".circular-square").animate({
     	"width": "100%",
     	}, 400)}
     );

	$(function () {
		$("#talon").width(0);
		$("#zinsou").width(0);
	});

	$(function () {
	    $("#talon").animate({
	       width: '24.8%'
	    }, { duration: 1000, queue: false });
	    $("#zinsou").animate({
	       width: '28.44%'
	    }, { duration: 1000, queue: false });
	});

});