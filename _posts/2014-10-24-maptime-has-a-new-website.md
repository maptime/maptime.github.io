---
layout: post
title: Maptime Has a New Website!
category: blog

description: "Maptime.io has a new look! We've migrated from Wordpress to the dynamic duo of [Jekyll](http://jekyllrb.com/) and [GitHub Pages](https://pages.github.com/). Getting involved is now easier than ever."
---

![Maptime has a new website](/img/maptimes.gif)

Maptime is proud to announce the release of our new website! We recently migrated from WordPress to the dynamic duo of [Jekyll](http://jekyllrb.com/) and [GitHub Pages](https://pages.github.com/). Getting involved and contributing ideas to Maptime is now easier than ever.

Static website generators like Jekyll are [great](http://www.developmentseed.org/blog/2012/07/27/build-cms-free-websites/). They strip out a lot of complexity of traditional Content Management Systems like configuring databases, security, and servers. Now-a-days putting together a website with Jekyll and serving it for free with [GitHub Pages](https://pages.github.com/) is a snap. This combination of tools for hackers, tinkerers, and learners has been a perfect match for Maptime. Since we're built on top of the GitHub ecosystem it's easy for folks to let us know about any [problems](https://github.com/maptime/maptime.github.io/issues) they might run in to, suggest new features, or get involved in other ways.

Here's a quick tour of some of the newest features:
<!--more-->

### [Creating a new Maptime chapter](http://maptime.io/chapters/)

[Maptime is growing up](http://maptime.io/blog/2014/10/15/maptime-is-growing-up/). As of this writing we have almost 30 chapters in the States and four more on the other side of the pond in Europe. One thing is clear: people want an approachable way to learn how to make maps, and Maptime is stepping up to fill that need.

![](/img/chapter.json.png)

With the new website it's easier than ever to get the materials you need to start a Chapter in your own town or city. What's needed to start a chapter? Three things:

1. __Contact Us!__: Send our admin team an [email](mailto:hello@maptime.io) and let us know you're interested.
1. __Get on Slack__: [Slack](https://maptime.slack.com/messages/general/) is our internal chat app for all things Maptime. We have channels for everything from website admin to tutorials. Manage your chapter's comms here.
1. __Get on Github__: we use Github for everything from [managing our website](https://github.com/maptime/maptime.github.io/issues) to writing our [Code of Conduct](https://github.com/maptime/code-of-conduct/blob/master/code-of-conduct.md). You and your admins can be added to teams where you can get access to the Maptime organization, your chapter's repo, or other privileges that you think you need.

Once you're all setup, you can add your new chapter to the [map](http://maptime.io/chapters/). With the new re-design all you need to do is add your information in [one place](https://github.com/maptime/maptime.github.io/blob/master/_data/chapters.json) and make a __pull request__. Once your chapter has its first meeting scheduled, you'll see your chapter added to the map and the Chapters listing automatically!

### [Curated resources to get started with mapping](http://maptime.io/lessons-resources/)

One of the great things about Maptime is that people from all disciplines come together to learn about maps. Everyone has their own area of expertise, which has led to a series of tutorials that covers the whole mapping spectrum.

![](/img/maptime-dc.jpg)

Maptime is an open community that loves to share [resources and knowledge](http://maptime.io/lessons-resources/). As more chapters pop up around the world our library of resources continues to grow. This makes it easier for new chapters to get off the ground. Topics so far include {% for topic in site.data.tutorial-tags %}{% if forloop.last %}and {{ topic }}.{% else %}{{ topic }}, {% endif %}{% endfor %}

Have an idea for a lesson or tutorial that you'd like to see Maptime cover? Great! Add a [new issue to the Maptime repository](https://github.com/maptime/maptime/issues/new) and we'll see about making it a reality.

### More options for managing your Chapter website

There are now two great ways to quickly integrate your Chapter with the Maptime community! First, you can [fork](https://github.com/maptime/maptime.github.io/fork) the maptime.io website and add a new directory for your city like `/atlanta`. Each time you post a new blog post or Chapter meeting it will automatically appear both on your Chapter's homepage and on the front of [maptime.io](http://maptime.io)! [Follow the guide here]({{ site.baseurl }}/chapters/start/) for getting started.

Another option is to hit the ground running with our Starter website. All you have to do is [fork Starter](https://github.com/maptime/starter) to your city's repo _within_ the Maptime Organization and your new site will automatically appear at maptime.io/your-city!

![](/img/toronto-page.png)

If all this GitHub jargon is too much for you, but you're still interested in joining the Maptime community with a Chapter of your own give a shout-out to one of our founders, [Alan](https://twitter.com/mappingmashups), on Twitter or send an email to [MaptimeHQ](mailto:hello@maptime.io?Subject=New%20Chapter%20Plz!).

As always, we're about helping. Whether it's maps or getting to know git - we hope the site will encourage your to learn, help, and contribute! So, please...send us your [feedback](mailto:hello@maptime.io)! 
