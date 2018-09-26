jQuery.noConflict();
jQuery(document).ready(function($){
	$("nav > .container").hover(function() {
		$("nav > .container").fadeToggle("slow");
	});
});
