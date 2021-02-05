const workshops = [
    {
        title: "\"Learn how to build a computer entirely out of dominoes.\"",
        room: "B111",
        schedule: "10:35 am - 12:00 am",
        status: false,
        description_line1: "\"Learn how to build a computer entirely out of dominoes.\" is a workshop that will teach you how to build a computer using only dominoes!\n At the end of this workshop, we will bring together a team to try to beat the world's greatest computer dominos record!",
        description_line2:   " <br/>" + " There is no requirement so feel free to join us!",
        sponsor_image: "",
        form_link: "https://docs.google.com/forms/d/e/1FAIpQLSflMZzzAB8dfJF6QL7OQckkuiqE9OwDDTEPsFFxOMbSjxYM8g/viewform?usp=sf_link",
    },
    {
        title: "\"Evolve Software to scale on teams\"",
        room: "B109",
        schedule: "9:15 am - 10:25 am",
        status: false,
        description_line1: "A workshop provided by our gold sponsor, Farfetch!",
        description_line2: "You should bring your own computer and have a minimal knowledge in software development.",
        sponsor_image: "res/img/sponsors/farfetch.png",
        form_link: "https://docs.google.com/forms/d/e/1FAIpQLSflMZzzAB8dfJF6QL7OQckkuiqE9OwDDTEPsFFxOMbSjxYM8g/viewform?usp=sf_link",
    },
    {
        title: "\"Design Systems 101: Front-end as a Team Sport\"",
        room: "B110",
        schedule: "9:15 am - 10:25 am",
        status: false,
        description_line1: "This workshop will be given by another gold sponsor, Hostelworld!",
        description_line2: "The prerequisites are the same as for Farfetch workshop, as such it requires your personal computer and being familiar with software development.",
        sponsor_image: "res/img/sponsors/hostel-world.png",
        form_link: "https://docs.google.com/forms/d/e/1FAIpQLSflMZzzAB8dfJF6QL7OQckkuiqE9OwDDTEPsFFxOMbSjxYM8g/viewform?usp=sf_link",
    }
];

$( document ).ready(function() {

    $(".workshops-container article").on('click', function () {

        let id = parseInt($(this).attr("id").split("-")[1]) - 1;

        $("#workshop-modal .workshop-modal-title h3").text(workshops[id].title);
        $("#workshop-modal .ws-insight-detail-room").text(workshops[id].room);
        $("#workshop-modal .ws-insight-detail-schedule").text(workshops[id].schedule);
        $("#workshop-modal .status").removeClass('red-dot').removeClass('green-dot');
        $("#workshop-modal .status").addClass(workshops[id].status ? "green-dot" : "red-dot");
        $("#workshop-modal .ws-insight-detail-status").text(workshops[id].status ? "(Available)" : "(Full)");
        $("#workshop-modal .ws-description-content").text(workshops[id].description_line1).append("<br/>" + workshops[id].description_line2);
        $("#workshop-modal .ws-sponsor").attr("src",(workshops[id].sponsor_image));
        $("#workshop-modal .modal-body button").attr("disabled", (!workshops[id].status));
        $("#workshop-modal .modal-body a").attr("href", workshops[id].form_link);
        $("#workshop-modal .ws-sponsor").css("max-height", id === 1 ? "30px": "35px");
        $("#workshop-modal .modal-footer").css("background-color", id === 1? "rgba(255,255, 255, .9)" : "rgba(255,255, 255, 0.2)");
        if(id === 0)
            $(".modal-footer").hide();
        else
            $(".modal-footer").show();

        $('#workshop-modal').modal('show');
    });

});