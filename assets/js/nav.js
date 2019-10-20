(function ($) {
    $(document).ready(function () {
        $(".first").hide();
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 50) {
                    $('.first').fadeIn();
                } else {
                    $('.first').fadeOut();
                }
            });
        });

    });
}(jQuery));