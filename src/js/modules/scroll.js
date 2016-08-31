define([
    'jquery',
    'ScrollMagic',
    'global',
    'animation-gsap',
    'scrollmagic-debug',
    'TextPlugin'
], function(
    $,
    ScrollMagic,
    global
) {




    var mainController = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onEnter' //'onLeave(0)','onEnter(1)'
        }
    });

    var fadeVideo = new TimelineMax().
        to('.c-video--bg', 1, {
            opacity: 0
        });

    new ScrollMagic.Scene({
            duration: 1000
        })
        .addIndicators({name: "main"})
        .setTween(fadeVideo)
        .addTo(mainController);











    /** -- First draft script: Bas ------------------------------------------------------------------------------------------- **/

    var speeds = {
        fast: function (text) {
            var CHARS_PER_SECOND = 32;
            return text.length / CHARS_PER_SECOND;
        },
        medium: function (text) {
            var CHARS_PER_SECOND = 24;
            return text.length / CHARS_PER_SECOND;
        },
        slow: function (text) {
            var CHARS_PER_SECOND = 8;
            return text.length / CHARS_PER_SECOND;
        }
    };
    function parseEffect(s) {
        var pat = new RegExp('([a-z_]+)@([0-9]+)');
        if (!pat.test(s))
            throw Error("Invalid effect ref: " + s);
        var m = pat.exec(s);
        return [m[1], Number(m[2])];
    }
    function t(container) {

        var tl = new TimelineMax({ paused: true });
        var $container = $(container);
        tl.add('start');

        var $txt = $container.find('.js-t__txt');

        $txt.each(function (i, elem) {
            var txt = $(elem).text();
            tl.add(TweenMax.from(elem, speeds.medium(txt), {
                text: ''
            }));
        });
        tl.add('text');
        var $strong = $container.find('.js-t__txt--strong');
        tl.add(TweenMax.to($strong, 1, {
            backgroundSize: '100% 3px, 0% 3px'
        }), '-=0.5');
        tl.add('strong');
        var $strike = $container.find('.js-t__txt--strike, .js-t-strike');
        tl.add([
            TweenMax.to($strike, 2, {
                backgroundSize: '0% 3px, 100% 3px'
            }),
            TweenMax.to($strike, 1, {
                autoAlpha: 0.4
            })
        ]);
        $strong = $(container).find('.js-t-strike').find('.js-t__txt--strong');
        tl.add(TweenMax.to($strong, 1, {
            backgroundSize: '0% 3px, 0% 3px'
        }), '-=2');
        tl.add('strike');
        return tl;
    }
    function h(container) {
        var $container = $(container);
        var $txt = $container.find('.js-h__txt');
        var tl = new TimelineMax();
        $txt.each(function (i, elem) {
            tl.add(TweenMax.fromTo(elem, 1, {
                transformOrigin: '100% 50%',
                scale: 0.4,
            }, {
                scale: 1,
                y: i * 45,
                ease: Power2.easeOut
            }), '-=0.8');
        });
        return tl;
    }
    var controller = new ScrollMagic.Controller();
    var tFx = {
        txt: ['start', 'text'],
        strong: ['text', 'strong'],
        strike: ['strong', 'strike'],
        stxt: ['start', 'strong']
    };

    var slideTitle = new TimelineMax().
        to('.title', 1, { top: '-100vh' });
    var slideStory = new TimelineMax().
        to('.story', 1, { top: '-100vh' });


    new ScrollMagic.Scene({
        duration: 3000
    }).
        setTween(slideTitle).
        addTo(controller);
    new ScrollMagic.Scene({
        offset: 15000,
        duration: 3000
    }).
        setTween(slideStory).
        addTo(controller);
    $('.js-t').each(function (i, elem) {

        var $elem = $(elem),
            data = $elem.data();
        var fx = data.tFx.split(' ').map(function (x) { return parseEffect(x); });
        var tl = t(elem);

        var _loop_1 = function(effect, offset) {
            new ScrollMagic.Scene({
                offset: offset,
                reverse: true
            }).
                addIndicators({name: "txt"}).
                addTo(controller).
                on('start', function (e) {
                var _a = tFx[effect], from = _a[0], to = _a[1];
                var label = e.scrollDirection === 'FORWARD' ? to : from;
                tl.tweenTo(label);
            });
        };

        for (var _i = 0, fx_1 = fx; _i < fx_1.length; _i++) {
            var _a = fx_1[_i],
                effect = _a[0],
                offset = global.offset(_a[1]);
            _loop_1(effect, offset);
        }
    });
    /* $('js-t .js-t__txt').text(''); */
    $('.js-h').each(function (i, elem) {
        var $elem = $(elem),
            data = $elem.data(),
            offset = global.offset(data.hOffset);
        $elem.css('top', offset);
        var tl = h(elem);
        var dur = $(window).height() / 2;
        new ScrollMagic.Scene({
            offset: offset - 2.15 * dur,
            duration: dur
        }).
            setTween(tl).
            addIndicators({ name: 'quote' }).
            addTo(controller);
    });
    TweenLite.set('.js-plax-container', {
        css: {
            transformOrigin: '50vh 50vw',
            transformPerspective: 300,
            transformStyle: 'preserve-3d'
        }
    });
    var ch = new TimelineMax({ paused: true });
    var cv = new TimelineMax({ paused: true });
    ch.fromTo('.js-plax-container', 0.5, {
        css: {
            rotationY: -0.3
        },
        ease: Linear.easeNone
    }, {
        css: {
            rotationY: 0.3
        },
        ease: Linear.easeNone
    });
    cv.fromTo('.js-plax-container', 0.5, {
        css: {
            rotationX: -0.3
        },
        ease: Linear.easeNone
    }, {
        css: {
            rotationX: 0.3
        },
        ease: Linear.easeNone
    });
    // window.addEventListener('mousemove', function (ev) {
    //     var xpos = ev.x / window.innerWidth;
    //     var ypos = ev.y / window.innerHeight;
    //     if (ev.y >= 0) {
    //         cv.progress(ypos);
    //     }
    //     if (ev.x >= 0) {
    //         ch.progress(xpos);
    //     }
    // });
    $('.js-plax').each(function (index, elem) {
        var dur = $('body').height();
        var $elem = $(elem),
            data = $elem.data();
        var ypos = global.offset(data.y);

        var tween = TweenMax.fromTo($elem, 1, {
            css: {
                y: ypos
            }
        }, {
            css: {
                y: ypos - dur
            }
        });
        console.log(dur);
        new ScrollMagic.Scene({ duration: dur })
            .setTween(tween)
            .addTo(controller);
    });


});
