var jq = jQuery.noConflict();


jq(document).ready(function(){
    jq("#button-list > ul li.button").click(function(){
        var navb = jq(this);
        jq("nav").slideToggle(200); 
     });
            
 });
