/// <reference path="typings/index.d.ts" />
$(function () {
    // Converts a screenheight (in vh or percentage units) to 
    // a duration (in pixel units)
    function screenHeightToDuration(screenHeight) {
        return (screenHeight / 100) * $(window).height();
    }
    var controller = new ScrollMagic.Controller();
    $('.js-fade').each(function (_index, elem) {
        var tl = new TimelineMax();
        var $fade = $(elem), data = $fade.data();
        var duration = screenHeightToDuration(data.duration);
        var opts = { duration: duration };
        tl.to(elem, 1, { opacity: 0.0 });
        new ScrollMagic.Scene(opts)
            .setTween(tl)
            .addTo(controller);
    });
});
