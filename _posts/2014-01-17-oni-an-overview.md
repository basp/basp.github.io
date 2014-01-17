---
layout: post
title: "Oni Overview"
tags: [dev, moo, oni]
---
## 鬼ラム・インベーダ
At this point its useful to give an overview on the various parts of Oni and how it's all coming together. In general we have OTP components, infrastructure and utilities. Below is a general overview:

### OTP components
We'll start with the lower level components and work our way up from there. First we have the server components:

*   `oni_rt_serv` is our runtime gateway. In the end, every command that is a result of user input (and automaton behavior) is passed into this single pipeline. The main purpose of this bottleneck is to keep the game world in sync and to minimize the amount of _strangeness_ on executing (especially long running) verbs. This is spawned a singleton for each Oni application instance.
*   `oni_sockserv_serv` is the process that deals with obtaining user input and passing that into Oni for processing. This is basically a big fat wrapper around a `socket` connection. One of these is spawned for each connection.
*   `oni_aq_serv` is the action queue server. This is a secondary user process that allows us to easily implement _action_ verbs that span a duration of time in which no other _action_ can be performed. This process will deal with executing long running verbs and passing control along to `oni_rt_serv` for actual execution of code. This is spawned for each _known_ player (i.e. we can connect a socket to a known player object). 
*   `oni_event` this module offers support for the above events (amongst others). There's a basic handler implementation in `oni_event_logger`.

We also have some supervisors. In Oni, we'll be spawning some dynamic processes so we have a few `simple_one_to_one` supervisors:

*   `oni_sockserv_sup` is responsible for spawning `oni_sockserv_serv` processes and keeping track of them. You can also tweak this module to have a number of ready listeners queued up if your connections tend to come in bursts.
*   `oni_aq_sup` spawns action queue processes and keeps track of them so we can kill them all (or find them) if needed. It also offers a basic API into individual action queues.
*   `oni_sup` supervises the top level components and is directly controlled by the application `oni_app`.

Note that individual tasks running on the progress queue are still spawned as anonymous processes. These will be controlled by a supervisor in a future commit.

### Infrastructure
The infrastructure layer is not that large and also not that well defined because for a large part we are leveraging OTP infrastructure and Erlang builtin functions. The `oni` module contains a little bit of infrastructure in the form of `notify` and friends. Also the `who` module could be considered part of instracture too.

*   `oni` is a infrastructural module that offers some functions that are useful for all kinds of individual components and modules.
*   `oni_who` is a module that ties `player` object ids to `socket` identifiers. So we can `notify` an object id and have it arrive at the right socket.
*   `oni_aq` is a module that manages entries in the action queue table. This needs to be available to both `oni_aq_serv` and `oni_aq_sup` so we need this module to prevent a circular dependency (`oni_aq_sup` depends on `oni_aq_serv` already).
*   `oni_cmd` is command parsing. It takes a raw binary socket input data and parses it into a so called `parsed_cmd` (also called _command spec_). These are just a basic representation of input without any assumptions about objects. To really connect it to the engine it is resolved with the `oni_pack` module.
*   `oni_pack` creates runtime execution `package` values. It is mainly used to create `package` tuples from `parsed_cmd` tuples but it also has the `create/2` function so you can create raw packages and directly feed them into the `oni_rt_serv` process.
*   `oni_db` is one of the bigger modules that contains all the functions to manipulate objects in the Oni world. It will be described in more detail in a seperate post (it's that big).
*   `oni_match` also offers some matching methods that are used by the runtime infrastructure.

### Utilities
There are a few utility modules included in Oni. 

*   `oni_ansi` includes ANSI color support out of the box. You can either `style` or `strip` something from Oni ANSI color hints such as `$fg_blue;`, `$reset;` and much others.
*   `oni_match` has matching routines for various things. It is designed to be used by the runtime as well as verb implementations.
*   `oni_gender` is a module that will set all the gender and pronoun related properties on objects. These are especially important if you plant to use `ps` (pronoun sub) from the `oni_bstr` module.
*   `oni_bstr` offers utility functions to work with binary data as strings. These are also used a lot internally.