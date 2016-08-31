define([
    'jquery',
    'ScrollMagic',
    'global',
    'scrollmagic-debug',
], function(
    $,
    ScrollMagic,
    global
) {


    var controller = new ScrollMagic.Controller({
            globalSceneOptions: {
                triggerHook: 1
            }
        });


    /**
     * Handles the parallax tween and build scene
     * @method parallaxHandler
     * @param  {Object} Controler for parallax element
     */
    $.fn.parallaxHandler = function(controller){
        this.each(function(i, el){

            var $el = $(el),
                data = $el.data('parallax'),
                topFrom = global.offset(data[0]),
                topTo = global.offset(data[1]),
                $trigger = $('<span style="top:'+topFrom+'px;" data-parallax-trigger="'+i+'"></span>'),
                elementTween = TweenMax.fromTo(el, 1, {top: topFrom},{top: topTo});

            $el.before($trigger);

            new ScrollMagic.Scene({
                triggerElement: '[data-parallax-trigger="'+i+'"]',
                duration: global.height.window
            })
            	.setTween(elementTween)
            	.addIndicators({name: "parallax - " + i}) // add indicators (requires plugin)
            	.addTo(controller);
        });
    };

    $('.js-parallax').parallaxHandler(controller);


});
