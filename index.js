/// <reference path="typings/index.d.ts" />
$(function () {
    var speeds = {
        // Funky names are best names!
        snail: function (text) { return text.length / 4; },
        turtle: function (text) { return text.length / 8; },
        human: function (text) { return text.length / 16; },
        rabbit: function (text) { return text.length / 32; },
        cheetah: function (text) { return text.length / 64; },
        // Same speeds using more sensible names
        xslow: function (text) { return text.length / 4; },
        slow: function (text) { return text.length / 8; },
        normal: function (text) { return text.length / 16; },
        fast: function (text) { return text.length / 32; },
        xfast: function (text) { return text.length / 64; },
    };
    // We need to customize the controller for 
    // our parallax setup.
    var controller = new ScrollMagic.Controller({
        // Our parallax is "hijacking" the 
        // usual scroll container so we need to 
        // point ScrollMagic to the right element.
        container: '.parallax',
        // Scroll calculations in combinations with .parallax
        // tend to be very jittery if not using a refresh interval.
        //
        // Toy around with this value and turn on ScrollMagic 
        // indicators see the full effect.
        refreshInterval: 200
    });
    $('.js-tween').each(function (index, elem) {
        var $container = $(elem);
        var data = $container.data();
        var tl = new TimelineMax();
        $container.find('.js-tween__text').each(function (index, elem) {
            var $text = $(elem);
            var data = $text.data();
            var text = $text.text().trim();
            var position = data && data.position ? data.position : false;
            var speed = data && data.speed ? data.speed : 'human';
            var duration = speeds[speed](text);
            tl.from(elem, duration, {
                text: '',
                ease: Linear.easeNone
            }, position);
        });
        // Scene options are not inline for readability.
        var opts = {
            triggerElement: data && data.triggerElement ? data.triggerElement : elem,
            triggerHook: data && data.triggerHook ? data.triggerHook : 0.5,
            offset: data && data.offset ? data.offset : 0,
            reverse: false
        };
        var scene = new ScrollMagic.Scene(opts)
            .setTween(tl)
            .addTo(controller);
    });
});
