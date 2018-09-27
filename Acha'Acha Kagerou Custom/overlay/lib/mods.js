var jq = jQuery.noConflict();


    
jq(document).ready(function(){

	jq("#init-menu > ul li.button").hover(function() {
		jq("#init-menu > ul li.button span").fadeToggle();
	});
});
