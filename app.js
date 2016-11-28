var input = $('.js-input');

input.keypress(function (e) {
    if (e.keyCode === 38) {
        e.target['value'] = 'frotz';
        e.target.focus();
    }
});