/// <reference path="typings/index.d.ts" />
$(function () {
    var controller = new ScrollMagic.Controller();
    $('.js-parallax').each(function (_index, elem) {
        var tl = new TimelineMax();
        // tl.to(elem, 1, { position: 'fixed' });
        // const opts = {
        //     triggerElement: elem,
        //     duration: $(window).height()
        // };
        // new ScrollMagic.Scene(opts)
        //     .setTween(tl)
        //     .addIndicators()
        //     .addTo(controller);
    });
});
