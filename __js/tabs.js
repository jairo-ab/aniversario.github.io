(function() {
    $("#toggleAudio").on('click', function () {
        if ($("#video").is(":visible")) {
            $('#video').fadeOut('slow');
        }
        if ($(".player-container").is(":hidden")) {
            $('.player-container').fadeIn('slow');
        }
        $("ul.audiovideo li:eq(1)").removeClass("is-active");
        $("ul.audiovideo li:eq(0)").addClass("is-active");

        $.each($('iframe'), function () {
            //$(this).pause();
            $(this).attr('src', $(this).attr('src'));
        });
    });
    $("#toggleVideo").on('click', function () {
        if ($(".player-container").is(":visible")) {
            $('.player-container').fadeOut('slow');
        }
        if ($("#video").is(":hidden")) {
            $('#video').fadeIn('slow');
        }
        $(this).parent().addClass("selected");

        $("ul.audiovideo li:eq(0)").removeClass("is-active");
        $("ul.audiovideo li:eq(1)").addClass("is-active");

        //$.each($('audio'), function () {
        //    $(this).pause();
        //});
        $('audio')[0].pause();

    });
})();
