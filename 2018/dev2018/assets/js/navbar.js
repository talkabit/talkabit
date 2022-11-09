$(window).scroll(function(){

    var a = 64;
    var pos = $(window).scrollTop();
    if(pos > a) {
        $(".navbar-header").css({
            background: 'rgba(20, 91, 145, 0.5)'
        });
    }
    else {
        $(".navbar-header").css({
            background: 'none'
        });
    }
});