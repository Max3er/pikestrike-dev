

scrollButton();
function scrollButton() {
    $(".bt-book").click(function () {
        $('html,body').animate({
            scrollTop: $("#howto").offset().top
        }, 'slow');
    });
}

