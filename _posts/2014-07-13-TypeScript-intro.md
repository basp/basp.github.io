---
layout: post
title: "What is TypeScript?"
tags: [dev, javascript, typescript]
---
According to [the official site](http://www.typescriptlang.org), TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.

TypeScript is developed by Microsoft and one of the core developers is [Anders Hejlsberg](http://en.wikipedia.org/wiki/Anders_Hejlsberg), the lead architect of the C# programming language. You can clearly see some of the C# influence in the TypeScript language design.

TypeScript is not intrusive. You can start by treating it just as JavaScript. It will compile just fine. This is also one of the reasons why it's so easy to use - you will still have all the power that JavaScript gives you but you can enforce rules over certain parts of your appliation (interfaces) so that all the different moving pieces will connect properly.

As you add more and more type declarations and narrow them down you will find the compiler to be a great help in avoiding most of the runtime errors. 

### What Does It Look Like?
Well it looks a lot like some child of JavaScript and C# and that's not really surprising. This, for example is perfectly valid TypeScript:

    function quux(foo, bar) {
        return { name: foo, description: bar };
    }
    
It's just JavaScript. However, TypeScript allows us to make this a little bit more explicit:

    function quux(foo: string, bar: string) {
        return { name: foo, description: bar };
    }

Also one of the first things that you will notice is that lambda's are funky:

	var quux = (foo, bar) => { name: foo, description: bar };

Or a multiline lambda:

	var quux = (foo, bar) => {
		console.log('Never mind me, just tracing from quux.');
		return { name: foo, description: bar };
	};
    
I personally __don't miss__ the fugly ```function``` keyword.

Not only will it inspect the arguments, it now can also give us information (by inference) of the thing we are returning. It now knows we are returing an object that has two properties: `name` and `description` which are both of type `string`.

Since we just saw types (integral to TypeScript) it's worth noting that TypeScript doesn't impose any artificial types on top of JavaScript. If you really don't care you just use the `any` type which means everything goes. It supports `Date`, `string`, `number` but not `float` or `int` for example because those are not native to JavaScript in the first place. So any types that TypeScript supports out of the box are all a natural fit for the JavaScript we already write (we just don't enforce those types in our code yet but they are there, behind the scenes).

There's lot's more to TypeScript and I encourage you to check it out yourself but this was mainly to point out it's very much just like JavaScript and that you have much control over how much typing you are gonna subject yourself to.

### Modules, Classes, Interaces
TypeScript supports all of these concepts in a very natural way and it all maps to very clean JavaScript code that is perfectly readable even though it was produced by a compiler (nowadays often also called a _transpiler_). However, sometimes it can be a bit tricky when dealing with external frameworks or libraries when it matters whether it's gonna `new` up a function or just `invoke` it.

This means you might have to go back to the compiled `.js` and look at the code produced and verify it with API you are trying to use to get things to work together. But even if that fails you can just create an ordinary JavaScript thingy like you would without TypeScript and it still will work fine (remember, it's still ordinary JavaScript so everything you know already works). TypeScript is very unobtrusive and you can use as much of it as you want.

### Tools
When you write TypeScript v.s. JavaScript it will have to be compiled by the TypeScript compiler/transpiler. This is integrated into Visual Studio (including express) and will make sure that your script complies with the type declarations. 

However, you can just as well invoke the TypeScript compiler manually by any means you deem appropriate. That said, the integration in Visual Studio is excellent and the [free express edition](http://www.visualstudio.com/downloads/download-visual-studio-vs#d-express-web) is highly recommended for TypeScript development. You'll probably have to install either Update 2 or [Update 3 RC](http://support.microsoft.com/kb/2933779) in order to get the actual TypeScript templates and support.

### Don't Use If...
<del>You're just the sole developer on a very small application.</del>

<del>My feeling is TypeScript is best for medium to large JavaScript applications of reasonable complexity and where (and this might be most important) multiple people are working on the same things. Lot's of people might argue that the types only get in the way as does the extra compilation stage and they are right if you are alone.</del>

TypeScript is always great.

### Do Use If...
You are working in a team, the types will quickly start to pay off (especially in a good IDE) because you will get the documentation on stuff as you are developing and not by looking it up on the web or reference material (which might go out-of-date with the state of the code even).