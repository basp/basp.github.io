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

    /**
     * Set story Controller
     */
    var story = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 0.25
        }
    });

    /**
     * Set story Scene
     */
    var stroyOne = new ScrollMagic.Scene({
            triggerElement: ".js-trigger--story",
            duration: $('#achtergrond').height() - (global.height.window * 0.93)
        })
        .setPin(".js-trigger--story")
        .addIndicators({name: "story"})
        .addTo(story);

    var storyTwo = new ScrollMagic.Scene({
        triggerElement: '#story-2',
        duration: 10000 * 0.93
    })
    .setPin('#story-2')
    .addIndicators({name: 'story two'})
    .addTo(story);

    var storyThree = new ScrollMagic.Scene({
        triggerElement: '#story-3',
        duration: 10000 * 0.93
    })
    .setPin('#story-3')
    .addIndicators({name: 'story three'})
    .addTo(story);
});
