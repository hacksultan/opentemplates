/* Credit: www.templatemo.com */
/*jquery config*/
$(function(){
				
							/*google map config*/
							function initialize() {
									//define map
									var map;
									//Lat lng
									myLatlng = new google.maps.LatLng(40.782710, -73.965310) ;
									//define style
									var styles = [
																{
																		//set all color
																		featureType: "all",
																		stylers: [{ hue: "#c18000" }]
																},
																{
																		//hide business
																		featureType: "poi.business",
																		elementType: "labels",
																		stylers: [{ visibility: "off" }]
																},
																{
																		//define road highway color
																		featureType: "road.highway",
																		stylers: [{ color: "#eb7350" }]
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
											  title: 'Hello World!'
										  });
							}
							google.maps.event.addDomListener(window, 'load', initialize);				



				//declare scroll animate function
				$.fn.anchorAnimate = function(settings) {
						settings = jQuery.extend({
								speed : 1100
						}, settings);	
						return this.each(function(){
								var caller = this
								$(caller).click(function (event) {	
										event.preventDefault();
										var elementClick = $(caller).attr("href") ;
										var destination = ( $(elementClick).index() * 415 ) ;
										$("#mid_container_wap:not(:animated)").animate({ scrollTop: destination}, settings.speed);
										return false;
								});
						})
				}
				//call scroll animate function
				$("a.anchor_animate").anchorAnimate();
				
				// create responsive function
				$.fn.avocadoAllignment = function(){
						setHeight = $(window).height() ;
						if(setHeight>(395 + 140)){
								$("#banner img").css( "marginTop" , (((setHeight-395) / 2) - 70 ) /  2 );
								$("#banner form").css( "marginTop" , (((setHeight-395) / 2)- 10 ) /  2 );
								$("#footer > div").css( "marginTop" , (((setHeight-395) / 2)- 25 ) /  2 );
								$("#banner").height( (setHeight-395) / 2 );
								$("#footer").height( (setHeight-395-140) / 2 );
						}else{
								$("#footer").height( 25 );
								$("#banner").height( 70 );
								$("#banner img").css( "marginTop" ,  0  );
								$("#banner form").css( "marginTop" ,  30  );
								$("#footer > div").css( "marginTop" , 0 );
						}
				}
				
				//call responsive function on window start
				$(document).avocadoAllignment();
				
				//call responsive function on window resize
				$(window).resize(function(){
						$(document).avocadoAllignment();
				});
				
});


