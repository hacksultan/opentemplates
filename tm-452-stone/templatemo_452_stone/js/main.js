(function($) {

	"use strict";
	
	$('.flexslider').flexslider({
		animation: "fade",
        direction: "horizontal",
        easing: "swing",
        controlNav: false,
        directionNav: true,
        prevText: "",
        nextText: "",
        start: function(slider){
          $('body').removeClass('loading');
        }
    });



    $('#Grid').mixitup({
        effects: ['fade','grayscale'],
        easing: 'snap',
        transitionSpeed: 800
    });



    $(function(){
        $('[data-rel="lightbox"]').lightbox();
    });


})(jQuery);