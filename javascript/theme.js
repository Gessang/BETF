
(function($) {
    "use strict";


//THIS IS AN ANIMATION ON SCROLL
    if ($('.wow').length) {
        var wow = new WOW({
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)

            mobile: true, // trigger animations on mobile devices (default is true)
            live: true // act on asynchronously loaded content (default is true)
        });
        wow.init();
    }
 

    $(window).on('load', function() {
      //BANNER SLIDER
        if ($('.slider-one__carousel').length) {
            var slideOneCarousel = $('.slider-one__carousel').owlCarousel({
                loop: true,
                items: 1,
                margin: 0,
                dots: true,
                nav: false,
                animateOut: 'slideOutDown',
                animateIn: 'fadeIn',
                active: true,
                smartSpeed: 1000,
                autoplay: 7000
            });
            $('.slide-one__left-btn').on('click', function(e) {
                slideOneCarousel.trigger('next.owl.carousel');
                e.preventDefault();
            });
            $('.slide-one__right-btn').on('click', function(e) {
                slideOneCarousel.trigger('prev.owl.carousel');
                e.preventDefault();
            });
        }

//TESTIOMIES SLIDER
        if ($('.testimonials-one__carousel').length) {
            if ($('.testimonials-one__carousel').data('carousel-margin') !== undefined) {
                var testicarouselMargin = $('.testimonials-one__carousel').data('carousel-margin');
            } else {
                var testicarouselMargin = 80;
            }
            var testiOneCarousel = $('.testimonials-one__carousel').owlCarousel({
                loop: true,
                margin: testicarouselMargin,
                nav: false,
                dots: true,
                autoWidth: false,
                autoplay: true,
                smartSpeed: 700,
                autoplayTimeout: 5000,
                autoplayHoverPause: true,
                responsive: {
                    0: {
                        items: 1
                    },
                    480: {
                        items: 1
                    },
                    600: {
                        items: 1
                    },
                    991: {
                        items: 1
                    },
                    1000: {
                        items: 1
                    },
                    1200: {
                        items: 1
                    }
                }
            });

            $('.testimonials-one__navbtn-left').on('click', function() {
                testiOneCarousel.trigger('next.owl.carousel');
                return false;
            });
            $('.testimonials-one__navbtn-right').on('click', function() {
                testiOneCarousel.trigger('prev.owl.carousel');
                return false;
            });

        }




    });

})(jQuery);