(function (window, $) {
	'use strict';

	// Cache document for fast access.
	var document = window.document;


	$('a.toggle-menu').click(function(){
        $('ul.menu').fadeToggle("slow");
    });


    var owl = $("#owl-demo");
 
		owl.owlCarousel({
	    	items : 6
		});
	 
		// Custom Navigation Events
		$(".next").click(function(){
	    	owl.trigger('owl.next');
		})
		$(".prev").click(function(){
	    	owl.trigger('owl.prev');
		})





})(window, jQuery);




