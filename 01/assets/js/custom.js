(function ($) {
	"use strict";
	jQuery(document).ready(function ($) {
		// /*========== Responsive Menu  ==========*/
		$('.main-menu').meanmenu({
			meanMenuContainer: '.responsive-menu',
			meanScreenWidth: '991',
			meanMenuClose: '<i class="flaticon-close"></i>'
		});
		/*==========  Search  =========*/
		$('.search-icon.open').on('click', function () {
			$('.search-box').fadeIn().addClass('active');
		});
		$('.search-box').on('click', function () {
			$(this).fadeOut().removeClass('active');
		});
		$('.search-box-icon').on('click', function () {
			$('.search-box').fadeOut().removeClass('active');
		});
		$('.search-box form').on('click', function (e) {
			e.stopPropagation();
		});
		/*========== menu-bar sticky  ==========*/
		$(window).on('scroll', function () {
			var scrollDown = $(window).scrollTop();
			if (scrollDown < 135) {
				$(".header-menu").removeClass("sticky-menu");
			} else {
				$(".header-menu").addClass("sticky-menu");
			}
		});
		/*==========  owlCarousel  =========*/
		var banner = $('.banner-group');
		banner.owlCarousel({
			items: 1,
			nav: true,
			dots: false,
			autoplay: false,
			loop: true,
			navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-next"></i>'],
		});
		/*==========  Services  ==========*/
		var service = $('.services-group');
		service.owlCarousel({
			items: 3,
			nav: false,
			dots: true,
			margin: 30,
			center: true,
			autoplay: false,
			loop: true,
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				768: {
					items: 2,
					center: false,
				},
				991: {
					items: 2,
					center: false,
				},
				992: {
					items: 3
				}
			}
		});
		/*==========  Testimonial  ==========*/
		var testimonial = $('.testimonial-group');
		testimonial.owlCarousel({
			items: 2,
			nav: true,
			dots: false,
			margin: 30,
			autoplay: false,
			loop: true,
			navText: ['<i class="flaticon-left-arrow"></i>', '<i class="flaticon-next"></i>'],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1199: {
					items: 1,
					center: false,
				},
				1200: {
					items: 2
				}
			}
		});
		/*==========  counterUp  ==========*/
		var counter = $('.counter');
		counter.counterUp({
			time: 2500,
			delay: 100
		});
		// /*==========  sidebar popup  ==========*/
		$('.hamburger-icon i').on("click", function () {
			$('.hamburger-popup').addClass('active');
		});
		$('.hamburger-popup .hamburger-close-btn').on("click", function () {
			$('.hamburger-popup').removeClass('active');
		});
		$('.hamburger-icon i').on("click", function () {
			$('.hamburger-overlay').addClass('show');
		});
		$('.hamburger-popup .hamburger-close-btn').on("click", function () {
			$('.hamburger-overlay').removeClass('show');
		});
		/*========== scroll to top  ==========*/
		$(window).on('scroll', function () {
			if ($(this).scrollTop() > 200) {
				$('.scroll-top').fadeIn(200);
			} else {
				$('.scroll-top').fadeOut(200);
			}
		});
		$('.scroll-top').on('click', function (event) {
			event.preventDefault();
			$('html, body').animate({
				scrollTop: 0
			}, 1000);
		});
	
		/*========== FAQ  ==========*/
		$(".collapse-header").click(function () {
			if ($(this).next(".card-body").hasClass("active")) {
				$(this).next(".card-body").removeClass("active").slideUp()
				$(this).children("i").removeClass("flaticon-minus").addClass("flaticon-plus")
			} else {
				$(".collapse-card .card-body").removeClass("active").slideUp()
				$(".collapse-card .collapse-header i").removeClass("flaticon-minus").addClass("flaticon-plus");
				$(this).next(".card-body").addClass("active").slideDown()
				$(this).children("i").removeClass("flaticon-plus").addClass("flaticon-minus")
			}
		});
		/*==========  theme loader  ==========*/
			jQuery(window).load(function () {
			    jQuery(".theme-loader").fadeOut(500);
		});
	});
})(jQuery);