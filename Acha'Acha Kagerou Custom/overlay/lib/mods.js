var jq = jQuery.noConflict();


jq(document).ready(function(){

    
    jq("#button-list > ul li.button").click(function(){
        var navb = jq(this);
        jq("nav").slideToggle(200); 
     });
    
    jq(".class-pgl, .class-mnk, .class-lnc, .class-drg, .class-arc, .class-brd, .class-rog, .class-nin, .class-acn, .class-smn, .class-thm, .class-blm, .class-mch, .class-sam, .class-rdm, .class-gla, .class-pld, .class-mrd, .class-war, .class-drk, .class-gld, .class-cnj, .class-whm, .class-sch, .class-ast").hover(function(){
        jq(".flex-column-deal-total, .flex-column-deal-per-second, .flex-column-deal-pct, .flex-column-etc-death").css('display','none !important');
    });
   
            
 });
