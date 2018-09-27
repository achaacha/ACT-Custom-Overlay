var jq = jQuery.noConflict();


jq(document).ready(function(){
    jq("#init-menu > ul li.button").click(function(){
        var navb = jq(this);
        jq("nav").slideToggle(200); 
     });
            
 });
