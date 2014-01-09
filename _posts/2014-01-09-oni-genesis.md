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
*   Much better matching support.
*   Oni now respects the `wizard` flag also.
*   Oni now has a basic variety of OTP components implmented.
*   Overall fixes, touchups and comments.

This post will highlight a few of the changes mentioned above.

#### The Object Database API
The `oni_db` module contains a lot of functions to manipulate objects. In fact, everything you need (and more) is right there. You can never get a _complete_ object though - you can only use an `oni_db:objid()` identifier (which is actually an `integer()`) as an object handle.

Higher level functions tend to be optimized functions of lower level constructs using as much fast parts of Erlang as possible (or at least they should). 

Below is a basic example with some of the fundamental functions available (executed from an Erlang shell). Note that this is bascially just an ETS API. Oni optimizations only really come into play when doing byte matching (which is something we try to be very good at, see the info on `oni_match` for more on the internals).

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

Oni will parse bytes and not characters. If we cannot interpret client input as ASCII then it's most likely your commands will be parsed as nonsense and everything will return a basic _not understood_ response. If you are looking for a unicode enabled MOO server you can fork this and replace everything in `oni_bstr` with stuff from (presumably) an `oni_str` module that deals with regular Erlang `string()` instead of `binary()`. 

#### ANSI Color Support
Every modern MOO should support ANSI colors. These have codes like `<<27, "3m[">>` and are not very friendly to type. Oni has builtin style support with `oni_ansi:style/1` that will replace more friendlyl codes like `$fg_blue` with their respective ANSI code. You can also strip all the style info using the `oni_ansi:strip/1` function.

#### Support the `player` Flag
If the object you name is not a `player` you can't login. We also check for this flag in a few other spots.

#### The `who` API
There has to be some way to tie player objects to sockets. This is materialized in the `oni_who` module. It has functions to minapulate exactly those associations. It is mainly meant to lookup a `gen_tcp:socket` by specifying an `oni_db:objid` but the (slower) reverse is possible too.

Generally, the infrastructure will manage all the entry bookkeeping but you can query it at will.

#### Matching Support
Important matching routines have been put into their own module: `oni_match`. This is the API into all matching support. The exported routines are used heavily but the command parser when it tries to resolve object string references into actual object identifiers.

### Respect the Wizard Flag
In the prototype, the `wizard` flag was there only for show but Oni actually respects this flag in a basic way now. If you are a `wizard`, you will have access to quite a few powerfull constructs (so be careful assinging this flag). You can execute Erlang expression lists on the server at will using the `;` operator:

    > ;3 + 2.
    => 5

This is not just restricted to simple expressions though. You can assign values:

    > ;R = 3 + 2.
    => 5
    > ;R.
    => 5

And also call Oni API of course:

    > ;oni_db:create(nothing).
    => 3
    > ;oni_db:add_property(3, foo, <<>>).
    => true
    > ;oni_db:get_value(3, foo).
    => <<>>
    > ;oni_db:set_value(3, foo, <<"foo">>).
    => <<"foo">>
    > ;oni_db:get_value(3, foo).
    => <<"foo">>

However powerfull this is, keep in mind it is also extremely dangerous. If someone is a `wizard` then it will have full control to your VM this way as we don't do any checks. This is all fed straight into the Erlang VM.

#### OTP
Oni is much better supervised now. All the major server components are (or should be) OTP compatible. The `oni.app` declaration might not be up to date though because it's such a PITY to keep updated.

If you start Oni with `oni:start()` or `application:start(oni)` then you can safely experiment a bit without everything falling apart thanks to the basic but (apparently quite solid) supervisers.

#### General Touchups
Overall the code has been formatted and provided with comments where they seem to make sense. Most of the stuff is just pattern matching but at some points things might be a bit more involved. I tried to supply comments whever I felt this might be the case.

#### Summary
Oni doesn't do a lot for the average user yet but the infrastructure is almost coming to a point where it's feasible to actually program a world with it. The above post highlights a few major improvements versus the prototype but it is in no way complete. There are lots more small tweaks and extra API that have to be discussed in another post.
