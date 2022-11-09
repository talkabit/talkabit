$(document).on('click', 'a.nav-link[href^="#"]', function (event) {
    event.preventDefault();

    var navbar_height = ($(window).width() < 992)? 46 : 56;
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - navbar_height
    }, 900);
});