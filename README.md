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

* Add a container somewhere *before* the dependencies.
```
<div id="container">
<script src="//code.jquery.com/jquery-3.1.1.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/gsap/1.19.0/TweenMax.min.js"></script>
```

> TODO: Make sure `Shikari` can be used as *library*

> TODO: Finish documentation on `Shikari` setup 