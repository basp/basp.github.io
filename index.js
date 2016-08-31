/// <reference path="typings/index.d.ts" />
$(function () {
    $('.js-popup').on('click', function (e) {
        var $this = $(this), popupWidth = $this.data().popupWidth;
        $this.toggleClass('is-maximized');
        $this.width(popupWidth);
        $this.find('.c-popup__icon').removeClass('is-shown');
        $('.js-popup-overlay').toggleClass('is-shown');
    });
    $('.js-popup-overlay').on('click', function (e) {
        var $this = $(this);
        $this.removeClass('is-shown');
        $('.js-popup').removeClass('is-maximized');
        $('.js-popup').each(function (index, elem) {
            var $elem = $(elem), width = $elem.data().width;
            $elem.width(width);
        });
    });
});
