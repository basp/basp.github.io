/// <reference path="typings/index.d.ts" />
$(function () {
    // Converts a screenheight (in vh or percentage units) to 
    // a duration (in pixel units)
    function screenHeightToDuration(screenHeight) {
        return (screenHeight / 100) * $(window).height();
    }
    function getDuration($section, data) {
        if (data.duration) {
            console.log('data.duration');
            return screenHeightToDuration(data.duration);
        }
        if ($section) {
            return $section.height();
        }
        return 0;
    }
    var controller = new ScrollMagic.Controller();
    controller.scrollTo(function (newScrollPos) {
        $('html body').animate({ scrollTop: newScrollPos });
    });
    $('.js-pin').each(function (index, elem) {
        var $pin = $(elem), data = $pin.data();
        var $section = $pin.closest('.js-pin-section');
        var duration = getDuration($section, data);
        var opts = {
            triggerElement: data.triggerElement ? '#' + data.triggerElement : elem,
            triggerHook: data.triggerHook ? data.triggerHook : 0,
            offset: data.offset ? data.offset : 0,
            duration: duration
        };
        new ScrollMagic.Scene(opts)
            .setPin(elem, { pushFollowers: false })
            .addTo(controller);
    });
});
