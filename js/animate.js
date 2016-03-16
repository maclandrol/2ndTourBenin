$(document).ready(function() {
    $(".circular-square").animate({
    	"width": "10%"
     }, 2000, function(){$(".circular-square").animate({
     	"width": "100%",
     	}, 2000)}
     )
});