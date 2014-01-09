---
layout: post
title: "Oni (lum invader) Genesis"
tags: [dev, moo, oni]
---
Oni has grown up a lot over the last few days. From a client perspective it's not much but the infrastructure is coming along nicely. Here's a brief overview of the stuff it can do right now:

*   The object database API is mostly complete except for `verb` manipulation.
*   The command parser API is now almost complete - it will also try to resolve object references.
*   There is ANSI color support for output in the `oni_ansi` module.
*   Oni always tried to respect the `player` flag but support is more fleshed out now.
*   There is a seperate API for handling connection (`gen_tcp:socket`) to player (`oni_db:objid`) associations in the form of the `oni_who` module.
*   Oni now respects the `wizard` flag also.
*   Oni now has a basic variety of OTP components implmented.
*   Overall fixes, touchups and comments.

This post will highlight a few of the changes mentioned above.

#### The Object Database API
The `oni_db` module contains a lot of functions to manipulate objects. In fact, everything you need (and more) is right there. You can never get a _complete_ object though - you can only use an `oni_db:objid()` identifier (which is actually an `integer()`) as an object handle.

There are a lot of functions exported from the `oni_db` module. Higher level functions tend to be optimized functions of lower level constructs that are also available (or at least they should). Below is a basic example with some of the fundamental functions available (executed from an Erlang shell):

    N+0> oni:start(). % `oni_db:init()` should do too
    ok
    N+1> H = oni_db:create(nothing). % `nothing` is our parent
    1
    N+2> oni_db:add_property(1, fubar, <<"fubar">>). % we'll add the `fubar` property
    true
    N+3> oni_db:get_value(1, fubar). % sanity check
    <<"fubar">>

Now that we have created an object we can make this object an object that you can _logon to_ by setting the `player` flag (and also assigning a `name`):

    N+4> oni_db:rename(2, <<"Mistress">>). % let's set a name for this object
    true
    N+5> oni_db:set_player_flag(2, true).

If you connect with your telnet client you can connect with `connect Mistress`. If you want, you can also make her a wizard:

    N+6> oni_db:set_wizard_flag(2, true).

Beware of her power though.

#### The Command Parser
The command parser for Oni is closely modelled on the __LambdaMOO__ command parser. There will be some differences but the overall behaviour should be the same. On the other hand - Oni does support reasonably fast _native_ indexed lookups using `oni_match:list_i/3` which is executed by the `oni_cmd:parse/2` function so you don't have to worry about parsing even pretty fancy commands. Quote support is a bit flaky still but if you don't go to crazy you shouldn't run into much edge cases.