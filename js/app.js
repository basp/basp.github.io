(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/// <reference path="../../typings/index.d.ts" />
"use strict";
$(() => {
    const controller = new ScrollMagic.Controller();
    $('.js-dim').each((_index, elem) => {
        const $dim = $(elem), data = $dim.data();
        const opts = {
            triggerElement: data.triggerElement ? data.triggerElement : elem,
            triggerHook: data.triggerHook ? data.triggerHook : 0
        };
        new ScrollMagic.Scene(opts)
            .setClassToggle(elem, 'is-dimmed')
            .addTo(controller);
    });
});

},{}],2:[function(require,module,exports){
/// <reference path="../../typings/index.d.ts" />
$(() => {
    // Converts a screenheight (in vh or percentage units) to 
    // a duration (in pixel units)
    function screenHeightToDuration(screenHeight) {
        return (screenHeight / 100) * $(window).height();
    }
    const controller = new ScrollMagic.Controller();
    $('.js-fade').each((_index, elem) => {
        const tl = new TimelineMax();
        const $fade = $(elem), data = $fade.data();
        const duration = screenHeightToDuration(data.duration);
        const opts = { duration: duration };
        tl.to(elem, 1, { opacity: 0.0, display: 'none' });
        new ScrollMagic.Scene(opts)
            .setTween(tl)
            .addTo(controller);
    });
});

},{}],3:[function(require,module,exports){
/// <reference path="../../typings/index.d.ts" />
require('./pin');
require('./popup');
require('./quote');
require('./text');
require('./fade');
require('./dim');
require('./parallax');
require('./preloader');

},{"./dim":1,"./fade":2,"./parallax":4,"./pin":5,"./popup":6,"./preloader":7,"./quote":8,"./text":9}],4:[function(require,module,exports){
/// <reference path="../../typings/index.d.ts" />
"use strict";
$(function () {
    const controller = new ScrollMagic.Controller();
    const $window = $(window);
    const screen = {
        height: $window.height(),
        width: $window.width()
    };
    $('.js-parallax').each((_index, elem) => {
        const $elem = $(elem), data = $elem.data() || {};
        const layer = data.layer || 2;
        const top = $elem.position().top;
        const height = $elem.height();
        const mid = top + height / 2;
        const tl = new TimelineMax();
        tl.set(elem, {
            position: 'fixed',
            top: screen.height
        });
        const toVars = {
            top: -$elem.height(),
            ease: Linear.easeNone
        };
        tl.to(elem, 1, toVars);
        const s = Math.pow(2, layer);
        const opts = {
            triggerElement: document.body,
            triggerHook: 0.5,
            offset: mid - screen.height * s,
            duration: screen.height * (s * 2)
        };
        new ScrollMagic.Scene(opts)
            .addIndicators()
            .setTween(tl)
            .addTo(controller);
    });
});

},{}],5:[function(require,module,exports){
/// <reference path="../../typings/index.d.ts" />
$(() => {
    // Converts a screenheight (in vh or percentage units) to 
    // a duration (in pixel units)
    function screenHeightToDuration(screenHeight) {
        return (screenHeight / 100) * $(window).height();
    }
    function getDuration($section, data) {
        if (data.duration) {
            return screenHeightToDuration(data.duration);
        }
        if ($section) {
            return $section.height();
        }
        return 0;
    }
    const controller = new ScrollMagic.Controller();
    controller.scrollTo(function (newScrollPos) {
        $('html body').animate({ scrollTop: newScrollPos });
    });
    $('.js-pin').each((index, elem) => {
        const $pin = $(elem), data = $pin.data();
        const $section = $pin.closest('.js-pin-section');
        const duration = getDuration($section, data);
        const opts = {
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

},{}],6:[function(require,module,exports){
/// <reference path="../../typings/index.d.ts" />
$(() => {
    const controller = new ScrollMagic.Controller();
    const $blind = $('.js-blind');
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
    const speeds = {
        xslow: (text) => text.length / 4,
        slow: (text) => text.length / 8,
        normal: (text) => text.length / 16,
        fast: (text) => text.length / 32,
        xfast: (text) => text.length / 64,
        xxfast: (text) => text.length / 128
    };
    function createStoryTimeline($popup) {
        const $story = $popup.find('.js-popup__story');
        const data = $story.data();
        const speed = data.speed || 'normal';
        const tl = new TimelineMax({ paused: true });
        $story.find('.js-text').each((_index, elem) => {
            const $text = $(elem);
            const text = $text.text().trim();
            const duration = speeds[speed](text);
            tl.from(elem, duration, {
                text: '',
                ease: Linear.easeNone
            });
        });
        return tl;
    }
    function closePopups() {
        hideBlind();
        $('.js-popup.is-maximized').each((_index, elem) => {
            const $popup = $(elem), data = $popup.data();
            const $overlay = $popup.find('.js-popup__overlay');
            const $iframe = $popup.find('iframe');
            const player = $iframe.length > 0 ? new Vimeo.Player($iframe[0]) : false;
            if (player)
                player.pause();
            $overlay.removeClass('is-hidden');
            $popup.width(data.width);
            if (data.left) {
                $popup.css('left', data.left);
            }
            if (data.right) {
                $popup.css('right', data.right);
            }
            $popup.removeClass('is-maximized');
        });
    }
    $blind.on('click', function (e) {
        closePopups();
    });
    $('.js-popup').each((index, elem) => {
        const $popup = $(elem), data = $popup.data();
        const $overlay = $popup.find('.js-popup__overlay');
        const $close = $popup.find('.js-popup__close');
        const story = createStoryTimeline($popup);
        const $iframe = $popup.find('iframe');
        const player = $iframe.length > 0 ? new Vimeo.Player($iframe[0]) : false;
        $overlay.on('click', function (e) {
            showBlind();
            $overlay.addClass('is-hidden');
            $popup.width(data.popupWidth);
            if (data.popupLeft) {
                $popup.css('left', data.popupLeft);
            }
            if (data.popupRight) {
                $popup.css('right', data.popupRight);
            }
            $popup.addClass('is-maximized');
            story.play();
            if (player)
                player.play();
        });
        $close.on('click', function (e) {
            closePopups();
        });
    });
    $('.js-popup__icon').each((_index, elem) => {
        const $icon = $(elem), data = $icon.data() || {};
        const opts = {
            triggerElement: data.triggerElement || elem,
            triggerHook: data.triggerHook || 0,
            offset: data.offset || 0
        };
        new ScrollMagic.Scene(opts)
            .setClassToggle(elem, 'is-visible')
            .addTo(controller);
    });
});

},{}],7:[function(require,module,exports){
/// <reference path="../../typings/index.d.ts" />
$(window).on('load', function () {
    const $preloader = $('.js-preloader');
    $preloader.addClass('is-faded');
    setTimeout(() => {
        $preloader.addClass('is-hidden');
    }, 500);
});

},{}],8:[function(require,module,exports){
/// <reference path="../../typings/index.d.ts" />
$(() => {
    function createQuoteTimeline($quote) {
        const $txt = $quote.find('.js-quote__txt');
        const tl = new TimelineMax();
        $txt.each((index, elem) => {
            const from = { transformOrigin: '100% 50%', scale: 0.4 };
            const to = { scale: 1, y: index * 45, ease: Power2.easeOut };
            tl.fromTo(elem, 1, from, to, '-=0.8');
        });
        return tl;
    }
    const controller = new ScrollMagic.Controller();
    $('.js-quote').each((index, elem) => {
        const $quote = $(elem), data = $quote.data() || {};
        const tl = createQuoteTimeline($quote);
        const opts = {
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

},{}],9:[function(require,module,exports){
/// <reference path="../../typings/index.d.ts" />
$(() => {
    const speeds = {
        xslow: (text) => text.length / 4,
        slow: (text) => text.length / 8,
        normal: (text) => text.length / 16,
        fast: (text) => text.length / 32,
        xfast: (text) => text.length / 64,
        xxfast: (text) => text.length / 128
    };
    const controller = new ScrollMagic.Controller();
    $('.js-story__part').each((_index, elem) => {
        const tl = new TimelineMax();
        const $part = $(elem);
        const data = $part.data();
        const id = $part.attr('id');
        const speed = data && data.speed ? data.speed : 'normal';
        $part.find('.js-text').each((_index, elem) => {
            const $text = $(elem);
            const text = $text.text().trim();
            const duration = speeds[speed](text);
            tl.from(elem, duration, {
                text: '',
                ease: Linear.easeNone
            });
        });
        const $strong = $part.find('.js-text--strong');
        tl.to($strong, 0.5, {
            backgroundSize: '100% 3px, 0% 3px'
        });
        const opts = {
            triggerElement: data && data.triggerElement ? data.triggerElement : elem,
            triggerHook: data && data.triggerHook ? data.triggerHook : 0.5,
            offset: data && data.offset ? data.offset : 0
        };
        new ScrollMagic.Scene(opts)
            .setTween(tl)
            .addTo(controller);
    });
    $('.js-story').find('.js-strike').each((_index, elem) => {
        const tl = new TimelineMax();
        const $strike = $(elem);
        const $strong = $strike.find('.js-text--strong');
        const data = $strike.data();
        const index = data.index;
        // We could parse these from data attributes as well
        // It's sad to see them hard coded like this...
        tl.add([
            TweenMax.to(elem, 2, {
                backgroundSize: '0% 3px, 100% 3px',
                ease: Linear.easeNone
            }),
            TweenMax.to(elem, 1, {
                autoAlpha: 0.4,
                ease: Linear.easeNone
            }),
            TweenMax.to($strong, 1, {
                backgroundSize: '0% 3px, 0% 3px',
                ease: Power2.easeIn
            })
        ]);
        const opts = {
            triggerElement: data && data.triggerElement ? data.triggerElement : undefined,
            triggerHook: data && data.triggerHook ? data.triggerHook : 0.5,
            offset: data && data.offset ? data.offset : 0
        };
        new ScrollMagic.Scene(opts)
            .setTween(tl)
            .addTo(controller);
    });
});

},{}]},{},[3]);
