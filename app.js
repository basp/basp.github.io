const StringResource = {
    banner: `You just [object window] to love JavaScript!`,
    help: {
        general: `Try inspecting stuff just by asking for it. Anything that returns something is a result! You could start by asking about Prompt, Output and Message and hopefully pickup some leads along the way. Good luck and have fun!`,
        Message: `This represents what used to be called a line of output in the old days. Nowaways we'll just use this fancy thing.`,
        Prompt: `This is your basic prompt, you can type stuff into it, press the big key (that's enter or return) and hope for interesting results. Experiment!`,
        Output: `This thing is responsible for showing the output after you execute something using the Prompt.`
    }
};

// Poor man's VM stand-in. This will surely end up in
// its own file(s) at some point but for now it will do.
function exec(inp) {
    var out;
    try {
        const ret = eval(inp);
        if (!ret) {
            return `After evaluation of the input we got a falsy result.`;
        }
        if (ret.meta) {
            return JSON.stringify(ret.meta());
        }
        if (typeof ret === 'function') {
            return `This seems to be something that you can invoke, try typing "${inp}()".`;
        }
        return JSON.stringify(ret);
    }
    catch (ex) {
        return ex.toString();
    }
}

const KeyCode = {
    UP: 38,
    DOWN: 40,
    ENTER: 13
};

const command = m.prop('');
const history = m.prop([]);
const output = m.prop(StringResource.banner);

const Message = {
    meta: () => StringResource.help.Message,

    view: function (ctrl, args) {
        const attrs = {
            config: function () {
                console.log(`CONFIG ${args}`);
            }
        };

        return m('div', attrs, [
            m('span', args.direction),
            m('span', args.message)
        ]);
    }
}

const Output = {
    meta: () => StringResource.help.Output,

    view: function () {
        console.log(output());
        return m('div', { class: 'c-output' }, output());
    }
};

const Prompt = {
    meta: () => StringResource.help.Prompt,

    // Mithril will take care of passing along `handlers`
    // via the top level `App` component.
    view: function (ctrl, handlers) {
        const attrs = {
            type: 'text',
            config: function (element, isInitialized) {
                // We don't want to run this config function
                // more than once. Mithril will make sure that
                // the `isInitialized` argument is falsy.
                if (isInitialized) return;

                $(element).keydown(function (e) {
                    if (handlers[e.keyCode]) {
                        return handlers[e.keyCode]();
                    }

                    // No handler? No problem!
                    // Just let the event go bubble up.
                    return true;
                });
            }
        };

        return m('div', [
            m('input', attrs)
        ]);
    }
};

const App = {
    meta: () => StringResource.help.general,

    // Note the `handlers` parameter. That is our
    // service layer. That is, the real meat of the
    // app (injected via the main function).
    view: function (ctrl, handlers) {
        return m('div', [
            m(Prompt, handlers),
            Output
        ]);
    }
};

// We are going to treat every key press as a potentially
// expensive operation (a promise eventually) so we need to 
// wrap them accordingly. This is just a small factory 
// function to reduce clutter in the meat of the code.
const handle = x => {
    m.startComputation();
    const ret = x();
    if (!ret) {
        // Handler does not want us to bubble.
        event.preventDefault();
    }
    m.endComputation();
    return ret;
};

// Sadly we can't nicely inline our `KeyCode` 
// as a key for another literal. Ah well...
const handlers = {};

handlers[KeyCode.UP] = () => {
    return handle(() => command('UP'));
};

handlers[KeyCode.DOWN] = () => {
    return handle(() => command('DOWN'));
};

handlers[KeyCode.ENTER] = () => {
    const inp = event.target['value'];
    const h = () => {
        const msg = {
            direction: 'IN',
            message: inp
        };
        const outp = exec(inp);
        history().push(msg);
        command(inp);
        output(outp);
        event.target['value'] = '';
        return false;
    };
    return handle(h);
};

const Help = () => StringResource.help.general;
Help.meta = () => `This is the help function. Try invoking with help().`;
   
$(function () {
    // Hook up our whole `meta` thing to a global `help`
    // function so we can provide some guidance to the user
    // if he or she types "help" or "help()".
    window.help = Help;

    // This is just a small ritual to bootstrap the
    // app. Note that all our functionality is injected
    // via the `handlers` argument right here.
    const app = document.getElementById('app');
    m.mount(app, m(App, handlers));
});