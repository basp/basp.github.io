$(function () {
    const command = m.prop('');

    command('foo');

    const Debug = {
        controller: function () {
        },

        view: function (ctrl) {
            return m('pre', `> ${command()}`);
        }
    }

   const Prompt = {
        controller: function () {
            return {
                exec: function (e) {
                    console.log(e);
                }
            };
        },

        view: function (ctrl) {
            var input = m('input', {
                type: 'text',
                config: function (el) {
                    const $el = $(el);

                    $el.keydown(function (e) {
                        if (e.keyCode === 38) {
                            m.startComputation();
                            e.preventDefault();
                            command('UP');
                            m.endComputation();
                            return false;
                        }

                        if (e.keyCode === 40) {
                            m.startComputation();
                            e.preventDefault();
                            command('DOWN');
                            m.endComputation();
                            return false;
                        }

                        if (e.keyCode === 13) {
                            m.startComputation();
                            e.preventDefault();
                            command('ENTER');
                            m.endComputation();
                            return false;
                        }
                    });
                }
            });

            return input;
        }
    };

    const App = {
        controller: function () {

        },

        view: function (ctrl) {
            return m('div', [
                Debug,
                Prompt
            ]);
        }
    }

   
    const app = document.getElementById('app');
    m.mount(app, App);
});