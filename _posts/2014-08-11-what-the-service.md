---
layout: post
title: What the Service?
tags: [dev]
---
What the service is a service? We have all these services and all these things to 
do with services but how can we even spot a service? What characteristics does it
have? Well, services are a big vague commercial mess but hopefuly the rant below
will clear some things up.

<h5>Disclaimer</h5>
Being somewhat of a .NET veteran I grew up with the idea that services were heavy
big design things with lots of _architecture_ and __configuration__. Slowly but
sure I realized services do not have to be big at all. In fact, once you figure 
that services can be as small as a single value it all falls into place. At this 
point you will also have to start to see the benefits of __dependency injection__
if you are not aware of them already.

Services
--------
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
