$( document ).ready(function() {

    let n_speakers = $('.speaker-biography-content').length;

    for(let i = 1; i <= n_speakers; i++)
    {
        let showMoreHtml = $('#speaker-biography-content-' + i).html();
        let lessText = showMoreHtml.substr(0, 700);
        if (showMoreHtml.length > 700)
            $("#speaker-biography-content-" + i).html(lessText + " ...").append("<button type=\"button\" class=\"btn btn-dark show-more-content\" id=\"show-more-content-" + i + "\">Show More</button>\n");
        else
            $("#speaker-biography-content-" + i).html(showMoreHtml);

        $("body").on("click", "#show-more-content-" + i, function () {
            $(this).parent('#speaker-biography-content-' + i).html(showMoreHtml).append("<button type=\"button\" class=\"btn btn-dark show-less-content\" id=\"show-less-content-" + i + "\">Show Less</button>");
        });

        $("body").on("click", "#show-less-content-" + i, function () {
            $(this).parent('#speaker-biography-content-' + i).html(lessText + " ...").append("<button type=\"button\" class=\"btn btn-dark show-more-content\" id=\"show-more-content-" + i + "\">Show More</button>");
        });

        $('#speaker-biography-content-' + i).css("display", "inline");
    }
});