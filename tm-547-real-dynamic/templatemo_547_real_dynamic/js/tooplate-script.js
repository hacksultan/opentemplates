function setParallaxHeight() {
    let parallaxImg = $('.parallax-window');
    let imgHeight = parallaxImg.width() / 3;
    imgHeight = imgHeight < 350 ? 350 : imgHeight;
    parallaxImg.css('min-height', imgHeight + 'px');
}

$(document).ready(function () {
    // Set parallax image height based on width (1800x600 = 3:1)
    setParallaxHeight();
    $(window).resize(setParallaxHeight);
});