var jq = jQuery.noConflict();

jq(document).ready(function(){
    jq("#init-menu > ul li.button").click(function(){
        jq("nav").slideToggle(); 
     });
            
 });
