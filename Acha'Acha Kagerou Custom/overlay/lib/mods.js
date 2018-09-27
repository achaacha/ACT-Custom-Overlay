var jq = jQuery.noConflict();

var bspan = jq('#init-menu > ul li.button span')

    jq('#init-menu > ul li.button').click(function(){
        jq('nav').slideToggle('slow', function() {
            if (jq(this).is(":visible")) {
                 bspan.text('Hide');                
            } else {
                 bspan.text('Display');                
            }        
        });
            
    });
