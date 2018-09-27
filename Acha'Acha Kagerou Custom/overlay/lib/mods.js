var jq = jQuery.noConflict();


jq(document).ready(function(){
	jq("nav").hover(function() {
		jq("nav").fadeToggle();
	});
});
