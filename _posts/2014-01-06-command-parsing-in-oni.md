---
layout: post
title: "Command Parsing in Oni"
tags: [dev, moo, oni]
---
In the previous post, I rambled a bit about strings in Erlang. Strings are not too bad but for Oni (lum invader) I decided to go with binary strings. These look like `<<"fubar">>` and consume only a byte per character. According to the [Erlang Efficiency Guide](http://www.erlang.org/doc/efficiency_guide/binaryhandling.html) they also have several optimized operations in the VM.

Unfortunately that means we cannot use a lot of stuff that would otherwise be free. Things like everything from the `strings` module and `io_lib:format` will be somewhat missed. However, even though there will be a lot of strings going in and out of Oni, this doesn't mean that we have to be slow about it. In fact, handling strings, matching and formatting will be one of the main tasks that the Oni runtime will have to perform so hopefully we are smart about it.

### Input
The main form of input into Oni is text but we are not forced to handle these as strings. We can handle these like sequences of bytes and using one of Erlang's awesome features (binary matching) we can do a lot of cool stuff (and fast too). Oni is not interrested in handling unicode anyway. We will just handle everything like ASCII (otherwise we couldn't do this, at least not so easily) and speed through it.

For example, here is the `trim_start` function. It's oblivious, it just returns `Data` whenever it finds a non-whitespace character (whitespace characters are guarded):

	%%-----------------------------------------------------------------------------
	%% @doc Removes beginning whitespace.
	%%-----------------------------------------------------------------------------
	-spec trim_start(Data::binary()) -> binary().
	trim_start(<<>>) -> 
		<<>>;
	trim_start(<<C, Rest/binary>>) 
		when C =:= $\s; C =:= $\t; C =:= $\r; C =:= $\n -> trim_start(Rest);
	trim_start(Data) ->
		Data.

This `trim_start` function is easy though because we can start from the beginning. 

Doing `trim_end` we have to suffer a bit because we have to deal with everything. We cannot be sure that we handled all whitespace and non-whitespace until we have reached te end of the binary. However, when we call this it's usually called from the `trim/1` function. This will first trim the whitespace so at least we can skip those.

	%%-----------------------------------------------------------------------------
	%% @doc Removes trailing whitespace.
	%%-----------------------------------------------------------------------------
	-spec trim_end(Data::binary()) -> binary().
	trim_end(Data) ->
		trim_end(Data, <<>>, <<>>).

	%% Internal helper
	trim_end(<<>>, _Buffer, Acc) -> Acc;
	trim_end(<<C, Rest/binary>>, Buffer, Acc)
		when C =:= $\s; C =:= $\t; C =:= $\r; C =:= $\n ->
			trim_end(Rest, <<Buffer/binary, C>>, Acc);
	trim_end(<<C, Rest/binary>>, Buffer, Acc) ->
		trim_end(Rest, <<>>, <<Acc/binary, Buffer/binary, C>>).

The `trim_end/3` accumulates any character in `Buffer`. Whenever it finds a non-whitespace character it will  append `Buffer` to its accumulator (`Acc`) value, reset `Buffer` and recurse. Whenever it finds a whitespace value this will be added to the `Buffer`. If it runs out of characters, it will return whatever is in the `Acc` value while discarding everything in `Buffer`. 

The `Buffer` that is discarded represents our trailing whitespace so what is left in `Rest` is our trimmed `binary()`. The unfortunate part is that if we want to trim whitespace __we have to run from the beginning__. Luckily, we are dealing with small commands so this should not be too much of a problem.

Because I don't like to convert stuff while it's handled by internal processes I kinda want everything to be a `binary()`. This means I have to do parsing and formatting on binaries too. The command parsing routines for _lum invader_ are in the `oni_cmd` module. This module exports only one function: `parse(Data::binary()) -> cmdspec()`. 

The `cmdspec` is a somewhat convoluted tuple that has one of the following forms: 

	{Verb::binary(), Dobjstr::binary(), 
	 Argstr::binary(), Args::[binary()]}

Or like this: 

	{Verb::binary(), Dobjstr::binary(), Prep::binary(), Iobjstr::binary(), 
	 Argstr::binary(), Args::[binary()]}

When we try to parse something with the `parse/1` function we get one of those. Below is an example with an indirect object:

	1> oni_cmd:parse(<<"get silver bullet with shady toolbox">>).
	 {<<"get">>,<<"silver bullet">>,<<"with">>,
 	  <<"shady toolbox">>,<<"silver bullet with shady toolbox">>,
 	  [<<"silver">>,<<"bullet">>,<<"with">>,<<"shady">>,
  	  <<"toolbox">>]}
	2> 

In the above result with get this rather ugly tuple but it has meaning. In order we can see the verb (`<<"get">>`), the direct object (`<<"silver bullet">>`), the preposition (`<<"with">>`), the indirect object (`<<"shady toolbox">>`), the argument string (everything but the verb) and the argument list (a combination of the direct object, preposition and indirect object tokens).

### Command Parsing
The parsing of Oni commands is efficient. I do not claim it to be fast but I claim it to be fast enough for the purposes for which it is designed: handle parsing of player input.

For our purposes, the MOO (command) parser works as follows:

* 	The command will be split up on whitespace
* 	The first token is assumed to be the verb (the program that will execute)
* 	The parser will look for a preposition (with, at, in, on, etc.)
* 	If a preposition is found, everything between verb and preposition is considered to be the direct object and everything after the preposition is considered to be the indirect object.
* 	If no preposition is found, everything after the verb is considered to be the direct object.

As we can see in the above, Oni can parse the preposition too and return a complete commmand spec. Even on complex commands it's hard to get the parser to take more than a microsecond to parse input. Also, it takes only one pass to parse the command into a full `cmdspec()` tuple.

__To be continued__

#### Fun Fact
During testing, the `shady toolbox` actually revealed a subtle bug in the parser - it was ignoring stuff at random! Turnes out it was a little too eager to parse things as prepositions. It parsed the `toolbox` as the `to` preposition and then decided it had found a preposition so it would not have to parse further. The solution was simple: add a space to the binary match expression.