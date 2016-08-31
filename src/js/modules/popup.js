define([
    'jquery',
    'fancybox'
], function (
    $
) {



        /**
         * Get element mesures
         * Get element state
         * On click auto height and width
         * X on click close element
         * Position to center
         */



        $.fn.animateAuto = function (prop, speed, callback) {
            var elem,
                height,
                width;

            return this.each(function (i, el) {
                el = $(el),
                    elem = el.clone().css({ "height": "auto", "width": "auto" }).appendTo("body"),
                    height = elem.css("height"),
                    width = elem.css("width");

                elem.remove();

                if (prop === "height")
                    el.animate({ "height": height }, speed, callback);
                else if (prop === "width")
                    el.animate({ "width": width }, speed, callback);
                else if (prop === "both")
                    el.animate({ "width": width, "height": height }, speed, callback);
            });
        };



        $(".t-overlay").on("click", function (e) {

            var $this = $(this),
                state = $this.hasClass('active') ? true : false,
                mesures = { width: $this.width(), height: $this.height() };

            if (state) {

                $this.animate({ "width": 355, "height": 200 }, 100);
                $this.removeClass('active');
            } else {
                console.log($this.animateAuto("both", 100));

                $this.addClass('active');
                console.log('not active');
            }
        });







        var $fancyBox = $('.fancybox'),
            $fancyClose = $('.js-fancybox--close'),
            setings = {
                openEffect: 'elastic',
                closeEffect: 'elastic',
                // openEffect	: 'fade',
                // closeEffect	: 'fade',
                title: false,
                padding: [],
                // scrolling: 'none'
            };


        $fancyBox.fancybox(setings);

        function closeFancyBox() {
            $.fancybox.close();
        }
        
        $fancyClose.on('click', closeFancyBox);


    });
