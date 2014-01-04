---
layout: post
title: "Action Queue"
tags: dev, moo, mmo, lambdamoo, oni, erlang
---
## Action Queue
The basic concept of the `action_queue` or (`aq`) is that a lot of actions will take some time to complete. This will allow players to _exist_ in various stages of an action. In turn, this allows a deep level of graphical detail.

## The MOO World
In the MOO world you have things that are values and you have things that are objects. An object in MOO is composed of two things: properties and verbs. These are equivalent to what you would excpect in most object oriented languages. There are a few twists but they are not important for now.

Oni doesn't support real verbs yet but the design is ready: verbs in Oni will point to an Erlang `MFA`. An `MFA` in Erlang is usually a `{Module, Function, Arguments}` tuple and that will work fine for our purposes. 

The only problem we will have is naming stuff. Due to the design we are forced to explicitly name continuation functions and maybe also even forks if they get reasonably complex. 