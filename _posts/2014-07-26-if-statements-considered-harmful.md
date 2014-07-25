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

### Statements
Statements suck gigantic arse. Why? Well, they don't tell you shit for starters. A  statement is like that coworker who doesn't respond but in the end complies with your request or gives a personal spin to it without any feedback. It nods but you have no clue what the fuck is gonna happen. Those are statments. You call it and hope for the best.  _Hopefull programming_ I call it.

We have absolutely no need for statements anymore. I argue that everything should just be an expression. Everything should at least return something... Even if it's only a ```boolean```. Please, don't leave me hanging, give me a reply baby.

#### They Are Void
You know what ```void``` is? Nothing. All statements return conceptual ```void``` by definition so they are bascially just expressions that have no result. This means they are crappy expressions because they actually have no clue what they are doing. They _jsut do something_ and then say "I'm done, good luck, I'm outta here.".