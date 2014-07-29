---
title: If-statements Considered Harmful
tags: software development
layout: post
---
	if(you.areUsingIfStatementsOften, () => {
		notify(you, 'probably suck as a developer');
	});

### Disclaimer
This post is about ```if``` __statements__. Those things that don't yield a result but just do __something__ or __some other thing__. They are the tell of a side-effect. And side-effects suck so ```if``` statements suck as well.

In fact, statements tend to suck in general because they don't have a value. What the fuck are they doing just being void? I'm quite sure something happened you damn __statement__ but you __refuse to tell__!

If you like statements and especially ```if``` statements you better stop reading.

##### UPDATE 29-07-2014
Yeah __considered harmful__ things should be considered with a grain of salt. And I probably should've chosen a less inflamatory title but really you should be careful with your `if` statements. If you have to much you're code turns into a maze and you are left to __stepping through it__. And once you're stepping through your code this should be a clear signal you are not in control anymore because you are only able to deduct behavior by observing the system in (faked) production and that is not good.

### Statements
Statements suck gigantic arse. Why? Well, they don't tell you shit for starters. A  statement is like that coworker who doesn't respond but in the end complies with your request or gives a personal spin to it without any feedback. It nods but you have no clue what the fuck is gonna happen. Those are statements. You call it and hope for the best.  _Hopefull programming_ I call it.

We have absolutely no need for statements anymore. I argue that everything should just be an expression. Everything should at least return something. Even if it's only a ```boolean```. Please, don't leave me hanging, give me a reply baby.

#### They Are Void
You know what ```void``` is? Nothing. All statements return conceptual ```void``` by definition so they are bascially just expressions that have no result. In fact, they tend to _eat_ valuable results because of their nature. This means they are crappy expressions because they have no way to signal what the hell the did apart from using closed-in or (much much worse) global variables. They _just do something_ and then say "I'm done, something changed (for the better hopefully), good luck, I'm outta here.".

### Switches
And for all monkies who think a ```switch``` will be better: unless it's a ```switch``` expression (more like a pattern matcher)  then __NO__. Sorry unless you're writing a low level parser or tokenizer keep away from those damn switches. Use a ```hash``` => ```function``` lookup instead (i.e. an ad-hoc interface).

### But, but...
__NO__. No buts. Every ```if``` statement you write should cause buthurt. Use list comprehensions instead and operations over enumerables. Assume you always have 0 or N for everything and don't do __this__ or __that__ stuff. Hide all logic behind interfaces and use polymorphism. Also, if you can test your shit easily you are probably good so make sure you can always do that.