var jq = jQuery.noConflict();


    
jq(document).ready(function(){
	jq("#init-menu").hover(function() {
		jq("#init-menu").fadeToggle();
	});
});
