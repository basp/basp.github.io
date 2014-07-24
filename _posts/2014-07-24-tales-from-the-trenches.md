---
title: Tales from The Trenches
tags: software development, GIP
layout: post
---
## 1
So one of my collegues got a change request in a word document. The text was to be put on
a page of one of our browser based applications. Being not in the mood to mark it up he just
copy pasted the stuff from the word doc straight into the IDE knowing that the HTML would
suck ass. He deployed it anyway.

Not long after he got a complaint that some of the text was not quite the same and looked 
strangely off. After first venting his frustration to me about this trivial annoyance he
told me his solution: tell the project department to fix up their act and set the proper
fonts and sizes in word first before sending in the final RFC.

## 2
Another collegue got a similar "change some text" request but it was uploaded as a modified 
screenshot. Some poor dude thought it would be a smart idea to take a screenshot of an existing 
page, add some text to it using paint or photoplop or whatever and send that to ICT with a RFC. 
Being the good programmer that my coworker is he just saved the screenshot to the images folder 
of the application in question, included a ```img``` tag in the HTML pointing to the screenshot
image and deployed it. 

Apparently this was not what the customer had in mind.