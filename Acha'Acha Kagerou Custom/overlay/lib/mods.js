var jq = jQuery.noConflict();

jq(document).ready(function(){
    jq("#init-menu > ul li.button").click(function(){
        jq("nav").slideToggle(slow, function() {
            if (jq(this).is(":visible")) {
                 jq("#init-menu > ul li.button span").text('Hide');                
            } else {
                 jq("#init-menu > ul li.button span").text('Display');                
            }        
     });
            
 });
