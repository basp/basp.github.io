/// <reference path="typings/index.d.ts" />
$(function () {
    var speeds = {
        xslow: function (text) { return text.length / 4; },
        slow: function (text) { return text.length / 8; },
        normal: function (text) { return text.length / 16; },
        fast: function (text) { return text.length / 32; },
        xfast: function (text) { return text.length / 64; },
    };
    var controller = new ScrollMagic.Controller();
    $('.js-story__part').each(function (_index, elem) {
        var tl = new TimelineMax();
        var $part = $(elem);
        var data = $part.data();
        var id = $part.attr('id');
        var speed = data && data.speed ? data.speed : 'normal';
        $part.find('.js-text').each(function (_index, elem) {
            var $text = $(elem);
            var text = $text.text().trim();
            var duration = speeds[speed](text);
            tl.from(elem, duration, {
                text: '',
                ease: Linear.easeNone
            });
        });
        var $strong = $part.find('.js-text--strong');
        tl.to($strong, 0.5, {
            backgroundSize: '100% 3px, 0% 3px'
        });
        var opts = {
            triggerElement: data && data.triggerElement ? data.triggerElement : elem,
            triggerHook: data && data.triggerHook ? data.triggerHook : 0.5,
            offset: data && data.offset ? data.offset : 0
        };
        new ScrollMagic.Scene(opts)
            .setTween(tl)
            .addTo(controller);
    });
    $('.js-story').find('.js-strike').each(function (_index, elem) {
        var tl = new TimelineMax();
        var $strike = $(elem);
        var data = $strike.data();
        var index = data.index;
        // We could parse these from data attributes as well
        // It's sad to see them hard coded like this...
        tl.to(elem, 2, { backgroundSize: '0% 3px, 100% 3px' });
        tl.to(elem, 1, { autoAlpha: 0.2 });
        var opts = {
            triggerElement: data && data.triggerElement ? data.triggerElement : undefined,
            triggerHook: data && data.triggerHook ? data.triggerHook : 0.5,
            offset: data && data.offset ? data.offset : 0
        };
        new ScrollMagic.Scene(opts)
            .setTween(tl)
            .addTo(controller);
    });
});
