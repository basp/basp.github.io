# Shikari
When you desire a lightweight CLI embedded in your HTML page.

# Intro
Shikari is pretty much experimental. It currently depends on both 
`jQuery` and `Mithril` but hopefully we can get rid of at least the 
`jQuery` dependency soon. Shikari uses BEM methodology for styling
can (or should) be easy to use and integrate.

# Setup
* Start with a blank HTML file (`kirk.html` for example).
* Make sure you include the dependies: 
```
<script src="//code.jquery.com/jquery-3.1.1.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>
```

* Add a container:
```
<div id="container">
<script src="//code.jquery.com/jquery-3.1.1.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>
```

> TODO: Make sure `Shikari` can be used as *library*

> TODO: Finish documentation on `Shikari` setup 

# Demo
I'm running `Shikari` on my *personal* page at [basp.github.io](https://basp.github.io) if you're curious.

A fun thing to try is to type `prompt`, `typeof prompt` and you'll notice it's a function. Curiously
the function is invoked even if you forsake the parenthesis `()`. 

So just typing `prompt` actually invokes the fucttion and should give you back `>`. Note that entering 
`prompt()` gives the same result (somewhat weird and unexpected). More on `prompt` later.

You can also type `user` (or `user()` if you want). That will return `guest` by default.

Now try this:

    user('Kirk')

And you should get back the result `Kirk`. If you are in doubt, double check by input of `user`
or `user()`.

But let's investigate further what we can do... Try this next:

    prompt(user())

Holy cow, now we have a `Kirk` prompt! But wait we can do better. Try this next:

    prompt(`heh[{${user()}]`)

And now the `Shikari` prompt should display something like: 

`Heh[Kirk]`. 

If it does not show that then please double check your actions and/or file a bug.