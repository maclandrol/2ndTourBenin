$(document).ready(function() {
    $(".circular-square").animate({
    	"height": "10%"
     }, 400, function(){$(".circular-square").animate({
     	height: "100%",
     	}, 400)}
     )
});