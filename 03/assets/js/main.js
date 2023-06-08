/*-----------------------------------------------------------------------------------
    Template Name: Bizent - Business Html Template
    Template URI: https://webtend.net/demo/html/bizent/
    Author: WebTend
    Author URI:  https://webtend.net/
    Version: 1.0

    Note: This is Main JS File.
-----------------------------------------------------------------------------------
	CSS INDEX
	===================
    01. Navbar
    02. Main Slider
    03. Testimonial Slider
    04. Testimonial Two
    05. Testimonial Three
    06. Blog Image
    07. footer client
    08. Service Four
    09. Fact Counter
    10. Search Popup
    11. Video PopUp
    12. Project Masonery
    13. Project Two Filter
    14. Project Page Filter
    15. Project Two Popup
    16. Skillbar
    17. WOW Animation
    18. back to top
    19. sticky active
    20. preloader
    
-----------------------------------------------------------------------------------*/

; (function ($) {
    "use strict";

    $(document).ready(function () {

        /**-----------------------------
         * 01. Navbar fix
         * ---------------------------*/
        $(document).on('click', '.navbar-area .navbar-nav li.menu-item-has-children>a', function (e) {
            e.preventDefault();
        })
       
        /*-------------------------------------
            menu
        -------------------------------------*/
        $('.navbar-area .menu').on('click', function() {
            $(this).toggleClass('open');
            $('.navbar-area .navbar-collapse').toggleClass('sopen');
        });
    
        // mobile menu
        if ($(window).width() < 992) {
            $(".in-mobile").clone().appendTo(".sidebar-inner");
            $(".in-mobile ul li.menu-item-has-children").append('<i class="fas fa-chevron-right"></i>');
            $('<i class="fas fa-chevron-right"></i>').insertAfter("");

            $(".menu-item-has-children a").on('click', function(e) {
                // e.preventDefault();

                $(this).siblings('.sub-menu').animate({
                    height: "toggle"
                }, 300);
            });
        }

        var menutoggle = $('.menu-toggle');
        var mainmenu = $('.navbar-nav');
        
        menutoggle.on('click', function() {
            if (menutoggle.hasClass('is-active')) {
                mainmenu.removeClass('menu-open');
            } else {
                mainmenu.addClass('menu-open');
            }
        });


        /*--------------------------------------------------
          02. Main Slider
        ---------------------------------------------------*/
        if ($('.main-slider-active').length) {
            $('.main-slider-active').slick({
                infinite: true,
                arrows: false,
                dots: true,
                fade: true,
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnHover: false,
                slidesToScroll: 1,
                slidesToShow: 1,
            });
        }
        

        /*--------------------------------------------------
            03. Testimonial Slider
        ---------------------------------------------------*/
        if ($('.testimonial-active').length) {
            $('.testimonial-active').slick({
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 1000,
                arrows: false,
                speed: 1000,
                focusOnSelect: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        } 

        
        /*--------------------------------------------------
          04. Testimonial Two
        ---------------------------------------------------*/
        if ($('.testimonial-two-image-slider').length) {
            $('.testimonial-two-image-slider').slick({
                infinite: true,
                arrows: false,
                dots: false,
                fade: true,
                autoplay: false,
                autoplaySpeed: 5000,
                pauseOnHover: false,
                slidesToScroll: 1,
                slidesToShow: 1,
                asNavFor: '.testimonial-two-slider',
            });
        }
        
        if ($('.testimonial-two-slider').length) {
            $('.testimonial-two-slider').slick({
                infinite: true,
                arrows: true,
                dots: false,
                fade: true,
                autoplay: false,
                autoplaySpeed: 5000,
                pauseOnHover: false,
                slidesToScroll: 1,
                slidesToShow: 1,
                asNavFor: '.testimonial-two-image-slider',
                prevArrow: $('.testi-two-prev'),
                nextArrow: $('.testi-two-next'),
            });
        }
        

        /*--------------------------------------------------
           05. Testimonial Three
        ---------------------------------------------------*/
        if ($('.testimonial-three-slider').length) {
            $('.testimonial-three-slider').slick({
                infinite: true,
                arrows: false,
                dots: true,
                fade: true,
                autoplay: true,
                autoplaySpeed: 5000,
                pauseOnHover: false,
                slidesToScroll: 1,
                slidesToShow: 1,
            });
        }
        
        
        /*--------------------------------------------------
           06. Blog Image
        ---------------------------------------------------*/
        if ($('.blog-item.style-two .image.slider').length) {
            $('.blog-item.style-two .image.slider').slick({
                infinite: true,
                arrows: true,
                dots: false,
                autoplay: false,
                autoplaySpeed: 5000,
                pauseOnHover: false,
                slidesToScroll: 1,
                slidesToShow: 1,
                prevArrow: '<button class="blog-prev"><i class="far fa-chevron-left"></i></button>',
                nextArrow: '<button class="blog-next"><i class="far fa-chevron-right"></i></button>',
            });
        }
        
        /*--------------------------------------------------
            07. footer client logo
        ---------------------------------------------------*/
        if ($('.footer-client-logo').length) {
            $('.footer-client-logo').slick({
                dots: false,
                infinite: true,
                autoplay: false,
                autoplaySpeed: 2000,
                arrows: false,
                speed: 1000,
                focusOnSelect: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 430,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        } 

        
        /*--------------------------------------------------
            08. Service Four
        ---------------------------------------------------*/
        if ($('.service-four-active').length) {
            $('.service-four-active').slick({
                dots: false,
                infinite: true,
                autoplay: true,
                autoplaySpeed: 2000,
                arrows: false,
                speed: 1000,
                focusOnSelect: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 1,
                        }
                    }
                ]
            });
        } 

        /*--------------------------------------------------
           09. Fact Counter
        ---------------------------------------------------*/
        if ($('.counter-item').length) {
            $('.counter-item').appear(function () {

                var $t = $(this),
                    n = $t.find(".count-text").attr("data-stop"),
                    r = parseInt($t.find(".count-text").attr("data-speed"), 10);

                if (!$t.hasClass("counted")) {
                    $t.addClass("counted");
                    $({
                        countNum: $t.find(".count-text").text()
                    }).animate({
                        countNum: n
                    }, {
                        duration: r,
                        easing: "linear",
                        step: function () {
                            $t.find(".count-text").text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $t.find(".count-text").text(this.countNum);
                        }
                    });
                }

            }, {
                accY: 0
            });
        }


        /*--------------------------------------------
           10. Search Popup
        ---------------------------------------------*/
        var bodyOvrelay =  $('#body-overlay');
        var searchPopup = $('#td-search-popup');
        var sidebarMenu = $('#sidebar-menu');

        $(document).on('click','#body-overlay',function(e){
            e.preventDefault();
            bodyOvrelay.removeClass('active');
            searchPopup.removeClass('active');
            sidebarMenu.removeClass('active');
        });
        $(document).on('click','.search-bar-btn',function(e){
            e.preventDefault();
            searchPopup.addClass('active');
            bodyOvrelay.addClass('active');
        });

        
        /* -------------------------------------------------
          11. Video PopUp
        ------------------------------------------------- */
        if ($('.video-play').length) {
            $('.video-play').magnificPopup({
                type: 'video',
            });
        }

        
        /* -------------------------------------------------
           12. Project Masonery
        ------------------------------------------------- */
        $('.project-active').imagesLoaded(function () {
            $('.project-active').isotope({
              itemSelector: '.project-item',
              percentPosition: true,
              masonry: {
                columnWidth: 1
              }
            })
        });

        
        /* -------------------------------------------------
          13. Project Two Filter
        ------------------------------------------------- */
        $(".project-filter li").on('click', function () {
            $(".project-filter li").removeClass("current");
            $(this).addClass("current");

            var selector = $(this).attr('data-filter');
            $('.project-two-active').imagesLoaded(function () {
                $(".project-two-active").isotope({
                    itemSelector: '.item',
                    filter: selector,
                    percentPosition: true,
                    masonry: {
                        columnWidth: 1
                    }
                });
            });

        });
        
        
        /* -------------------------------------------------
           14. Project Page Filter
        ------------------------------------------------- */
        $(".project-page-filter li").on('click', function () {
            $(".project-page-filter li").removeClass("current");
            $(this).addClass("current");

            var selector = $(this).attr('data-filter');
            $('.project-page-active').imagesLoaded(function () {
                $(".project-page-active").isotope({
                    itemSelector: '.project-item',
                    filter: selector,
                    percentPosition: true,
                    masonry: {
                        columnWidth: 1
                    }
                });
            });

        });
        
        
        /* -------------------------------------------------
           15. Project Two Popup
        ------------------------------------------------- */
        $('.project-two-item .popup-btn').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
            },
        });
        
        /* -------------------------------------------------
           16. Skillbar
        ------------------------------------------------- */
        if ($('.skillbar').length) {
            $('.skillbar').appear(function () {
                $('.skillbar').skillBars({
                    from: 0,
                    speed: 4000,
                    interval: 100,
                });
            });
        }

        /* -------------------------------------------------
          17. WOW Animation
        ------------------------------------------------- */
        if ($('.wow').length) {
            var wow = new WOW({
                boxClass: 'wow', // animated element css class (default is wow)
                animateClass: 'animated', // animation css class (default is animated)
                offset: 0, // distance to the element when triggering the animation (default is 0)
                mobile: true, // trigger animations on mobile devices (default is true)
                live: true // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }


        /*----------------------------------------
          18. back to top
        ----------------------------------------*/
        $(document).on('click', '.back-to-top', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 500);
        });

    });

    $(window).on("scroll", function() {
        /*---------------------------------------
           18. back to top
        -----------------------------------------*/
        var ScrollTop = $('.back-to-top');
        if ($(window).scrollTop() > 1000) {
            ScrollTop.fadeIn(300);
        } else {
            ScrollTop.fadeOut(300);
        }

        /*---------------------------------------
           19. sticky active
        -----------------------------------------*/
        var scroll = $(window).scrollTop();
        if (scroll < 445) {
            $(".navbar").removeClass("sticky-active");
        } else {
            $(".navbar").addClass("sticky-active");
        }

    });


    $(window).on('load', function () {

        /*-----------------
           20. preloader
        ------------------*/
        var preLoder = $("#preloader");
        preLoder.delay(500).fadeOut(500);

        /*-----------------
           18. back to top
        ------------------*/
        var backtoTop = $('.back-to-top')
        backtoTop.fadeOut();

        /*---------------------
            Cancel Preloader
        ----------------------*/
        $(document).on('click', '.cancel-preloader a', function (e) {
            e.preventDefault();
            $("#preloader").fadeOut(2000);
        });
        
        /*---------------------
           13. Project Two Filter
        ----------------------*/
       if ($('.project-two-active').length) {
            $('.project-two-active').imagesLoaded(function () {
                $(".project-two-active").isotope({
                    itemSelector: '.item',
                    percentPosition: true,
                    masonry: {
                        columnWidth: 1
                    }
                });
            });
        };
        
        /*---------------------
           14. Project Page Filter
        ----------------------*/
       if ($('.project-page-active').length) {
            $('.project-page-active').imagesLoaded(function () {
                $(".project-page-active").isotope({
                    itemSelector: '.project-item',
                    percentPosition: true,
                    masonry: {
                        columnWidth: 1
                    }
                });
            });
        };
        

    });


})(jQuery);