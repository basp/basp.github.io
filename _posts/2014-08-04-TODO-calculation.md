---
title: TODO: Calculation!
tags: software development, stupidity
layout: post
---
This is in the core logic of one of our applications (mind you, this is not the worst by a long shot). 

Go go code! Also mind the comments, they really clear things up:

	// TODO: Do calculation!
	var fromDate = GetLastCalculatedDate(false).AddDays(1);

 	// Find nearest Monday -1 from Today downwards
    var daysFromSunday = (int)DateTime.Now.AddDays(-1).DayOfWeek;
    var toDate = DateTime.Now.AddDays(-1).AddDays(-daysFromSunday).Date;

Mmmm. Yes I see code. When I see you code I really start to doubt if it even works or says what your comments imply you do. 

Well, comment actually. The first one is a ```TODO``` marker that really doesn't make much sense. It seems it is doing calculation already (it is running in production for some months now) and it seems without calculation shouldn't be doing much in the first place. I guess someone forgot to clean up or thought it made the code more complete.

Anyway, what the fuck is happening here? The actual comment that we have makes no sense to me: "Find nearest Monday -1 from Today downwards". WTF? Is some Markov generator supplying these comments? Seeing as the comment is fuseless (fucking useless) we have to look at the damn awful code.

	var fromDate = GetLastCalculatedDate(false).AddDays(1);

Beautiful. That gives us a great start. First we have to wonder, what the heck is that ```false``` argument doing? I hate boolean arguments so much because they tend to do one thing and that is to force a particular ```if``` path somewhere down the method to which you are supplying it. Let's take a gander what on earth is going on:

	public DateTime GetLastCalculatedDate(bool Absent)

Oh my... Well at least it doesn't force a particular path down an ```if```-statement:
	
	command.Parameters.Add("@Absent", SqlDbType.Bit).Value = Absent;

It's not much better though sadly.

NOTE: Work-in-progress. To be continued/refined/extended.