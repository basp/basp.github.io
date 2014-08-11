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
Let's start with a silly but still somewhat illuminating definition: a

	> A service is a piece of code (no matter how small) that provides a service to some 
	> piece of client code (usually an application).

But what does it mean to provide a service? Well, looking at [Merriam-Webster](http://www.merriam-webster.com/dictionary/service), there are actually a multiple of definitions that would suit but I like __help__, __use__, __benefit__ because it doesn't recurse with _serve_ or _servant_. 

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
