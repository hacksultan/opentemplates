function adjustMainBgHeight() {
    var imgWidth = 1200;
    var imgHeight = 620;
    var img = $('.tm-main-bg');
    var currentWidth = img.width();
    var currentHeight = (currentWidth * imgHeight) / imgWidth;
    
    img.css('height', currentHeight);
}

$(document).ready(function(){
    adjustMainBgHeight();
    
    $(window).resize(function() {
        adjustMainBgHeight();
    });
    
    // Mobile menu
    $('.tm-mobile-menu').click(function() {
      $('.tm-nav').toggleClass('show');
    });
    
    if($('.tm-carousel').length) {
      // Carousel
      $('.tm-carousel').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 420,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      });   
    }  
});