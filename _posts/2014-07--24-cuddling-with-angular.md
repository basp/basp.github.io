---
layout: post
title: Cuddling with AngularJS
tags: [dev, javascript, typescript]
---
After spending a few weeks intimately with AngularJS i must say I like it. You have to know that I spend two whole years doing only server side programming professionally and only dabbling in client side programming now and then. However, it was very refreshing to step back into JavaScript and I was lucky to find there is now an excellent framework for awesome client side applications. Yes I'm late to the party but it's Angular.

Because I'm writing this after the fact my memories will not be 100% accurate but they will have to do.

#### At first...
I was like. Ok let's do these tutorials to check it out. And it all seems a bit funky especially if you're new or coming back to JavaScript. I was fumbling around a lot trying to hook up my DOM elements to the proper controller behavior. Finding out how my service names are actually hooked into the service parameters (literally) and learning the difference between a ```factory``` and a ```service```. This is all documented but it might throw you off (especially if you're just fumbling around and using TypeScript like me).

#### And then...
You start to think "ok, this tutorial is nice but what about real applications". So the next thing is just to start developing stuff with it. I immediately put it to work profesionally to see how far I could get. Expecting to stumble quite soon but strangely I didn't.

I focussed on pulling all the logic from our existing ball of mud into a wide variety of services. Then I realized almost all of those services have to do with either IO, formatting or validation so I was easily able to generalize over that with TypeScript. Then it dawned on my those formatting services are actually AngularJS ```filter``` objects. I was affraid I had to rewrite some stuff but no. Thanks to AngularJS' excellent dependency injection I could just injuect my existing formatting services into my filters by simply requesting them as a parameter.

### Evaluation
Along the way there was of course stuff to learn and find out. I had to learn how to use ```ng-model``` effectively (always make sure there's a __dot__ (```.```) in there) and also how to use nested controllers. Along the way I made use of the excellent (Build Your Own Angular)[http://teropa.info/build-your-own-angular] book to learn more about the inner workings. I still have to cover a lot of material from that book but so far the chapter on how ```$scope``` works has been very insightfull and excellently written. I can really recommend this book if you are even remotely serious about getting into AngularJS.