jQuery.noConflict();
jQuery(document).ready(function($){
	$("#p .general_box").hover(function() {
		$("#p #profile_tabs").stop().fadeToggle();
	})
	$("#p .general_box").hover(function() {
		$("#p .overview_half:last-child div").stop().fadeToggle();
	})
});