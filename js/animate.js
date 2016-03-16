$(document).ready(function() {
    $(".circular-square").animate({
    	"width": "10%"
     }, 10, function(){$(".circular-square").animate({
     	"width": "100%",
     	}, 400)}
     );

	$(function () {
		$(".percent").width(1);
		$("#zinsou").width(1);
	});

	$(function () {
	    $("#talon").animate({
	       width: '24.8%'
	    }, { duration: 1500, queue: false });
	    $("#zinsou").animate({
	       width: '28.44%'
	    }, { duration: 1500, queue: false });
	});

});