(function($) {

	"use strict";	



    $('.main-navigation a').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });


    $('.go-top').click(function(){
      $('html, body').animate({scrollTop : 0},800);
      return false;
    });


    $(".owl-carousel").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items: 2,
      navigation: true,
      pagination: false,
      navigationText: ["",""],
      itemsDesktop : [1000,2], //5 items between 1000px and 901px
      itemsDesktopSmall : [900,2], // betweem 900px and 601px
      itemsTablet: [600,1], //2 items between 600 and 0
  });

    $('.toggle-menu').click(function(){
        $('.main-navigation ul').stop(true,true).slideToggle();
    });

    $(window).on('resize', function(){
        var win = $(this); //this = window
        if (win.width() >= 769) { 
            $('.main-navigation ul').css( "display", "block" );
        }
        if (win.width() <= 768) { 
            $('.main-navigation ul').css( "display", "none" );
        }
  });



})(jQuery);