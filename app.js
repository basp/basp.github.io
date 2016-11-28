$(function () {
    const command = m.prop('');

    command('foo');

    const Debug = {
        controller: function () {
            return {
                command: command()
            };
        },

        view: function (ctrl) {
            // return m('pre', ctrl.command);
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
        }
    };

    const App {

    }

    const app = document.getElementById('app');
    m.mount(app, Prompt);
});