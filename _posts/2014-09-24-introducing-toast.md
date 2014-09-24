---
layout: post
title: Toast, it's like Redis... Somewhat.
tags: [dev, toast, pixi]
---
[Toast](https://github.com/basp/toast) is a flexible NoSQL data storage that your DBA's are going to love. It tries to offer the best of the two sides of the big data chasm. To the the DBA's it offers a well defined schema and a natural API. To the programmers it offers well defined data structures and a natural API. Both sides will live in bliss and stars will shine upon them forever. 

Toast is not a single thing, it involves (just) Toast, the core package, Toast the server component and Pixi, the Toast client reference implementation.

Oh, Toast is also mostly a .NET thing.

## Toast
When we are talking about Toast it is basically the framework on which [Toast Server](https://github.com/basp/toast/tree/master/Toast.Server) and [Pixi](https://github.com/basp/toast/tree/master/Pixi) are built. It is a library that has primitives that should make it easier to setup a Redis protocol. Also, it has some opinionated classes that perform some low level jobs like storage and protocol business.

## Toast Server
The [toast server](https://github.com/basp/toast/tree/master/Toast.Server) should eventually be a drop in replacement for any Redis server but for now we don't support all commands yet so most reasonably advanced clients will probably fail in trying to send us server commands that we don't understand.

Also we don't support any of the complicated clustering as of yet and there are not any plans to support that from within Toast itself in the near future. We are definitely targeting SQL Server by default and there are lots of things to tweak in there.

## Pixi
[Pixi](ttps://github.com/basp/toast/tree/master/Pixi) is the (rudimentary) reference client that we have so far. It will speak to Toast Server quite well but it will not be a drop in replacement for your Redis client. That is also not the goal, it would be much better to have our server be able to speak with every Redis client instead of putting effor in Pixi. For now though it's pretty useful for testing and simple clients.