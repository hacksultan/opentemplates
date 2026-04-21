/* Credit: http://www.templatemo.com */

jQuery(document).ready(function()
{
    //mobile menu show hide
    jQuery("header #mobile_menu_list ul").hide();
    jQuery("#mobile_menu").click(function(){
        jQuery("header #mobile_menu_list ul").slideToggle();
        return false;
    });
    jQuery("header #mobile_menu_list ul li a").click(function(){
        jQuery("header #mobile_menu_list ul").slideUp();
    });
    //single page nav
    jQuery("header ul").singlePageNav({offset: jQuery('header').outerHeight()});
    //open scroll function
    jQuery("html, body").animate({ scrollTop: 50 }, 0, function(){
        jQuery(this).animate({ scrollTop: 0 },1000);
    });
    //call flex slider function
    jQuery('#main-slider').flexslider();
    //scroll to top
    jQuery(window).scroll(function(){
        if(jQuery(this).scrollTop() > 100){
            jQuery('.scrollup').fadeIn();
        } else {
            jQuery('.scrollup').fadeOut();
        }
    });
    jQuery('.scrollup').click(function(){
        jQuery("html, body").animate({ scrollTop: 0 }, 1000);
        return false;
    });
    //lightbox
    jQuery('a.overlay').lightbox(); 
    //google map
    function initialize() {
        //define map
        var map;
        //Lat lng
        myLatlng = new google.maps.LatLng(16.795, 96.165)
        //define style
        var styles = [
            {
                //set all color
                featureType: "all",
                stylers: [{ 
                    hue: "#9e2630",
                    saturation: -100 ,
                    lightnsess: -100 
                }]
            }
        ];
        //map options
        var mapOptions = {
            zoom: 15,
            center: myLatlng ,
            mapTypeControlOptions: {mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']} ,
            panControl: false , //hide panControl
            zoomControl: false , //hide zoomControl
            mapTypeControl: false , //hide mapTypeControl
            scaleControl: false , //hide scaleControl
            streetViewControl: false , //hide streetViewControl
            overviewMapControl: false , //hide overviewMapControl
        }
        //adding attribute value
        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
        var styledMap = new google.maps.StyledMapType(styles,{name: "Styled Map"});
        map.mapTypes.set('map_style', styledMap);
        map.setMapTypeId('map_style');
        //add marker
        var marker = new google.maps.Marker({
            position: myLatlng,
            map: map,
            title: 'Hello Myanmar!'
        });
    }
    google.maps.event.addDomListener(window, 'load', initialize);
});