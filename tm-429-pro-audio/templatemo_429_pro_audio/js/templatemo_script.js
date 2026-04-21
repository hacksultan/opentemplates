(function($) {

	"use strict";
	
	  // Cache selectors
    var lastId,
    topMenu = $(".menu-holder"),
    topMenuHeight = 50,
    // All list items
    menuItems = topMenu.find("a"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      
      if (item.length) { 
         return item; 
      }
    });

    // Bind click handler to menu items
	  // so we can get a fancy scroll animation
    menuItems.click(function(e){
      var href = $(this).attr("href");
      var offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1; ;
      
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
      if ($(this).scrollTop() > $('.templatemo-header-image').height() - 50){  
        $('.templatemo-header').addClass("sticky");
      }
      else {
        $('.templatemo-header').removeClass("sticky");
      }
   });

    //mobile menu and desktop menu
    $("#responsive-menu").css({"right":-1500});
    $("#mobile_menu").click(function(){
        $("#responsive-menu").show();
        $("#responsive-menu").animate({"right":0});
        return false;
    });
    $(window).on("load resize", function(){
        if($(window).width()>768){
            $("#responsive-menu").css({"right":-1500});
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
      zoom: 15,
      center: new google.maps.LatLng(16.8496189,96.1288854),
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

function scrollToTop() {
    $('html, body').animate({scrollTop : 0},800);
    return false;
}

$(function(){
  /* Album image
  -----------------------------------*/
  $('.templatemo-album').mouseover(function(){
    $('.templatemo-album-img-frame', this).attr('src', 'images/circle_blue.png');
  });
  $('.templatemo-album').mouseout(function(){
    $('.templatemo-album-img-frame', this).attr('src', 'images/circle_gray.png');
  });

  /* Go to top button click handler
  ----------------------------------- */
  $('.tm-go-to-top').click(scrollToTop);
  $('.templatemo-site-name').click(scrollToTop);

    /* Map
  -----------------------------------*/
  loadGoogleMap();
  // Make sure map's height is the same as form height in all browsers
  $('#map-canvas').height($('.tm-contact-form').height());
});