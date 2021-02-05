$(document).ready(function() {

    for(let i = 1; i <= 2; i++) $(".schedule-item-button-container-" + i + " button").on("click", () => eventHandler($(this), i));

    function eventHandler(object, id){

        object.closest($(".schedule-item-content-collapse-" + id).hasClass("hide")? () => {object.closest($(".schedule-item-content-collapse-" + id).removeClass("hide")); $(".schedule-item-button-container-" + id +" i").replaceWith("<i class=\"fas fa-arrow-up\"></i>")}
            : () => {object.closest($(".schedule-item-content-collapse-" + id).addClass("hide")); $(".schedule-item-button-container-" + id +" i").replaceWith("<i class=\"fas fa-arrow-down\"></i>")}
        );
    }
});