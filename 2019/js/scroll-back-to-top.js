$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#scroll-to-top-button').fadeIn(200);    // Fade in the arrow
    } else {
        $('#scroll-to-top-button').fadeOut(200);   // Else fade out the arrow
    }
});
$('#scroll-to-top-button').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});