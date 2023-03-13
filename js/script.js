$(function(){
    $('.banner-slider').slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
        dots: true,
        pauseOnHover: false,
    })
    $('.quote-slider').slick({
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: false,
        dots: true,
        pauseOnHover: false,
    });
});
var config = document.querySelector('.workitems');
var mixer = mixitup(config);