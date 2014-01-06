---
layout: post
title: "String Manipulation in Erlang"
tags: [dev, moo, oni]
---
String manipulation is one of the first things that pops up when the downsides of Erlang are discussed. If we are to believe [schemecookbook.org](http://schemecookbook.org/Erlang/StringBasics) it seems pretty grim. First we have this:

> To understand why Erlang string handling is less efficient than a language like Perl, you need to know that each character uses 8 bytes of memory. That's right -- 8 bytes, not 8 bits!

That doesn't sound good but it's not too bad either. Yes, they take up a bit of memory but if handled properly this will usually not harm your application too bad. There's more wisdom from the Scheme community though: 

> On the down side, this also means strings use a lot of memory, and that access to the nth element takes O(n) time (rather than the O(1) time we would get with strings represented as arrays of characters.)

Indeed, in Erlang strings are not arrays. You can't just do some random indexing and substringing like you can in most languages. This might seem like a downside but rather __it's a good thing__. Even though most languages allow you to do this, random substringing, indexing, getting chars and whatnot from whatever position in the string is __NOT__ a good thing. 

Note that you can probably do efficient substring in erlang using `string:sub_string` but just the awkward naming should warn you to not use this. Substringing is just not something that is natural to functional languages. Almost every problem except from the most trivial ones are better solved by __NOT__ using a `sub_string` operation.

Erlang almost forces you to handle every string like a stream of characters and this is actually a good thing because treating the string like some random access memory to poke around in is just wrong and leads to code that is error prone, unreadable and therefore unmaintainable. Even if you look at a modern C like Go you will see that any serious string work (like in the [scanner](http://golang.org/src/pkg/text/scanner/scanner.go) and [parser](http://golang.org/src/pkg/go/parser/parser.go)) is usually not done with just poking about in an array of characters.

There are some hopeful words too. In the [Erlang Efficiency Guide](http://www.erlang.org/documentation/doc-5.8/doc/efficiency_guide/myths.html#id2255887) we can read the following:

> Actually, string handling could be slow if done improperly. In Erlang, you'll have to think a little more about how the strings are used and choose an appropriate representation and use the `re` module instead of the obsolete `regexp` module if you are going to use regular expressions.

Unfortunately the guide does not provide much more info on what this _appropriate representation_ entails but we we'll come back on this in another post. 

Erlang will never be a winner in string manipulation if you just compare it on raw speed. I don't think Erlang will ever be a winner when you compare it on raw speed versus another language in a particular niche (unless it involves process spawning and message sending). It will it never excel in arrays and random poking about in memory. If you need to do a lot of that kind of work then Erlang might not be a good choice. 

But it might still be a good fit though depending on other factors like ease of writing, changing stuff (and hotloading code), robustness, prototypability and batteries included. If you are able to model your problem as a stream of independent computations, possibly joining their results if required you are golden.

Arrays or random access lists are not a good fit for functional programming. Their efficiency is due to their mutable nature and natural mapping to computer memory. They also work nicely with destructive loops and pointer arithmetic. This is not something that any functional language is (or rather should be) good at.

Functional languages are good for streams and stream processing. If you try to do n-indexing then you are likely to have a poor experience. If you look at every problem like it's coming at you in an unstoppable sequence of bits and pieces then you'll do just fine.

In fact, you'll probably even do better in the end. Remember, __don't destroy or mutate things__. Instead, __transform them into something new and better__.