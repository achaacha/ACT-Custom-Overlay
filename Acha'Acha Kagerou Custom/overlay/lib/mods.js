var jq = jQuery.noConflict();


jq(document).ready(function(){
    $("body").on('mouseenter mouseleave', function () {
        $(this).fadeToggle(100);
});
    
    jq("#button-list > ul li.button").click(function(){
        var navb = jq(this);
        jq("nav").slideToggle(200); 
     });
    
    jq("#table[data-width='2'] > li").hover(function(){
        jq(this).fadeOut();
    });
    
        jq("#table[data-width='3'] > li").hover(function(){
        jq(this).fadeOut();
    });
   
            
 });
