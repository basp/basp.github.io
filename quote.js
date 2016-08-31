/// <reference path="typings/index.d.ts" />
$(function () {
    function createQuoteTimeline($quote) {
        var $txt = $quote.find('.js-quote__txt');
        var tl = new TimelineMax();
        $txt.each(function (index, elem) {
            var from = { transformOrigin: '100% 50%', scale: 0.4 };
            var to = { scale: 1, y: index * 45, ease: Power2.easeOut };
            tl.fromTo(elem, 1, from, to, '-=0.8');
        });
        return tl;
    }
    var controller = new ScrollMagic.Controller();
    $('.js-quote').each(function (index, elem) {
        var $quote = $(elem), data = $quote.data() || {};
        var tl = createQuoteTimeline($quote);
        var opts = {
            triggerElement: data.triggerElement ? data.triggerElement : elem,
            triggerHook: data.triggerHook ? data.triggerHook : 0.5,
            offset: data.offset ? data.offset : 0,
            duration: $(window).height() / 2
        };
        new ScrollMagic.Scene(opts)
            .setTween(tl)
            .addTo(controller);
    });
});
