$(function () {
    const KeyCode = {
        UP: 38,
        DOWN: 40,
        ENTER: 13
    };

    const command = m.prop('');
    const messages = m.prop([]);

    const Debug = {
        view: function () {
            return m('pre', `> ${command()}`);
        }
    };

    const Prompt = {
        controller: function () {
            return {
                command
            };
        },

        view: function (ctrl, handlers) {
            return m('input', {
                type: 'text',
                config: function (el, isInitialized) {
                    if (isInitialized) return;
                    $(el).keydown(function (e) {
                        if (handlers[e.keyCode]) {
                            return handlers[e.keyCode]();
                        }

                        return true;
                    });
                }
            });
        }
    };

    const App = {
        view: function (ctrl, handlers) {
            return m('div', [
                Debug,
                m(Prompt, handlers)
            ]);
        }
    };

    // We are going to treat every key press as a potentially
    // expensive operation (promise) so we need to wrap them
    // accordingly. This is just a small factory function to
    // reduce clutter in the meat of the code.
    const handle = x => {
        event.preventDefault();
        m.startComputation();
        const ret = x();
        m.endComputation();
        return ret;
    };

    const handlers = {};

    handlers[KeyCode.UP] = () => {
        handle(() => command('UP'));
        return false;
    };

    handlers[KeyCode.DOWN] = () => {
        handle(() => command('DOWN'));
        return false;
    };

    handlers[KeyCode.ENTER] = () => {
        const h = () => {
            command(event.target['value']);
            event.target['value'] = '';
            console.log(`> ${command()}`);
        };

        return handle(h);
    };

    const app = document.getElementById('app');
    m.mount(app, m(App, handlers));
});