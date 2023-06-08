(function($) {
	/*==========  Nice Select  ==========*/
	$('select').niceSelect();
	// /*========== Responsive Menu  ==========*/
	$('.header-meanmenu').meanmenu({
		meanMenuContainer: '.responsive-menu',
		meanScreenWidth: '991',
		meanMenuOpen: '<span></span><span></span><span></span>',
		meanMenuClose: '<i class="fal fa-times"></i>'
	});
	/*==========  sidebar popup  ==========*/
	$('.hamburger-icon i').on("click", function() {
		$('.hamburger-popup').addClass('active');
	});
	$('.hamburger-popup .hamburger-close-btn').on("click", function() {
		$('.hamburger-popup').removeClass('active');
	});
	$('.hamburger-icon i').on("click", function() {
		$('.hamburger-overlay').addClass('show');
	});
	$('.hamburger-popup .hamburger-close-btn').on("click", function() {
		$('.hamburger-overlay').removeClass('show');
	});
	/*==========  Search  ==========*/
	$('.header__area-menu-bar-right-item-search-icon.open').on('click', function() {
		$('.header__area-menu-bar-right-item-search-box').fadeIn().addClass('active');
	});
	$('.header__area-menu-bar-right-item-search-box-icon').on('click', function() {
		$(this).fadeIn().removeClass('active');
	});
	$('.header__area-menu-bar-right-item-search-box-icon i').on('click', function() {
		$('.header__area-menu-bar-right-item-search-box').fadeOut().removeClass('active');
	});
	$('.header__area-menu-bar-right-item-search-box form').on('click', function(e) {
		e.stopPropagation();
	});
	/*==========  Login  ==========*/
	$('.header__area-menu-bar-right-item-login-icon.open').on('click', function() {
		$('.header__area-menu-bar-right-item-login-box').fadeIn().addClass('active');
	});
	$('.header__area-menu-bar-right-item-login-box-icon').on('click', function() {
		$(this).fadeIn().removeClass('active');
	});
	$('.header__area-menu-bar-right-item-login-box-icon i').on('click', function() {
		$('.header__area-menu-bar-right-item-login-box').fadeOut().removeClass('active');
	});
	$('.header__area-menu-bar-right-item-login-box form').on('click', function(e) {
		e.stopPropagation();
	});
	/*==========  background  ==========*/
	$("[data-background]").each(function() {
		$(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
	})
	/*==========  counterUp  ==========*/
	var counter = $('.counter');
	counter.counterUp({
		time: 2500,
		delay: 100
	});
	// /*==========  Brand  ==========*/
	var swiper = new Swiper(".sponsors-slider", {
		slidesPerView: 5,
		loop: true,
		speed: 1500,
		spaceBetween: 30,
		autoplay: {
			delay: 3500,
		},
		breakpoints: {
			0: {
				slidesPerView: 2
			},
			575: {
				slidesPerView: 3
			},
			992: {
				slidesPerView: 4
			},
			1200: {
				slidesPerView: 5
			},
		}
	});
	// /*==========  Portfolio  ==========*/
	var swiper = new Swiper(".portfolio-slider", {
		slidesPerView: 4,
		loop: true,
		speed: 1500,
		spaceBetween: 30,
		autoplay: {
			delay: 4000,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 2,
			},
			1200: {
				slidesPerView: 3,
			},
			1400: {
				slidesPerView: 4,
			}
		},
	});
	// /*==========  Portfolio Two  ==========*/
	var swiper = new Swiper(".portfolio-slider-two", {
		slidesPerView: 4,
		loop: true,
		speed: 1500,
		spaceBetween: 30,
		autoplay: {
			delay: 4000,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 4,
			}
		},
	});
	/*==========  video-popup  ==========*/
	$('.video-popup').magnificPopup({
		type: 'iframe'
	});
	/*========== FAQ  ==========*/
	$(".faq__area-collapse-item-card-header").click(function() {
		if ($(this).next(".faq__area-collapse-item-card-header-content").hasClass("active")) {
			$(this).next(".faq__area-collapse-item-card-header-content").removeClass("active").slideUp()
			$(this).children("i").removeClass("far fa-minus").addClass("far fa-plus")
		} else {
			$(".faq__area-collapse-item-card .faq__area-collapse-item-card-header-content").removeClass("active").slideUp()
			$(".faq__area-collapse-item-card .faq__area-collapse-item-card-header i").removeClass("far fa-minus").addClass("far fa-plus");
			$(this).next(".faq__area-collapse-item-card-header-content").addClass("active").slideDown()
			$(this).children("i").removeClass("far fa-plus").addClass("far fa-minus")
		}
	});
	/*========== FAQ  ==========*/
	$(".faq__two-collapse-item-card-header").click(function() {
		if ($(this).next(".faq__two-collapse-item-card-header-content").hasClass("active")) {
			$(this).next(".faq__two-collapse-item-card-header-content").removeClass("active").slideUp()
			$(this).children("i").removeClass("far fa-minus").addClass("far fa-plus")
		} else {
			$(".faq__two-collapse-item-card-header-content").removeClass("active").slideUp()
			$(".faq__two-collapse-item-card .faq__two-collapse-item-card-header i").removeClass("far fa-minus").addClass("far fa-plus");
			$(this).next(".faq__two-collapse-item-card-header-content").addClass("active").slideDown()
			$(this).children("i").removeClass("far fa-plus").addClass("far fa-minus")
		}
	});	
	/*========== FAQ  ==========*/
	$(".faq__two-collapse-item-card-header-two").click(function() {
		if ($(this).next(".faq__two-collapse-item-card-header-two-content").hasClass("active")) {
			$(this).next(".faq__two-collapse-item-card-header-two-content").removeClass("active").slideUp()
			$(this).children("i").removeClass("far fa-minus").addClass("far fa-plus")
		} else {
			$(".faq__two-collapse-item-card-header-two-content").removeClass("active").slideUp()
			$(".faq__two-collapse-item-card .faq__two-collapse-item-card-header-two i").removeClass("far fa-minus").addClass("far fa-plus");
			$(this).next(".faq__two-collapse-item-card-header-two-content").addClass("active").slideDown()
			$(this).children("i").removeClass("far fa-plus").addClass("far fa-minus")
		}
	});	
	// /*==========  banner  ==========*/
	let sliderActive1 = '.banner-slider';
	let sliderInit1 = new Swiper(sliderActive1, {
		// Optional parameters
		slidesPerView: 1,
		effect: 'fade',
		loop: true,
		effect: 'fade',
		autoplay: {
			delay: 5000,
		},
		pagination: {
			el: ".banner-pagination",
			clickable: true,
		},
	});
	var swiper = new Swiper(".banner-slide2", {
		spaceBetween: 0,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
		breakpoints: {
			320: {
				slidesPerView: 2,
			},
			575: {
				slidesPerView: 3,
			},
		}
	});
	let sliderActive2 = '.banner-slide';
	let sliderInit2 = new Swiper(sliderActive2, {
		slidesPerView: 1,
		effect: 'fade',
		loop: true,
		spaceBetween: 0,
		effect: 'fade',
		autoplay: {
			delay: 6000,
		},
		pagination: {
			el: ".banner-dots",
			clickable: true,
		},
		thumbs: {
			swiper: swiper,
		},
	});

	function animated_swiper(selector, init) {
		let animated = function animated() {
			$(selector + ' [data-animation]').each(function() {
				let anim = $(this).data('animation');
				let delay = $(this).data('delay');
				let duration = $(this).data('duration');
				$(this).removeClass('anim' + anim).addClass(anim + ' animated').css({
					webkitAnimationDelay: delay,
					animationDelay: delay,
					webkitAnimationDuration: duration,
					animationDuration: duration
				}).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
					$(this).removeClass(anim + ' animated');
				});
			});
		};
		animated();
		// Make animated when slide change
		init.on('slideChange', function() {
			$(sliderActive1 + ' [data-animation]').removeClass('animated');
			$(sliderActive2 + ' [data-animation]').removeClass('animated');
		});
		init.on('slideChange', animated);
	}
	animated_swiper(sliderActive1, sliderInit1);
	animated_swiper(sliderActive2, sliderInit2);
	/*==========  theme loader  ==========*/
	$(window).on("load", function() {
		$(".theme-loader").fadeOut(500);
	});
	// /*==========  Services Two  ==========*/
	var swiper = new Swiper(".services-two-slider", {
		slidesPerView: 3,
		loop: true,
		speed: 1500,
		centeredSlides: true,
		navigation: {
			nextEl: '.services__two-button-next',
			prevEl: '.services__two-button-prev',
		},
		autoplay: {
			delay: 4000,
		},
		breakpoints: {
			0: {
				slidesPerView: 1
			},
			768: {
				centeredSlides: false,
				slidesPerView: 2
			},
			992: {
				centeredSlides: false,
				slidesPerView: 2
			},
			1200: {
				centeredSlides: true,
				slidesPerView: 3
			},
		}
	});
	/*========== Active Hover  ==========*/
	$(".features__area-item").hover(function() {
		$(".features__area-item").removeClass("features__area-item-hover");
		$(this).addClass("features__area-item-hover");
	});
		/*========== Active Hover  ==========*/
		$(".blog__details-left-list").hover(function() {
			$(".blog__details-left-list").removeClass("blog__details-left-list-hover");
			$(this).addClass("blog__details-left-list-hover");
		});
		/*==========  Services Skill Bar  ==========*/
	if ($('.services__area-page-skill-left-item-skill-bar').length) {
		$('.services__area-page-skill-left-item-skill-bar').appear(function () {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, {
			accY: 0
		});
	};
	/*==========  Team Skill Bar  ==========*/
	if ($('.team__details-right-skill-item-bar').length) {
		$('.team__details-right-skill-item-bar').appear(function () {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, {
			accY: 0
		});
	};
	/*========== scroll to top  ==========*/
	var scrollPath = document.querySelector('.scroll-up path, .scroll-two path, .scroll-three path');
	var pathLength = scrollPath.getTotalLength();
	scrollPath.style.transition = scrollPath.style.WebkitTransition = 'none';
	scrollPath.style.strokeDasharray = pathLength + ' ' + pathLength;
	scrollPath.style.strokeDashoffset = pathLength;
	scrollPath.getBoundingClientRect();
	scrollPath.style.transition = scrollPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
	var updatescroll = function() {
		var scroll = $(window).scrollTop();
		var height = $(document).height() - $(window).height();
		var scroll = pathLength - (scroll * pathLength / height);
		scrollPath.style.strokeDashoffset = scroll;
	}
	updatescroll();
	$(window).scroll(updatescroll);
	var offset = 50;
	var duration = 950;
	jQuery(window).on('scroll', function() {
		if (jQuery(this).scrollTop() > offset) {
			jQuery('.scroll-up, .scroll-two, .scroll-three').addClass('active-scroll');
		} else {
			jQuery('.scroll-up, .scroll-two, .scroll-three').removeClass('active-scroll');
		}
	});
	jQuery('.scroll-up, .scroll-two, .scroll-three').on('click', function(event) {
		event.preventDefault();
		jQuery('html, body').animate({
			scrollTop: 0
		}, duration);
		return false;
	});
	      var swiper = new Swiper(".mySwiper", {
        loop: true,
        spaceBetween: 10,
        slidesPerView: 4,
        freeMode: true,
        watchSlidesProgress: true,
      });
      var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        spaceBetween: 10,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        thumbs: {
          swiper: swiper,
        },
      });
        /*==========  isotop  ==========*/
		$(window).on('load', function(){ 
			 /*========== Project Grid  ==========*/
			 var $grid = $('.portfolio__page-active').isotope({});
			 /*========== Project Filter  ==========*/
			 $('.portfolio__page-btn').on('click', 'button', function () {
				 var filterValue = $(this).attr('data-filter');
				 $grid.isotope({
					 filter: filterValue
				 });
			 });
			 /*========== Project Active  ==========*/
			 $('.portfolio__page-btn').on('click', 'button', function () {
				 $(this).siblings('.active').removeClass('active');
				 $(this).addClass('active');
			 });
		});
})(jQuery);