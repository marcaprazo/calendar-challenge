# MarcaPrazo Calendar Challenge

Hey there, developer! This repository is a small challenge we propose to you.  The point is to get to know you better, your coding style, the way you think and work around the problems you face. 

It's not supposed to be a hard challenge and you will probably come up with an algorithm in an hour or so and you won't have many problems implementing it.

# The problem
The point of the problem is to create and code an algorithm to render events on a calendar HTML page, like Google Calendar or Outlook.

You will be given an array of event data (specs below) and are supposed to render the event stickers on the view while observing these constraints:

*   An event MUST NOT visually overlap another one.
    But we WILL have events with conflicting times. So you must render the stickers side by side in a way that they won't overlap VISUALLY. 

*   If two events conflict in time, they MUST have the same width. 
    Please note that this apply to every event. So, if Event A conflicts with B and B conflicts with C, all the three of them will have the same width, even if A and C do not conflict with each other.

*   The events MUST use the maximum available width, but must still abide to constraint number 2. 

*   The event height MUST represent the duration of the event on a 1:1 pixel/minute ratio. So a 2-hour event will be 120 pixels tall. 

## The HTML and CSS

There are 3 main files on this repo. 

You probably won't need to change `index.html` or `main.css` but feel free to do so. Maybe changing the padding, margin or borders will make your calculations easier. If so, feel free to modify the CSS, but try not to break the overall look of the stickers and agenda. 

We prepared the `#calendar-events` div to receive the stickers for you but feel free to change that if you need. Visually, though, the events must be there. The div is 720px tall, which mean every vertical line of pixel represent one minute. So a sticker with top: 0 starts at 9am. 

On the HTML file you will find a comment with a event sticker inside it, so you can see the structure we prepared for them. 

## The Javascript

You can code however you feel more confortable. Just bear in mind that there MUST be a function in the global namespace called `renderEvent(eventArray)` which will be the entry-point. We will test your code by calling this function from the browser console.

## The Event Specification

The event is represented by a JavaScript object. It will have 2 fields: `{ start: 30, end: 120 }`. Both fields represent the number of minutes after 09:00am. The event represented above would start at `9:30am` and end at `11am`. 

We won't provide events with start or end times falling outside the 9am-21pm time range.


# Submiting your work

To submit your work, clone this repo on your local machine and, when you're done, send an e-mail with your solution to `dante@marcaprazo.com`.

Please include all necessary files, specially any framework you used.

# FAQ

## Can I use framework 'X'?
Yes you can. Just be sure to include the files with your solution when sending it to us. Remember to include the necessary `<script>` tags in your code. 

## Is this supposed to be cross-browser?
Yes, all modern browsers should execute your JS and render the events. We won't ask for pixel-perfect solutions, though. By modern browsers we mean the last 2 versions of Chrome, Firefox, Internet Explorer and Safari. 

## Is there a maximum number of events?
Well, your solution must handle any number of events, but you can assume a max of aprox. 100 events for rendering purposes. 
