/* Google map
------------------------------------------------*/
var map = '';
var center;

function initialize() {
  var mapOptions = {
    zoom: 15,
    center: new google.maps.LatLng(13.765468,100.578481),
    scrollwheel: false,
    draggable:false
  };

  map = new google.maps.Map(document.getElementById('GoogleMap'),  mapOptions);

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

/* DOM is ready. */
$(document).ready(function(){                
  loadGoogleMap(); 

  $('a[href*=#]:not([href=#])').click(function()
  {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
      || location.hostname == this.hostname)
    {
      var target = $(this.hash),
      headerHeight = $(".primary-header").height() + 5; // Get fixed header height
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length)
      {
        $('html,body').animate({
          scrollTop: target.offset().top -0
        }, 1500);
        return false;
      }
    }
  });               
});

