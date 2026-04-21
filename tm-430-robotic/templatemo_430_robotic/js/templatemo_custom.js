"use strict";

jQuery(document).ready(function($){

	/************** Menu Content Opening *********************/


	loadScript();

	/************** Gallery Hover Effect *********************/
	$(".overlay").hide();

	$('.gallery-item').hover(
	  function() {
	    $(this).find('.overlay').fadeIn(800);
	  },
	  function() {
	    $(this).find('.overlay').fadeOut(800);
	  }
	);


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

/********* Map *********** 
	*/
function loadScript() {
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
      'callback=initialize';
  document.body.appendChild(script);
  
  
  <!-- scroll to specific id when click on menu -->
      	 // Cache selectors

	var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+100,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });

// Bind click handler to menu items
// so we can get a fancy scroll animation
menuItems.click(function(e){
  var href = $(this).attr("href"),
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+5;
  $('html, body').stop().animate({ 
      scrollTop: offsetTop
  }, 300);
  e.preventDefault();
});

// Bind to scroll
$(window).scroll(function(){
   // Get container scroll position
   var fromTop = $(this).scrollTop()+topMenuHeight;
   
   // Get id of current scroll item
   var cur = scrollItems.map(function(){
     if ($(this).offset().top < fromTop)
       return this;
   });
   // Get the id of the current element
   cur = cur[cur.length-1];
   var id = cur && cur.length ? cur[0].id : "";
   
   if (lastId !== id) {
       lastId = id;
       // Set/remove active class
       menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
   }                   
});


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
	

/*********** Menu ****************/
