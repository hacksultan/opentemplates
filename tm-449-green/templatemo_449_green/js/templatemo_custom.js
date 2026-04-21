"use strict";

jQuery(document).ready(function($){

	loadScript();

	/************** Gallery Hover Effect *********************/
	$(".overlay").hide();

	$('.gallery-item').hover(
	  function() {
	    $(this).find('.overlay').fadeIn(1000);
	  },
	  function() {
	    $(this).find('.overlay').fadeOut(1000);
	  }
	);
	

/******* Popular Tab **********/
	$('#tabs').tabs();

	$('#sign-in').click(function(){    
		$("#tabs").tabs("select", "#tabs-1");        
	});
	
	$('#register').click(function(){    
		$("#tabs").tabs("select", "#tabs-2");        
	});



	/************** LightBox *********************/
	$(function(){
		$('[data-rel="lightbox"]').lightbox();
	});


	$("a.menu-toggle-btn").click(function() {
	  $(".responsive_menu").stop(true,true).slideToggle();
	  return false;
	});
 
    $(".responsive_menu a").click(function(){
		$('.responsive_menu').hide();
	});

});

/**********  ***************/
$(document).ready( function() {

	$('.about-item').hover( function() {
		$(this).find('.img-title').fadeIn(300);
	}, function() {
		$(this).find('.img-title').fadeOut(100);
	});
	
});


/********* Map  ***********/ 
function loadScript() {


  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'callback=initialize';
  document.body.appendChild(script); 
   
}

function initialize() {
    var mapOptions = {
	center: new google.maps.LatLng(40.7828839,-73.9652425),
	zoom: 15,
	scrollwheel: false,
	mapTypeId: google.maps.MapTypeId.ROADMAP
	};
    var map = new google.maps.Map(document.getElementById('templatemo_map'), mapOptions);
}

	    google.maps.event.addDomListener(window, 'load', initialize);
		google.maps.event.addDomListener(window, 'resize', function() 
		{
			map.setCenter(center);
		});
	

 

