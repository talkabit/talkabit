$(document).ready(function() {
    $(".navbar-toggler").on('click', function () {
        $(this).addClass(" animated rubberBand");
        $(this).on('animationend', function() {
            $(this).removeClass("animated rubberBand");
        })
    });
});