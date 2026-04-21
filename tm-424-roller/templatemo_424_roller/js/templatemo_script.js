(function($) {

	"use strict";
	
	// Cache selectors
    var lastId,
    topMenu = $(".menu-holder"),
    topMenuHeight = topMenu.outerHeight()+15,
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
      offsetTop = href === "#" ? 0 : $(href).offset().top-topMenuHeight+1;
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

    $(window).scroll(function(){
       $('.site-header').toggleClass('scrolled', $(this).scrollTop() > 1);
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

/* Functions
-----------------------------------------------------*/
var tmFillStyle = 'rgba(0,0,0,0.6)';
var tmYellowFill = '#ffc601';

function drawMember1Image() {
    // Draw Member 1
    var canvas = document.getElementById("member1_canvas");
    var ctx = canvas.getContext("2d");
    var member1Image = document.getElementById("member1");

    ctx.save();
    // Create a polygon
    ctx.beginPath();
    ctx.moveTo(0,50);
    ctx.lineTo(114,0);
    ctx.lineTo(228,50);
    ctx.lineTo(228,335);
    ctx.lineTo(114,385);
    ctx.lineTo(0,335);    
    ctx.clip(); // Clip to the current path
    ctx.drawImage(member1Image, 0, 0);
    ctx.restore();

    ctx.beginPath();
    ctx.fillStyle = tmYellowFill;
    ctx.moveTo(0, 335);
    ctx.lineTo(114, 385);
    ctx.lineTo(228, 335);
    ctx.lineTo(228, 355);
    ctx.lineTo(114, 405);
    ctx.lineTo(0, 355);
    ctx.fill();

    var canvas_overlay = document.getElementById("member1_canvas_overlay");
    var ctx_overlay = canvas_overlay.getContext("2d");

    ctx_overlay.fillStyle = tmFillStyle;
    ctx_overlay.beginPath();
    ctx_overlay.moveTo(0,50);
    ctx_overlay.lineTo(114,0);
    ctx_overlay.lineTo(228,50);
    ctx_overlay.lineTo(228,335);
    ctx_overlay.lineTo(114,385);
    ctx_overlay.lineTo(0,335);
    ctx_overlay.fill();        
}

function drawMember2Image() {
    var member2Image = document.getElementById("member2");
    // Draw Member 2
    var canvas2 = document.getElementById("member2_canvas");
    var ctx2 = canvas2.getContext("2d");

    ctx2.save();
    // Create a polygon
    ctx2.beginPath();
    ctx2.moveTo(0,50);
    ctx2.lineTo(114,0);
    ctx2.lineTo(228,50);
    ctx2.lineTo(228,335);
    ctx2.lineTo(114,385);
    ctx2.lineTo(0,335);      
    ctx2.clip(); // Clip to the current path
    ctx2.drawImage(member2Image, 0, 0);

    ctx2.restore();
    ctx2.beginPath();
    ctx2.fillStyle = tmYellowFill;
    ctx2.moveTo(0, 335);
    ctx2.lineTo(114, 385);
    ctx2.lineTo(228, 335);
    ctx2.lineTo(228, 355);
    ctx2.lineTo(114, 405);
    ctx2.lineTo(0, 355);
    ctx2.fill();

    var canvas_overlay2 = document.getElementById("member2_canvas_overlay");
    var ctx_overlay2 = canvas_overlay2.getContext("2d");

    ctx_overlay2.fillStyle = tmFillStyle;
    ctx_overlay2.beginPath();
    ctx_overlay2.moveTo(0,50);
    ctx_overlay2.lineTo(114,0);
    ctx_overlay2.lineTo(228,50);
    ctx_overlay2.lineTo(228,335);
    ctx_overlay2.lineTo(114,385);
    ctx_overlay2.lineTo(0,335);
    ctx_overlay2.fill();
}

function drawMember3Image() {
    var member3Image = document.getElementById("member3");
    // Draw Member 3
    var canvas3 = document.getElementById("member3_canvas");
    var ctx3 = canvas3.getContext("2d");

    ctx3.save();
    // Create a polygon
    ctx3.beginPath();
    ctx3.moveTo(0,50);
    ctx3.lineTo(114,0);
    ctx3.lineTo(228,50);
    ctx3.lineTo(228,335);
    ctx3.lineTo(114,385);
    ctx3.lineTo(0,335);      
    ctx3.clip(); // Clip to the current path
    ctx3.drawImage(member3Image, 0, 0);

    ctx3.restore();
    ctx3.beginPath();
    ctx3.fillStyle = tmYellowFill;
    ctx3.moveTo(0, 335);
    ctx3.lineTo(114, 385);
    ctx3.lineTo(228, 335);
    ctx3.lineTo(228, 355);
    ctx3.lineTo(114, 405);
    ctx3.lineTo(0, 355);
    ctx3.fill();

    var canvas_overlay3 = document.getElementById("member3_canvas_overlay");
    var ctx_overlay3 = canvas_overlay3.getContext("2d");

    ctx_overlay3.fillStyle = tmFillStyle;
    ctx_overlay3.beginPath();
    ctx_overlay3.moveTo(0,50);
    ctx_overlay3.lineTo(114,0);
    ctx_overlay3.lineTo(228,50);
    ctx_overlay3.lineTo(228,335);
    ctx_overlay3.lineTo(114,385);
    ctx_overlay3.lineTo(0,335);
    ctx_overlay3.fill();
}

function setupAboutSection(){

    /* http://www.chrislinford.co.uk/get-going-guides/HTML5/drawatriangleont.html
       http://stackoverflow.com/questions/2551411/can-you-have-multiple-clipping-regions-in-an-html-canvas
       http://stackoverflow.com/questions/3588102/jquery-load-not-working-on-my-image
    ---------------------------------------------------------------------------------------------------------*/
    $("#member1").one('load', function() {
      drawMember1Image(); 
    }).each(function() {
      if(this.complete) $(this).load();
    });

    $("#member2").one('load', function() {
      drawMember2Image(); 
    }).each(function() {
      if(this.complete) $(this).load();
    });

    $("#member3").one('load', function() {
      drawMember3Image(); 
    }).each(function() {
      if(this.complete) $(this).load();
    });
}

function setupPricingSection() {
    
    // http://stackoverflow.com/questions/3318565/any-way-to-clone-html5-canvas-element-with-its-content

    var canvas1 = document.getElementById("canvas1");
    if(canvas1.getContext)
    {
        var ctx = canvas1.getContext("2d");
        // Draw triangle
        ctx.fillStyle="#ffc601";
        ctx.shadowColor = "rgba(0,0,0,0.3)";
        ctx.shadowBlur = 7;
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(260,0);
        ctx.lineTo(130,75);
        ctx.closePath();
        ctx.fill();
    }

    var canvas3 = document.getElementById("canvas3");
    if(canvas3.getContext)
    {
        var ctx = canvas3.getContext("2d");
        ctx.drawImage(canvas1, 0, 0);
    }

    var canvas2 = document.getElementById("canvas2");
    if(canvas2.getContext)
    {
        var ctx = canvas2.getContext("2d");
        // Draw triangle
        ctx.fillStyle="#ffc601";
        ctx.shadowColor = "rgba(0,0,0,0.3)";
        ctx.shadowBlur = 7;
        ctx.shadowOffsetX = 3;
        ctx.shadowOffsetY = 3;
        ctx.beginPath();
        ctx.moveTo(0,0);
        ctx.lineTo(300,0);
        ctx.lineTo(150,75);
        ctx.closePath();
        ctx.fill();
    }
}

function setupPortfolioSection() {

    $('.tm-show-hide').hide();

    $('.tm-view-more').click(function(){
        if($(this).text().toLowerCase() == "view more") {
            $(this).text("View Less");
            $('.tm-show-hide').show();
        }
        else {
            $(this).text("View More");
            $('.tm-show-hide').hide();
        }
    });
}

function setupTestimonialsSection() {
    $('.tm-comment').text($('#author3').attr('data-comment'));
    $('.tm-author').text($('#author3').attr('data-author'));

    $('.tm-img-circle-border').click(function(){

        $('.tm-img-circle-border').removeClass('active');
        
        $('.tm-comment').text($(this).attr('data-comment'));
        $('.tm-author').text($(this).attr('data-author'));
        
        $(this).addClass('active');
    });
}

/* Google map
------------------------------------------------*/
var map = '';
var center;

function initialize() {
    var mapOptions = {
      zoom: 15,
      center: new google.maps.LatLng(40.7828839,-73.9652425)
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

function setupContactSection() {
    loadGoogleMap();
    // Make sure map's height is the same as form height in all browsers
    $('#map-canvas').height($('.tm-contact-form').height());    
}

/* HTML document is ready.
----------------------------------*/
$(function(){   
    setupAboutSection();
    setupPricingSection();
    setupPortfolioSection();
    setupTestimonialsSection();
    setupContactSection();
});