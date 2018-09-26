jQuery.noConflict();
$(document).ready(function(){
	$("nav > .container").hover(function() {
		$("nav > .container").fadeToggle("slow");
	});
});
