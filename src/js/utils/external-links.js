define(
    [
        'jquery'
    ],
    /**
     * Util that makes all external links open in new browser
     */
    function externalLink(
        $j
    ) {
        'use strict';

        function openLinkNewWindow() {

            $j('a').each(function () {
                var a = new RegExp('/' + window.location.host + '/');
                if (!a.test(this.href)) {
                    $j(this).attr('target', '_blank');
                }
            });
        }
       

        /**
         * Initialize the util
         * @function init
         */
        function init() {
            openLinkNewWindow();
        }

        // Initialize the utility
        init();

        // Return the public interface
        return {
           
        };
    }
);
