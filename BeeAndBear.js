$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('a .blog-image').each( function(i){
            
            var top_of_object = $(this).position().top /*+ $(this).outerHeight()*/;
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            
            /* If the top of the object is visible in the window, fade it it */
            if( bottom_of_window > top_of_object ){
                
                $(this).animate({'opacity':'1'},1000);
                    
            }
            
            
        }); 
    
    });
    
});




