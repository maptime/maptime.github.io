---
layout: default
title: Start a Chapter
description: "Start one. Now!"

js:
  - start.js
---

## Start a Chapter!

Ready to start a Maptime chapter for your city? If you know the process already, [jump to the sign up form](#start-form). Otherwise, here's how we get you going:

1. __Create a chapter repo.__ We'll create a [repository on Github](https://guides.github.com/activities/hello-world/#repository) for you so we'll need a list of admins that will be regularly contributing to your pages. Admins should have a Github account so we can add them to a team. Your team will have __write access__ to your repository.

1. __Chapter details.__ Next, you'll send us details about your chapter in the form below. In it, please include:
- __Your Maptime Name.__ (e.g. MaptimeDC)
- __Admins.__ (Github usernames)
- __Location.__ (this gets added to the [map](https://github.com/maptime/maptime.github.io/blob/master/_data/chapters.json))
- __Optional info.__ Twitter handle, meetup.com site, or other links you wish to share.

1. __Get Started with Starter.__ Once your repo is ready, we create a copy of our [Starter template](https://github.com/maptime/starter) for you. It's a great way to get up and running with a your site where you can create posts and events. 

Ready to get started? Fill out the form below and someone will get back to you when your repo is ready or with clarifications.

<form action="//formspree.io/seattle@maptime.io" method="POST" id="start-form">

  <div id="contact-alert" class="form-alert"></div>

  <label class="" for="name">Name</label>
  <input class="" type="text" name="name">

  <label class="" for="_replyto">Your Email</label>
  <input class="" type="email" name="_replyto">

  <hr>

  <label class="" for="name"><strong>Where</strong> do you want to start a maptime?</label>
  <input class="" type="text" name="name" placeholder="City, County">

  <label class="" for="name"><strong>When</strong> do you think you want to start?</label>
  <input class="" type="text" name="name" placeholder="Soon, next month, yesterday...">

  <label class="" for="whatsup"><strong>Why</strong> do you want to start a maptime?</label>
  <textarea class="" type="text" name="whatsup"></textarea>

  <input type="hidden" name="_next" value="http://localhost:4000/start/?submit=true#start-form" />

  <input class="" type="submit" value="Send">
</form>
