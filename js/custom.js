(function($) {
    'use strict';

    /* Hide menu after click
    ----------------------------------------------*/
    $('.navbar-nav li a').click(function(event) {
        $('.in').collapse('hide');
    });

    /* Smooth scroll to section
    ----------------------------------------------*/
    $('a.scroll[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top-70
                }, 2000);
                return false;
            }
        }
    });

    /* Team slideshow
    ----------------------------------------------*/
    $("#team-carousel").owlCarousel({
 
        autoPlay: 5000, //Set AutoPlay to 5 seconds

        items : 4,
        itemsDesktopSmall : [979,3],
        stopOnHover: true
 
    });

    /* Tooltip
    ----------------------------------------------*/
    $('[data-toggle="tooltip"]').tooltip();

 
})(jQuery);

