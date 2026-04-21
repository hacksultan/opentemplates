/* IE detection (http://stackoverflow.com/questions/19999388/jquery-check-if-user-is-using-ie)
---------------------------------------------------------------------------------------------- */
function isIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");

    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {
    	return true;
    }
    else {
        return false;
    }
   return false;
}

/* Google Map 
---------------------------- */
var map = '';
var mapLoaded = false;

function initialize() {
    var mapOptions = {
      zoom: 15,
      center: new google.maps.LatLng(13.758468,100.567481)
    };
    map = new google.maps.Map(document.getElementById('map'),  mapOptions);
}

/* Full page height 
---------------------------- */
var footerChangeBreakpoint = 768;
var footerHTML = '<div id="footer" class="row"><p class="col-md-6 col-sm-6 col-xs-8 col-xxs-12">' +
				'Copyright © 2084 Your Company Name' + 
				'</p><div class="social col-md-6 col-sm-6 col-xs-4 col-xxs-12"><a href=""><i class="fa fa-facebook no-bg"></i></a><a href=""><i class="fa fa-twitter no-bg"></i></a><a href=""><i class="fa fa-youtube no-bg"></i></a><a href=""><i class="fa fa-linkedin no-bg"></i></a><a href=""><i class="fa fa-rss no-bg"></i></a></div></div>';

function setPageHeight(){

	var pageHeight = $('.main-container').height() - $('.templatemo-header').outerHeight();	

	if($(window).width() >= footerChangeBreakpoint) {
		pageHeight -= $('#footer').height();
	}

	$('.page').css("height", pageHeight + "px");
}

/* Inject footer 
---------------------------- */
function setFooter(){
	if(currentPageNo != 1) {
		
		if($(window).width() >= footerChangeBreakpoint) {
			if( $('.page-container > #footer').length > 0 ) {
				$('.page-container > #footer').remove();
			}
			if( $('.main-container > #footer').length == 0 ) {
				$('.main-container').append(footerHTML);
				$('.main-container > #footer').addClass('absolute-pos');
			}			
		}
		else {
			if( $('.main-container > #footer').length > 0 ) {
				$('.main-container > #footer').remove();
			}
			if( $('.page-container > #footer').length == 0 ) {
				$('.page-container').append(footerHTML);
				$('.main-container > #footer').removeClass('absolute-pos');
			}
		}
	}
	else {
		$('#footer').remove();
	}
}

/* Change page
---------------------------- */
var currentPageNo = 1;

function changePage(event) {
	var nextPageNo = event.target.id.substr(4, 1);
	if( nextPageNo == currentPageNo ) {
	 	return;
	}

	if($(event.target).hasClass('external')) {
		window.location.href = $(event.target).attr('href');
		return;
	}

	$currentPage = $('#page' + currentPageNo);
	$nextPage = $('#page' + nextPageNo);

	if(nextPageNo != 1) {
		if( !(api.supersized.vars.is_paused) ){
		  api.playToggle();
		}
		
		if(nextPageNo == 5) {
			if(!mapLoaded) {
				// load google map
				var script = document.createElement('script');
			    script.type = 'text/javascript';
			    script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&' +
			        'callback=initialize';
			    document.body.appendChild(script);
			    mapLoaded = true;
			}
		}
	}

	$nextPage.fadeIn(400);
	$currentPage.fadeOut(400);

	$('#page'+ currentPageNo + '_link').removeClass('active');
	$('#page'+ nextPageNo + '_link').addClass('active');
	$('#page'+ currentPageNo + '_link_m').removeClass('active');
	$('#page'+ nextPageNo + '_link_m').addClass('active');

	currentPageNo = nextPageNo;
	$( window ).resize();
}

/* Init 
----------------------------- */
$(function () {

	setPageHeight();
	$( window ).resize(setFooter);
	$( window ).resize(setPageHeight);
	
	//mobile menu and desktop menu
	$('nav li').click( changePage );
	$('#mobile_menu li').click( changePage );
    hide_left = $(document).width();
    $("#mobile_menu").css({left: hide_left});
    $("#mobile_menu").hide();
    $("#templatemo_mobile_menu_wap").click(function(){
        if($('#mobile_menu').is(':visible')) {
            hide_left = $(document).width();
            $("#mobile_menu").animate({left: hide_left},1000,function(){
                $("#mobile_menu").hide();
            });
        }else{
            $("#mobile_menu").show();
            show_left = $(document).width() - 250 ;
            $("#mobile_menu").animate({left: show_left},1000);
        }
        return false;
    });

	$('.page').fadeOut(0);
	$('#page1').fadeIn(0);

	if(isIE()){
		$('.about-container img').addClass('ie'); // To fix responsive height problem in IE
	}
});