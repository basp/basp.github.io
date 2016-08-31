define([
    'jquery'
], function (
    $
) {

        var $document = $(document),
            $nav = $('.navbar-nav');

        $document.on("scroll", onScroll);

        function smoothScroll() {
            var $navLink = $nav.find('li a[href^="#"]');
            $navLink.on('click', function (e) {
                e.preventDefault();

                $document.off("scroll");

                $navLink.removeClass('active');

                $(this).addClass('active');

                var $target = $(this.hash);

                $('html, body').stop().animate({
                    'scrollTop': $target.offset().top + 2
                }, 500, 'swing', function () {
                    window.location.hash = target;
                    $document.on("scroll", onScroll);
                });
            });
        }
        smoothScroll();

        function onScroll(event) {
            var scrollPos = $document.scrollTop(),
                $navLink = $nav.find('li a');

            $navLink.each(function () {
                var currLink = $(this);
                var refElement = $(currLink.attr("href"));
                if (!refElement.position()) return;
                if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                    $navLink.removeClass("active");
                    currLink.addClass("active");
                }
                else {
                    currLink.removeClass("active");
                }
            });
        }

    });
