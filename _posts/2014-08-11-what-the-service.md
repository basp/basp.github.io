---
layout: post
title: What the Service?
tags: [dev]
---
What the service is a service? We have all these services and all these things to 
do with services but how can we even recognize them? What characteristics do they
have? Well, services are a big mess but hopefuly the rant below will clear some 
things up.

Being somewhat of a .NET veteran I grew up with the idea that services were heavy
big design things with lots of _architecture_ and __configuration__. Slowly but
sure I realized services do not have to be big at all. In fact, once you figure 
that services can be as small as a single value it all falls into place. At this 
point you will also have to start to see the benefits of __dependency injection__
if you are not aware of them already.

### What __IS__ a service?
Let's start with a silly but still somewhat illuminating definition:

> A service is a piece of code (no matter how small) that provides a service to some 
> piece of client code (usually an application).

But what does it mean to provide a service? Well, looking at [Merriam-Webster](http://www.merriam-webster.com/dictionary/service), there are actually a multiple of definitions that would suit but I like __help__, __use__, __benefit__ because it doesn't recurse with _serve_ or _servant_. 

Ok, we know a little bit more but not too much. To really understand a service we must see
why we would wan't a service in the first place.

### Why do we __NEED__ services?
Why would we need a service? Well, it has to do with decoupling and keeping your
system testable. For instance, say you have some piece of logic that depends on
the current date to do something (display a warning in the UI for example). This
is a simple but not unreasonable scenario.

You could just grab the nearest system lib and call the `now` equivalent in your
implementation but this would make it instantly untestable. Assume we wrote this:

	function someBusinessRule() {
		if(new Date()) {
			...
		}
	}

How would you ever test that? You can't? You are at the whim of the `OS` at this point 
so either you can do some crazy hack to repogram the clock or just improve your
interface. 

Consider this instead:

	function someBusinessRule(provider: DateProvider) {
		if(provider.date()) {
			...
		}
	}

Now we have some actual power to test this in a controlled environment (don't engineers
like testing stuff in a controlled environment? Why don't we software engineers do a 
better job of making it happen then?). We can easily inject a custom `provider` that
delivers the exact `Date` that we are interested in. 

This is the first key to so called __unit testing__: never ever depend on system level 
functions or other values you cannot control.

Now we come to the second rule with is basically just an extension on the first rule. It's
a bit easier to explain because we can just say:

> Whenever you use `IO`, use a service to abstract it.

If you consider system functions and OS level functions IO too then you will only need 
rule #2. Hide all `IO` behind services and don't worry if they are tiny.

### Families
Services tend to neatly converge into a common group of services: providers,
filters and selectors. Conveniently, this is also how almost every operation in
compution can be described. Even a simple expression like `2 + 3` can be
rewritten as a of provide, filter, select expression:

	let sum = [2, 3] |> List.fold (fun acc elem -> acc + elem) 0

The `[2, 3]` is the __provide__ part. The `acc + elem` is the __select__ (or _convert_)
part and finally the `List.fold` can be considered the filter. You can look at it
in other ways too and some might argue with my classification and that's fine as 
long as you remember that every computation can be writen as a `from`, `select`,
`where`. 

Yes. It's SQL. Who would've thunk that?
