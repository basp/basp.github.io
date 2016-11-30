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

    const exec = x => {
        console.log(x);
    };

    const Prompt = {
        controller: function () {
            return {
                exec,
                command
            };
        },

        view: function (ctrl) {
            var input = m('input', {
                type: 'text',
                config: function (el, isInitialized) {
                    if (isInitialized) return;

                    const $el = $(el);

                    const handle = x => {
                        event.preventDefault();
                        m.startComputation();
                        const ret = x();
                        m.endComputation();
                        return ret;
                    };

                    $el.keydown(function (e) {
                        switch(e.keyCode)
                        {
                            case 38:
                                handle(() => ctrl.command('UP'));
                                return false;
                            case 40:
                                handle(() => ctrl.command('DOWN'));
                                return false;
                            case 13:
                                const h = () => {
                                    ctrl.command(e.target['value']);
                                    e.target['value'] = '';
                                    ctrl.exec(`exec ${ctrl.command()}`);
                                };
                                return handle(h);
                            default:
                                return true;
                        }
                    });
                },
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