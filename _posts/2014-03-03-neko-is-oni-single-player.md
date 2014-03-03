---
layout: post
title: "Neko (is Oni single player)"
tags: [dev, moo, oni, neko]
---
### Neko
Last few months development on Oni is slowed to a halt. Main reason is because I'm forced to concentrate on game mechanics now and Oni is just not an easy testbed. Some might argue that the design of Oni is just not that good and I'm the first the admit there is ample room for improvement. However, I don't think this is the main reason that is holding me back at this point.

That's why work has shifted over to this (http://github.com/basp/neko) project which is (or should be) a test bed to try out ideas for the _real_ Oni game. Also, I think it will be much more easy to balance thing if we have an artificial enviroment in which we can easily experiment with any potential game concepts.

### Motivation
All the technical pieces for a MOO/MUD are in place but I'm simply unsure on how to combine them into a fun-to-play game. Designing this system for Oni (a native multiplayer environment) would force me to focus on a lot of technical details and multi-player interaction before I'm even sure on what details I _really_ need for the game I want to design. 

To be clear, I never really expected to get so quickly and easily to this stage so that I should worry about game design instead of technical fiddling.

### Implementation
Neko mirrors Oni and LambdaMOO in many ways. It parses the same sort of commands and event he basic world fabric and the way it is woven is basically the same. However, Neko implements a single player turn based perspective of this world. Or at least, it aspires to do that (it's not there quite yet but we are getting close).

### Notes
Everything is implemented in (not very beautiful) Python for now. I've put most of my engineering efforts in Oni (http://github.com/basp/oni) and for this I was mostly aiming to get a result I could demo quickly and built on as needed.