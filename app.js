$(function () {
    const KeyCode = {
        UP: 38,
        DOWN: 40,
        ENTER: 13
    };

    const command = m.prop('');
    const history = m.prop([]);
 
    const Echo = {
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

        // Mithril will take care of passing along `handlers`
        // via the top level `App` component.
        view: function (ctrl, handlers) {
            return m('input', {
                type: 'text',
                config: function (el, isInitialized) {
                    // We don't want to run this config function
                    // more than once. Mithril will make sure that
                    // the `isInitialized` argument is falsy.
                    if (isInitialized) return;

                    $(el).keydown(function (e) {
                        if (handlers[e.keyCode]) {
                            return handlers[e.keyCode]();
                        }

                        // No handler? No problem!
                        // Just let the event go bubble up.
                        return true;
                    });
                }
            });
        }
    };

    const App = {
        // Note the `handlers` parameter. That is our
        // service layer. That is, the real meat of the
        // app (injected via the main function).
        view: function (ctrl, handlers) {
            return m('div', [
                Echo,
                m(Prompt, handlers)
            ]);
        }
    };

    // We are going to treat every key press as a potentially
    // expensive operation (a promise eventually) so we need to 
    // wrap them accordingly. 
    // 
    // This is just a small factory function to reduce clutter in 
    // the meat of the code.
    const handle = x => {
        event.preventDefault();
        m.startComputation();
        const ret = x();
        m.endComputation();
        return ret;
    };

    // Sadly we can't nicely inline our `KeyCode` 
    // as a key for another literal. Ah well.
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
            let input = event.target['value'];
            event.target['value'] = '';
            command(input);
            history().push(input);
        };
        return handle(h);
    };

    // This is just a small ritual to bootstrap the
    // app. Note that all our functionality is injected
    // via the `handlers` service.
    const app = document.getElementById('app');
    m.mount(app, m(App, handlers));
});