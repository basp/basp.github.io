/**
 * Require configuration
 */
define([], function requireConfig() {
    'use strict';

    /**
    * Require configurations
    * @type {Object}
    */
    require.config({
        deps: [],
        // baseUrl: './src/js',
        baseUrl: './src/js',
        paths: { // Reference aliases & Paths
            /**
             * 3rd party scripts
             */
            'jquery':                       '../../bower_components/jquery/dist/jquery',
            'scrollmagic-data':             '../../bower_components/jquery-data-scrollmagic/jquery.data-scrollmagic',
            'ScrollMagic':                  '../../bower_components/scrollmagic/scrollmagic/uncompressed/ScrollMagic',
            'animation-gsap':               '../../bower_components/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap',
            'scrollmagic-debug':            '../../bower_components/scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators',
            'TweenMax':                     '../../bower_components/gsap/src/uncompressed/TweenMax',
            'TimelineMax':                  '../../bower_components/gsap/src/uncompressed/TimelineMax',
            'TweenLite':                    '../../bower_components/gsap/src/uncompressed/TweenLite',
            'cssplugin':                    '../../bower_components/gsap/src/uncompressed/plugins/CSSPlugin',
            'TimelineLite':                 '../../bower_components/gsap/src/uncompressed/TimelineLite',
            'TextPlugin':                   '../../bower_components/gsap/src/uncompressed/plugins/TextPlugin',
            'fancybox':                     '../../bower_components/fancybox/source/jquery.fancybox',

            /**
             * Modules
             */
            'global':                   'modules/global',
            'scroll':                   'modules/scroll',
            'popup':                    'modules/popup',
            'navigation':               'modules/navigation',
            'video':                    'modules/video',
            'parallax':                 'modules/parallax',
            'story':                    'modules/story',

        },
        shim: { // Shim configurations
            ScrollMagic: {
                deps: ['jquery', 'TweenMax'],
                exports: 'ScrollMagic'
            }
        }
    });
});
