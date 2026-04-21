/**//*================================
		Testimonial Owl Carousel
=================================*/

$("#client-speech").owlCarousel({              
    navigation : true, // Show next and prev buttons
    slideSpeed : 100,
    paginationSpeed : 400,
    navigationText : false,
    singleItem: true,
    autoPlay: true,
    pagination: false
});


/*==========================================
		Isotope Portfolio Item
=============================================*/

var $grid = $('#portfolioItems').isotope({
    // options
    itemSelector: '.element-item',
    layoutMode: 'fitRows'
});

// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});



/*
 * SmoothScroll
*/

smoothScroll.init();
