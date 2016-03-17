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
	       width: '24.73%'
	    }, { duration: 1000, queue: false });
	    $("#zinsou").animate({
	       width: '28.42%'
	    }, { duration: 1000, queue: false });
	});

	$("div.programs:not(:first)").hide();

	$('div.title').click(function() {
  		$(this).parent().find(".programs").toggle();
  		console.log("HAHAHAH");
  		return false;
	});

});