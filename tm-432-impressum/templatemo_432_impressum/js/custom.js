/*-------------------------------------------------------------------------
 * IPRESSUM - Custom jQuery Scripts
 * ------------------------------------------------------------------------

	1.	Plugins Init
	2.	Site Specific Functions
	3.	Shortcodes
	4.      Other Need Scripts (Plugins config, themes and etc)
	
-------------------------------------------------------------------------*/


jQuery(document).ready(function($){
	
	
/*------------------------------------------------------------------------*/
/*	1.	Plugins Init
/*------------------------------------------------------------------------*/


/*-----------SUPERFISH INIT-------------*/

	function initSuperFish(){
		
		$("ul.sf-menu").superfish({
			 delay:  50,
			 autoArrows: true,
			 animation:   {opacity:'show'}
			 //cssArrows: true
		});
		
		// Replace SuperFish CSS Arrows to Font Awesome Icons
		$('nav > ul.sf-menu > li').each(function(){
			$(this).find('.sf-with-ul').append('<i class="fa fa-angle-down"></i>');
		});
	}
	
	initSuperFish();

/*-----------FLEXSLIDER INIT-------------*/

	function initFlexSlider() {
		
		
		$('.introduction-slider').flexslider({
			animation: "fade",
			controlNav: false,
			directionNav: false,
			start: function(slider){
			$('body').removeClass('loading');
			}
		});
		
		// Set a custom flexslider previous control
		$('.slide-prev').on('click', function(){
			$('.introduction-slider').flexslider('prev')
			return false;
		});
		
		// Set a custom flexslider next control
		$('.slide-next').on('click', function(){
			$('.introduction-slider').flexslider('next')
			return false;
		});
		
		// Testimonials Slide
		$('.testimonials-slider').flexslider({
			animation: "fade",
			controlNav: true,
			directionNav: false,
			start: function(slider){
			$('body').removeClass('loading');
			}
		});

	}
	
	initFlexSlider();

/*-----------SCROLLTO INIT-------------*/
        function initLocalScroll() {
                
		jQuery('ul.main-navigation, ul.mobile-navigation').localScroll({
			offset: -112,
			duration: 1000,
			easing:'easeInOutExpo'
		});


        }
        initLocalScroll();
	
/*-----------PARALLAX INIT-------------*/
	function initParallax() {
		$('#counter').parallax("100%", 0.3);
		$('#partners').parallax("100%", 0.3);
		$('#testimonials').parallax("100%", 0.1);

	}
	initParallax();




/*-----------NICESCROLL INIT-------------*/
 
function niceScrollInit() {
    $("html").niceScroll({
	autohidemode: false,
	cursorcolor: '#e04d47',
	zindex: 9999,
	cursorwidth: 6,
	cursorborder: "0px solid #e04d47",
	background: "#000000",
	scrollspeed: 60,
	mousescrollstep: 40
	});
}

niceScrollInit();
	
/*-----------SUPERFISH INIT-------------*/

	function toolTipInit() {
	
		$('.partner-logo img').tooltip({
			placement: 'bottom'
		});
	}
	
	toolTipInit();
 
/*-----------ISOTOPE INIT-------------*/

	function isotopeInit() {
		var $container = $('#folio-container');
		// init
		$container.isotope({
		// options
		itemSelector: '.folio-item',
		animationOptions: {
				duration: 750,
				easing: 'linear',
				queue: false
			},
		});
		
		
		
		// filter items when filter link is clicked
		jQuery('#filters a').click(function(){
			var selector = $(this).attr('data-filter');
			$container.isotope({ filter: selector });
			return false;
		});
		
		jQuery('#filters li a').click(function(){
			
			jQuery('#filters li').removeClass('current');
			jQuery(this).parent().addClass('current');
		});
	}
	
	isotopeInit();
	

	// Portfolio window
		/*jQuery('.folio-desc a').click(function() {
			var target_portfolio = jQuery(this).attr('href');
			$.ajax({
				url: target_portfolio,
				success: function(data) {
					jQuery("#folio-content").html(data);
					jQuery('#load-folio').fadeIn(400);
					var top_window = jQuery(document).scrollTop() + 20;
					jQuery('#folio-content').css('top',top_window);
					jQuery('#folio-content').css('display', 'block');			
				}
			});
			return false;
		});
		
		jQuery('.portfolio-close').live('click', function() {
			jQuery('#window').html('');
			jQuery('#bg-fade').css('display','none');
		});*/

/***************** Magnific Popup *********************/

	function initMagnificPopup() {
		
		$('.folio-zoom').magnificPopup({
				type: 'image',
				closeOnContentClick: true,
				closeBtnInside: false,
				fixedContentPos: true,
				mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
				gallery: {
					enabled: true
				},
				image: {
				    verticalFit: true
				},
				zoom: {
				enabled: false,
				duration: 300 // don't foget to change the duration also in CSS
				}
		
		});
	}

	
	initMagnificPopup();

/*------------------------------------------------------------------------*/
/*	2.	Site Specific Functions
/*------------------------------------------------------------------------*/

//$("#header").sticky({ topSpacing: 0 });

//var main_menu = jQuery('#header');
		
		
		
		
		/*jQuery(window).scroll(function() {
			if(jQuery('.is-sticky').length > 0) {
				main_menu.css('height', '80px');
			}
			else {
				main_menu.css('height', '130px');
			}
		});*/

/*-----------SETUP ANIMATIONS-------------*/

$('.animated-item').each(function() {
		var timeDelay = $(this).attr('data-delay');
		$(this).appear(function() {
		var $that = $(this);
		setTimeout(function () {
		$that.addClass('animated');
		}, timeDelay);
		},{accX: 0, accY: -150});

		});


/*-----------COUNTDOWN FOR OUR TEAM-------------*/


	jQuery('.counter-item').appear(function() {
		jQuery('.counter-number').countTo();
		jQuery(this).addClass('funcionando');
		console.log('funcionando');
	});

/*-----------PAGE PRELOADER-------------*/

$(window).load(function() {
	$("#page-preloader").fadeOut(300, function(){
		$(this).remove();	
	});
	
});

function triggerMobileMenu() {
	
	$(".mobile-menu-trigger").click(function(){
		if ($("#mobile-menu").hasClass('hide-nav')) {
			setTimeout(function(){
			$("#mobile-menu").removeClass('hide-nav').addClass('show-nav');
			}, 100);	
		
		}else {
			
			setTimeout(function(){
			$("#mobile-menu").removeClass('show-nav').addClass('hide-nav');
			}, 100);
			
			}
		return false;
	});
	
	$(".mobile-nav .close").click(function(){
		setTimeout(function(){
			$("#mobile-menu").addClass('hide-nav');
		}, 100);
	});
	
}

triggerMobileMenu();

/*-----------SKILL ANIMATION-------------*/
	jQuery('.skillbar').each(function() {
		
		var percent = jQuery(this).attr('data-percent');
		console.log(percent);
		if (jQuery(this).hasClass( "anim" )) {} 
		
			var randomval = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
			jQuery(this).find('.skillbar-bar').animate({'width': percent+'%',}, 2000, 'easeInOutQuart', function(){
				jQuery('.skillbar-percent').delay(randomval).animate({'top':'-28px','opacity':1,'left': percent+'%'}, 500);	
			});
		
	});


	//http://stackoverflow.com/questions/11275491/apply-touch-event-to-every-click-event-with-javascript-jquery
	$(document).bind('touchend', function(e) {
	    $(e.target).trigger('click');
	    e.preventDefault();
	});
	

});
