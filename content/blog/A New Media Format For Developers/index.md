---
layout: post
title:  "A New Media Format For Developers"
date:   1582651087658
description: ' '
categories: learning programming media
thumbnail: './codio2.png'
---

Codio Format is an open source media format for developers to record and playback the process of programming. It combines code editor operations and audio<sup>1</sup>.

You can record a Codio by running the “Record Codio” command inside your IDE, programming like you normally would and then running “Save Codio”. This will create a Codio file that includes the operations you have done on that IDE, like inserting text and moving between files, and your audio recording.

You can then play that Codio inside another IDE. That would replay the actions you have done inside your IDE in sync with the audio recording

One important difference between Codio and other media formats such as video is that the frame of a Codio recording is an IDE with some state, which means that at any point the viewer can start to interact with it. That makes Codio an inherently interactive media format.

The current implementation has extensions for vscode and intellij. They include both a Codio recorder and a Codio player and are in alpha stage. You can go to [the repo](https://github.com/wix-incubator/codio) or get the VSCode extension from the [marketplace](https://marketplace.visualstudio.com/items?itemName=wix.codio).

A deep dive into the format and the motivation will be published soon<sup>™</sup>.

<br>


* * * *
<br>

<sup>1</sup> Codio = operations on code + audio


