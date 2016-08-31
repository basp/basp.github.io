define([
    'jquery',
    'ScrollMagic'
], function(
    $,
    ScrollMagic
) {

    function videos() {
        var el = this,
            $el = $(el);

        function loop() {
            el.pause();
            el.currentTime = 0;
            //Avoid the Promise Error (play 150ms after pause)
            setTimeout(function () {
                el.play();
            }, 150);
        }

        loop();
        var int = setInterval(loop, 10000);
    }

    $('.js-video--tmb').each(videos);

    var controller = new ScrollMagic.Controller();

    $('.c-popup__icon').each(function (index, elem) {
        new ScrollMagic.Scene({
            triggerElement: elem,
            triggerHook: 0.8
        })
        .setClassToggle(elem, 'is-shown')
        .addIndicators({ name: 'show icon' })
        .addTo(controller);
    });

});
