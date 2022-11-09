/*!
 * Start Bootstrap - Agency v3.3.7+1 (http://startbootstrap.com/template-overviews/agency)
 * Copyright 2013-2016 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
! function (t) {
    "use strict";
    t("a.page-scroll").bind("click", function (a) {
        var o = t(this);
        t("html, body").stop().animate({
            scrollTop: t(o.attr("href")).offset().top - 0
        }, 1250, "easeInOutExpo"), a.preventDefault()
    })
}(jQuery);