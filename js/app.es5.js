"use strict";

(function e(t, n, r) {
    function s(o, u) {
        if (!n[o]) {
            if (!t[o]) {
                var a = typeof require == "function" && require;if (!u && a) return a(o, !0);if (i) return i(o, !0);var f = new Error("Cannot find module '" + o + "'");throw f.code = "MODULE_NOT_FOUND", f;
            }var l = n[o] = { exports: {} };t[o][0].call(l.exports, function (e) {
                var n = t[o][1][e];return s(n ? n : e);
            }, l, l.exports, e, t, n, r);
        }return n[o].exports;
    }var i = typeof require == "function" && require;for (var o = 0; o < r.length; o++) {
        s(r[o]);
    }return s;
})({ 1: [function (require, module, exports) {
        /// <reference path="../../typings/index.d.ts" />
        "use strict";

        $(function () {
            var controller = new ScrollMagic.Controller();
            $('.js-dim').each(function (_index, elem) {
                var $dim = $(elem),
                    data = $dim.data();
                var opts = {
                    triggerElement: data.triggerElement ? data.triggerElement : elem,
                    triggerHook: data.triggerHook ? data.triggerHook : 0
                };
                new ScrollMagic.Scene(opts).setClassToggle(elem, 'is-dimmed').addTo(controller);
            });
        });
    }, {}], 2: [function (require, module, exports) {
        /// <reference path="../../typings/index.d.ts" />
        $(function () {
            // Converts a screenheight (in vh or percentage units) to 
            // a duration (in pixel units)
            function screenHeightToDuration(screenHeight) {
                return screenHeight / 100 * $(window).height();
            }
            var controller = new ScrollMagic.Controller();
            $('.js-fade').each(function (_index, elem) {
                var tl = new TimelineMax();
                var $fade = $(elem),
                    data = $fade.data();
                var duration = screenHeightToDuration(data.duration);
                var opts = { duration: duration };
                tl.to(elem, 1, { opacity: 0.0, display: 'none' });
                new ScrollMagic.Scene(opts).setTween(tl).addTo(controller);
            });
        });
    }, {}], 3: [function (require, module, exports) {
        "use strict";

        var VERSION = '0.9.3';
        exports.VERSION = VERSION;
        var NICK = 'konnichiwa';
        exports.NICK = NICK;
    }, {}], 4: [function (require, module, exports) {
        /// <reference path="../../typings/index.d.ts" />
        "use strict";

        var info_1 = require('./info');
        console.log("Running version " + info_1.VERSION + " (" + info_1.NICK + ")");
        require('./pin');
        require('./popup');
        require('./quote');
        require('./text');
        require('./fade');
        require('./dim');
        require('./parallax');
        require('./preloader');
    }, { "./dim": 1, "./fade": 2, "./info": 3, "./parallax": 5, "./pin": 6, "./popup": 7, "./preloader": 8, "./quote": 9, "./text": 10 }], 5: [function (require, module, exports) {
        /// <reference path="../../typings/index.d.ts" />
        "use strict";

        $(function () {
            var controller = new ScrollMagic.Controller();
            var $window = $(window);
            var screen = {
                height: $window.height(),
                width: $window.width()
            };
            $('.js-parallax').each(function (_index, elem) {
                var $elem = $(elem),
                    data = $elem.data() || {};
                var layer = data.layer || 2;
                var top = $elem.position().top;
                var height = $elem.height();
                var mid = top + height / 2;
                var tl = new TimelineMax();
                tl.set(elem, {
                    position: 'fixed',
                    top: screen.height
                });
                var toVars = {
                    top: -$elem.height(),
                    ease: Linear.easeNone
                };
                tl.to(elem, 1, toVars);
                var s = Math.pow(2, layer);
                var opts = {
                    triggerElement: document.body,
                    triggerHook: 0.5,
                    offset: mid - screen.height * s,
                    duration: screen.height * (s * 2)
                };
                new ScrollMagic.Scene(opts).addIndicators().setTween(tl).addTo(controller);
            });
        });
    }, {}], 6: [function (require, module, exports) {
        /// <reference path="../../typings/index.d.ts" />
        $(function () {
            // Converts a screenheight (in vh or percentage units) to 
            // a duration (in pixel units)
            function screenHeightToDuration(screenHeight) {
                return screenHeight / 100 * $(window).height();
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
            var controller = new ScrollMagic.Controller();
            controller.scrollTo(function (newScrollPos) {
                $('html body').animate({ scrollTop: newScrollPos });
            });
            $('.js-pin').each(function (index, elem) {
                var $pin = $(elem),
                    data = $pin.data();
                var $section = $pin.closest('.js-pin-section');
                var duration = getDuration($section, data);
                var opts = {
                    triggerElement: data.triggerElement ? '#' + data.triggerElement : elem,
                    triggerHook: data.triggerHook ? data.triggerHook : 0,
                    offset: data.offset ? data.offset : 0,
                    duration: duration
                };
                new ScrollMagic.Scene(opts).setPin(elem, { pushFollowers: false }).addTo(controller);
            });
        });
    }, {}], 7: [function (require, module, exports) {
        /// <reference path="../../typings/index.d.ts" />
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
                xslow: function xslow(text) {
                    return text.length / 4;
                },
                slow: function slow(text) {
                    return text.length / 8;
                },
                normal: function normal(text) {
                    return text.length / 16;
                },
                fast: function fast(text) {
                    return text.length / 32;
                },
                xfast: function xfast(text) {
                    return text.length / 64;
                },
                xxfast: function xxfast(text) {
                    return text.length / 128;
                }
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
                hideBlind();
                $('.js-popup.is-maximized').each(function (_index, elem) {
                    var $popup = $(elem),
                        data = $popup.data();
                    var $overlay = $popup.find('.js-popup__overlay');
                    var $iframe = $popup.find('iframe');
                    var player = $iframe.length > 0 ? new Vimeo.Player($iframe[0]) : false;
                    if (player) player.pause();
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
            $('.js-popup').each(function (index, elem) {
                var $popup = $(elem),
                    data = $popup.data();
                var $overlay = $popup.find('.js-popup__overlay');
                var $close = $popup.find('.js-popup__close');
                var story = createStoryTimeline($popup);
                var $iframe = $popup.find('iframe');
                var player = $iframe.length > 0 ? new Vimeo.Player($iframe[0]) : false;
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
                    if (player) player.play();
                });
                $close.on('click', function (e) {
                    closePopups();
                });
            });
            $('.js-popup__icon').each(function (_index, elem) {
                var $icon = $(elem),
                    data = $icon.data() || {};
                var opts = {
                    triggerElement: data.triggerElement || elem,
                    triggerHook: data.triggerHook || 0,
                    offset: data.offset || 0
                };
                new ScrollMagic.Scene(opts).setClassToggle(elem, 'is-visible').addTo(controller);
            });
        });
    }, {}], 8: [function (require, module, exports) {
        /// <reference path="../../typings/index.d.ts" />
        $(window).on('load', function () {
            var $preloader = $('.js-preloader');
            $preloader.addClass('is-faded');
            setTimeout(function () {
                $preloader.addClass('is-hidden');
            }, 500);
        });
    }, {}], 9: [function (require, module, exports) {
        /// <reference path="../../typings/index.d.ts" />
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
                var $quote = $(elem),
                    data = $quote.data() || {};
                var tl = createQuoteTimeline($quote);
                var opts = {
                    triggerElement: data.triggerElement ? data.triggerElement : elem,
                    triggerHook: data.triggerHook ? data.triggerHook : 0.5,
                    offset: data.offset ? data.offset : 0,
                    duration: $(window).height() / 2
                };
                new ScrollMagic.Scene(opts).setTween(tl).addTo(controller);
            });
        });
    }, {}], 10: [function (require, module, exports) {
        /// <reference path="../../typings/index.d.ts" />
        $(function () {
            var speeds = {
                xslow: function xslow(text) {
                    return text.length / 4;
                },
                slow: function slow(text) {
                    return text.length / 8;
                },
                normal: function normal(text) {
                    return text.length / 16;
                },
                fast: function fast(text) {
                    return text.length / 32;
                },
                xfast: function xfast(text) {
                    return text.length / 64;
                },
                xxfast: function xxfast(text) {
                    return text.length / 128;
                }
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
                new ScrollMagic.Scene(opts).setTween(tl).addTo(controller);
            });
            $('.js-story').find('.js-strike').each(function (_index, elem) {
                var tl = new TimelineMax();
                var $strike = $(elem);
                var $strong = $strike.find('.js-text--strong');
                var data = $strike.data();
                var index = data.index;
                // We could parse these from data attributes as well
                // It's sad to see them hard coded like this...
                tl.add([TweenMax.to(elem, 2, {
                    backgroundSize: '0% 3px, 100% 3px',
                    ease: Linear.easeNone
                }), TweenMax.to(elem, 1, {
                    autoAlpha: 0.4,
                    ease: Linear.easeNone
                }), TweenMax.to($strong, 1, {
                    backgroundSize: '0% 3px, 0% 3px',
                    ease: Power2.easeIn
                })]);
                var opts = {
                    triggerElement: data && data.triggerElement ? data.triggerElement : undefined,
                    triggerHook: data && data.triggerHook ? data.triggerHook : 0.5,
                    offset: data && data.offset ? data.offset : 0
                };
                new ScrollMagic.Scene(opts).setTween(tl).addTo(controller);
            });
        });
    }, {}] }, {}, [4]);

