(function($) {

	"use strict";
	
	  // Cache selectors
    var lastId,
    topMenu = $(".menu-holder"),
    topMenuHeight = 45,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      
      if (item.length) { 
         return item; 
      }
    });

    if($(window).width()<=767){
      topMenuHeight = 0;
    }

    // Bind click handler to menu items
	  // so we can get a fancy scroll animation
    menuItems.click(function(e){
      var href = $(this).attr("href");
      var offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
      
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
       
      if (lastId !== id && id != "") {
        lastId = id;
        // Set/remove active class
        menuItems
         .parent().removeClass("active")
         .end().filter("[href=#"+id+"]").parent().addClass("active");
      }

      /* Change navigation header on scroll
      -------------------------------------- */
      if($(window).width() > 767) {
        if ($(this).scrollTop() > 100){
          $('.templatemo-nav-container').addClass("sticky");        
        }
        else {
          $('.templatemo-nav-container').removeClass("sticky");
        }  
      } else {
        $('.templatemo-nav-container').removeClass("sticky");
      }
    });

    //mobile menu and desktop menu
    $("#responsive-menu").css({"right":-1500});
    $("#mobile_menu").click(function(){
        $("#responsive-menu").show();
        $("#responsive-menu").animate({ "right":0 });
        return false;
    });
    $(window).on("load resize", function(){
        if($(window).width()>767){
          $("#responsive-menu").css({"right":-1500});

          if ($(window).scrollTop() > 100){
            $('.templatemo-nav-container').addClass("sticky");        
          }
          else {
            $('.templatemo-nav-container').removeClass("sticky");
          } 
        }
        else {
          $('.templatemo-nav-container').removeClass("sticky");
        }
    });

    $("#responsive-menu a").click(function(){
      $("#responsive-menu").hide();
  });

})(jQuery);

/* Google map
------------------------------------------------*/
var map = '';
var center;

function initialize() {
    var mapOptions = {
      zoom: 16,
      center: new google.maps.LatLng(13.756494, 100.565066),
      scrollwheel: false
    };
  
    map = new google.maps.Map(document.getElementById('map-canvas'),  mapOptions);

    google.maps.event.addDomListener(map, 'idle', function() {
        calculateCenter();
    });
  
    google.maps.event.addDomListener(window, 'resize', function() {
        map.setCenter(center);
    });
}

function calculateCenter() {
  center = map.getCenter();
}

function loadGoogleMap(){
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' + 'callback=initialize';
    document.body.appendChild(script);
}

/* HTML document is loaded 
----------------------------------*/
$(document).ready(function(){

  if($(window).width() > 767) {
    if ($(window).scrollTop() > 100){
      $('.templatemo-nav-container').addClass("sticky");        
    }
    else {
      $('.templatemo-nav-container').removeClass("sticky");
    }    
  }

  /* Map */
  loadGoogleMap();
  // Make sure map's height is the same as form height in all browsers
  $('#map-canvas').height($('.tm-contact-form').height());
});

/* HTML page is fully loaded, including images, frames
-----------------------------------------------------------*/
$(window).load(function() {
  $('.flexslider').flexslider({
    animation: "slide",
    slideshow: false,
    directionNav: false
  });
});