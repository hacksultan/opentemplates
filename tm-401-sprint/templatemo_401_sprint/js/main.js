(function (window, $) {
	'use strict';

	// Cache document for fast access.
	var document = window.document;


	function mainSlider() {
		$('.bxslider').bxSlider({
			pagerCustom: '#bx-pager',
			mode: 'fade',
			nextText: '',
			prevText: ''
		});
	}

	mainSlider();



	var $links = $(".bx-wrapper .bx-controls-direction a, #bx-pager a");
	$links.click(function(){
	   $(".slider-caption").removeClass('animated fadeInLeft');
	   $(".slider-caption").addClass('animated fadeInLeft');
	});

	$(".bx-controls").addClass('container');
	$(".bx-next").addClass('fa fa-angle-right');
	$(".bx-prev").addClass('fa fa-angle-left');


	$('a.toggle-menu').click(function(){
        $('.responsive .main-menu').toggle();
        return false;
    });

    $('.responsive .main-menu a').click(function(){
        $('.responsive .main-menu').hide();

    });

    $('.main-menu').singlePageNav();
	
//	var dt = window.atob('fCBEZXNpZ246IDxhIHJlbD0ibm9mb2xsb3ciIGhyZWY9Imh0dHA6Ly93d3cudGVtcGxhdGVtby5jb20vdG0tNDAxLXNwcmludCIgdGFyZ2V0PSJfcGFyZW50Ij5TcHJpbnQ8L2E+'); 		// decode the string
//	var div = document.getElementById('copyright');

//	div.innerHTML += dt;


})(window, jQuery);

var map = '';

function initialize() {
    var mapOptions = {
      zoom: 14,
      center: new google.maps.LatLng(37.769725, -122.462154)
    };
    map = new google.maps.Map(document.getElementById('map'),  mapOptions);
}

// load google map
var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
        'callback=initialize';
    document.body.appendChild(script);