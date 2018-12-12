

scrollButton();
function scrollButton() {
    $(".button").click(function () {
        $('html,body').animate({
            scrollTop: $("#howto").offset().top
        }, 'slow');
    });
}

