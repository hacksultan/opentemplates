/*  Shaped
----------------------------------------------*/
function coordinate(x,y) {
  this.x = x;
  this.y = y;
}

var brown = "#6F6024";
var black = "#141414";  
var points = new Array();  
var pointsSmall = new Array();

points.push(new coordinate(0,250)); // 0
points.push(new coordinate(45, 230)); // 1
points.push(new coordinate(45, 175)); // 2
points.push(new coordinate(150, 35)); // 3
points.push(new coordinate(275, 145)); // 4
points.push(new coordinate(275, 225)); // 5
points.push(new coordinate(450, 370)); // 6
points.push(new coordinate(450, 670)); // 7
points.push(new coordinate(410, 700)); // 8
points.push(new coordinate(410, 745)); // 9
points.push(new coordinate(300, 850)); // 10
points.push(new coordinate(170, 780)); // 11
points.push(new coordinate(170, 700)); // 12
points.push(new coordinate(0, 555)); // 13

pointsSmall.push(new coordinate(0,100)); // 0
pointsSmall.push(new coordinate(25,90)); // 1
pointsSmall.push(new coordinate(25,60)); // 2
pointsSmall.push(new coordinate(85,30)); // 3
pointsSmall.push(new coordinate(145,65)); // 4
pointsSmall.push(new coordinate(145,90)); // 5
pointsSmall.push(new coordinate(235,165)); // 6
pointsSmall.push(new coordinate(235,310)); // 7
pointsSmall.push(new coordinate(215,320)); // 8
pointsSmall.push(new coordinate(215,345)); // 9
pointsSmall.push(new coordinate(150,380)); // 10
pointsSmall.push(new coordinate(90,345)); // 11
pointsSmall.push(new coordinate(90,320)); // 12
pointsSmall.push(new coordinate(0,245)); // 13

/* Google map on canvas (https://gist.github.com/strongwave/1294209)
--------------------------------------------------------------------*/
function loadGoogleMap() {
  var google_tile = "http://maps.google.com/maps/api/staticmap?sensor=false&center=13.758468,100.567481&zoom=13&size=230x445&scale=2"
  var canvas = document.getElementById("map-canvas");
  var ctx = canvas.getContext("2d");   
  var imageObj = new Image();
  imageObj.src = google_tile;

  imageObj.onload = function(){
    // Draw Image
    ctx.save();
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);   // point 1

    for(var i = 1; i < points.length; i++) {
      ctx.lineTo(points[i].x, points[i].y);
    }

    ctx.clip(); // Clip to the current path
    ctx.drawImage(imageObj, 0, 0);

    ctx.restore();

    // Draw Borders
    drawPath(ctx, points, 0, 1, brown, true, 30);
    drawPath(ctx, points, 2, 4, brown, true, 30);
    drawPath(ctx, points, 5, 6, brown, true, 30);
    drawPath(ctx, points, 7, 8, black, false, 30);
    drawPath(ctx, points, 9,11, black, false, 30);
    drawPath(ctx, points, 12,13, black, false, 30);
  }  
}

/* Draw irregular shaped images with canvas
--------------------------------------------------------*/
function drawPath(ctx, pointsArray, fromIndex, toIndex, fillColor, toTop, borderWidth) {

  var tempY = 0;
  ctx.beginPath();
  ctx.moveTo(pointsArray[fromIndex].x, pointsArray[fromIndex].y);

  for(var i = fromIndex; i <= toIndex; i++) {

    tempY = pointsArray[i].y;

    // To avoid jagged lines of image
    if(toTop) { tempY += 1; }
    else      { tempY -= 1; }

    ctx.lineTo(pointsArray[i].x, tempY);
  }
  
  for(var i = toIndex; i >= fromIndex; i--) {
    
    tempY = pointsArray[i].y;

    if(toTop) { tempY -= borderWidth; }
    else      { tempY += borderWidth; }

    ctx.lineTo(pointsArray[i].x, tempY);
  }

  ctx.closePath();
  ctx.fillStyle=fillColor;
  ctx.fill();
}

/* Draw Image and borders on canvas
----------------------------------------------------------- */
function drawImage(imageName, canvasSize) {
  console.log("image name is " + imageName);
  var canvas = document.getElementById("canvas_" + imageName);
  var ctx = canvas.getContext("2d");
  var imgHome = document.getElementById("img_" + imageName);
  var currentPoints;
  var borderWidthBig = 30;
  var topBorderWidthSmall = 10;
  var bottomBorderWidthSmall = 110;
  var currentTopBorderWidth = 0;
  var currentBottomBorderWidth = 0;

  if(canvasSize == 'big') {
    currentPoints = points;
    currentTopBorderWidth = 
    currentBottomBorderWidth = borderWidthBig;
  }
  else {
    currentPoints = pointsSmall;
    currentTopBorderWidth = topBorderWidthSmall;
    currentBottomBorderWidth = bottomBorderWidthSmall;
  }

  // Draw Image
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(currentPoints[0].x, currentPoints[0].y);   // point 1

  for(var i = 1; i < currentPoints.length; i++) {
    ctx.lineTo(currentPoints[i].x, currentPoints[i].y);
  }

  ctx.clip(); // Clip to the current path
  ctx.drawImage(imgHome, 0, 0);
  ctx.restore();

  // Draw Borders
  drawPath(ctx, currentPoints, 0, 1, brown, true, currentTopBorderWidth);
  drawPath(ctx, currentPoints, 2, 4, brown, true, currentTopBorderWidth);
  drawPath(ctx, currentPoints, 5, 6, brown, true, currentTopBorderWidth);
  drawPath(ctx, currentPoints, 7, 8, black, false, currentBottomBorderWidth);
  drawPath(ctx, currentPoints, 9,11, black, false, currentBottomBorderWidth);
  drawPath(ctx, currentPoints, 12,13, black, false, currentBottomBorderWidth);
}

var detectViewPortAndSetNav = function() {

    var viewPortWidth = $(window).width();
    var topOffset = 49;

    if(viewPortWidth < 768) {
      topOffset = 0;
    }

    /* Smooth scroll and Scroll spy (https://github.com/ChrisWojcik/single-page-nav)    
    ---------------------------------------------------------------------------------*/    
    $('.templatemo-nav').singlePageNav = null; // http://www.genesx.com/2011/01/remove-jquery-plugins-at-runtime
    $('.templatemo-nav').singlePageNav({
        offset: topOffset,
        filter: ':not(.external)',
        updateHash: false
    });
}

/* HTML document is loaded.
------------------------------------------------*/
$(function() {

  /* Draw Home and About canvases
  --------------------------------*/
  $("#img_home").one('load', function() {
    drawImage("home", 'big'); 
  }).each(function() {
    if(this.complete) $(this).load();
  });

  $("#img_about").one('load', function() {
    drawImage("about", 'big'); 
  }).each(function() {
    if(this.complete) $(this).load();
  });

  /* Draw Services canvases
  -----------------------------------------------------*/
  $( ".img-service" ).each(function( index, el ) {
    // Draw image and border
    $(el).one('load', function() {
      drawImage("service_" + (index+1), 'small'); 
    }).each(function() {
      if(this.complete) $(this).load();
    });

    // Draw overlay
    var canvas = document.getElementById("service_canvas_overlay_" + (index+1));
    var ctx = canvas.getContext("2d");
    
    ctx.beginPath();
    ctx.moveTo(pointsSmall[0].x, pointsSmall[0].y);
    
    for(var i = 1; i < pointsSmall.length; i++) {
      ctx.lineTo(pointsSmall[i].x, pointsSmall[i].y);
    }

    ctx.closePath();
    ctx.fillStyle = "rgba(20,20,20,0.5)";
    ctx.fill();   
  });

  /* Mobile Menu, after clicking a link, close the menu
  -----------------------------------------------------*/
  $('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
  });

  $(window).scroll(function(){
    var fromTop = $(this).scrollTop();

    if(fromTop > 20) {
      $('.templatemo-nav').addClass('sticky');
    }
    else {
      $('.templatemo-nav').removeClass('sticky'); 
    }
  });

  detectViewPortAndSetNav();

  /* Google map
  --------------------------- */
  loadGoogleMap();
});

$(window).resize(function() {
  detectViewPortAndSetNav();
})
