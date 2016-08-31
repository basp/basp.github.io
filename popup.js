/// <reference path="typings/index.d.ts" />
$(function () {
    var controller = new ScrollMagic.Controller();
    var $blind = $('.js-blind');
    function showBlind() {
        $blind.show();
        // Transition doesn't work well when we toggle
        // it immediately after changing the display value
        // so we introduce a tiny delay.
        setTimeout(function () {
            $blind.addClass('is-faded');
        }, 10);
    }
    function hideBlind() {
        $blind.removeClass('is-faded');
        // Here, a delay is introduced to we wait for 
        // the fade transition to finish (which takes 200ms).
        setTimeout(function () {
            $blind.hide();
        }, 200);
    }
    var speeds = {
        xslow: function (text) { return text.length / 4; },
        slow: function (text) { return text.length / 8; },
        normal: function (text) { return text.length / 16; },
        fast: function (text) { return text.length / 32; },
        xfast: function (text) { return text.length / 64; },
    };
    function createStoryTimeline($popup) {
        var $story = $popup.find('.js-popup__story');
        var data = $story.data();
        var speed = data.speed || 'normal';
        var tl = new TimelineMax({ paused: true });
        $story.find('.js-text').each(function (_index, elem) {
            var $text = $(elem);
            var text = $text.text().trim();
            var duration = speeds[speed](text);
            tl.from(elem, duration, {
                text: '',
                ease: Linear.easeNone
            });
        });
        return tl;
    }
    function closePopups() {
        $('.js-popup.is-maximized').each(function (_index, elem) {
            var $popup = $(elem), data = $popup.data();
            var $overlay = $popup.find('.js-popup__overlay');
            hideBlind();
            $overlay.removeClass('is-hidden');
            $popup.width(data.width);
            $popup.removeClass('is-maximized');
        });
    }
    $blind.on('click', function (e) {
        closePopups();
    });
    $('.js-popup').each(function (index, elem) {
        var $popup = $(elem), data = $popup.data();
        var $overlay = $popup.find('.js-popup__overlay');
        var $close = $popup.find('.js-popup__close');
        var tl = createStoryTimeline($popup);
        var $iframe = $popup.find('iframe');
        $overlay.on('click', function (e) {
            showBlind();
            $overlay.addClass('is-hidden');
            $popup.width(data.popupWidth);
            $popup.addClass('is-maximized');
            tl.play();
            if ($iframe.length > 0) {
                var player = new Vimeo.Player($iframe[0]);
                player.play();
            }
        });
        $close.on('click', function (e) {
            closePopups();
        });
    });
    $('.js-popup__icon').each(function (_index, elem) {
        var $icon = $(elem), data = $icon.data() || {};
        var opts = {
            triggerElement: data.triggerElement || elem,
            triggerHook: data.triggerHook || 0,
            offset: data.offset || 0
        };
        new ScrollMagic.Scene(opts)
            .setClassToggle(elem, 'is-visible')
            .addTo(controller);
    });
});
