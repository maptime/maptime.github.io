---
layout: post
title: Notes from Intro to OSM!
category: blog

description: "I’ve had an account since SOTM (June 2013), and while I’ve been actively evangelizing OSM to friends and family (e.g. telling my young cousins that there’s a new map ‘game’ where you can map your neighborhood, like Sim City), I hadn’t yet made any edits or contributed anything."
---

by Camille

I made my first edits to OSM a few weeks ago at our OSM 101 Maptime!  I’ve had an account since SOTM (June 2013), and while I’ve been actively evangelizing OSM to friends and family (e.g. telling my young cousins that there’s a new map ‘game’ where you can map your neighborhood, like Sim City), I hadn’t yet made any edits or contributed anything. There’s now been a cosmic shift. Watch out world, you’re going to get mapped.

Here, in note form, is some of what we learned (this a mashup of Beth’s notes and mine):
<!--more-->
Save your edits!

### A Tale of Two Editors:

 - iD - a new editor that runs in the browser. Easy to use, and full of features. The editor we were using.
 - JOSM - runs in Java, not JS. JOSM is editor of choice for ‘power-users’ because of the many plugins task oriented workflows that are optimized for JOSM (but do not exist yet for iD). For example, the Humanitarian Open Street Map Team Tasking Manager (tasks.hotosm.org) uses JOSM for sharing the grueling work of mapping disaster zones and other areas of humanitarian focus.

### Best Practices:

 - When tracing buildings, trace the footprint of the building (where the building hits the ground), as opposed to the shape of the roof. Sometimes, the aerial imagery is a little tilted.

### Copyright, Public Domain, and Licensing:

 - Since OSM uses an open license, and any data that is put into OSM falls under that license. If you do not hold the license to the data, or it’s not in the public domain, you shouldn’t add it to OSM!
 - Examples of off-limits copyrighted data: Google Map data, Bing Map data (their satellite imagery is OK)
 - The guaranteed way to go (as far as public domain and copyright) is to walk down a street with your editor open (mobile, anyone?) and add things you can see! Can you kick that cornerstone? Read that sign? You can add it.
 - Copyright Easter Eggs are a thing! Don’t even try!
   - E.g.: a Trap Street is fictitious entry on a map. If it appears on another map, then the mapmaker knows whether someone has copied data that they should not have.

Did you remember to save your edits?

### Make a note!

 - Notes are on the map as the red points with white X’s
 - A note is a way to get things edited/added/deleted/noticed if you are unable to edit or feel like an expert is required. If this is the case, make a note!

### What happens when you load a map?

 - Serving Tiles: The map tiles are ‘rendered,’ or compressed into .pngs when you are load a region within the bounding box in the browser. What is rendered is determined by the zoom level. Some objects are ‘thrown out’ at certain zoom levels for clarity’s sake. For example, minor streets may be tossed in favor of major roads and freeways at low zoom levels.
 - Rendering to raster: When you load a region, the map turns the data from vector to raster and compresses that data into .png files. In previously unviewed regions/zoom levels, this happens on the fly, however, popular locations may be pre-rendered and cached. The whole world at zoom level 10 is practically all pre-rendered, however, higher zoom levels may not be.
 - Seeing edits rendered: Beth noticed that when she added a building, she could see it at one zoom but not another. This is because the tile servers render at different times for different zooms sometimes.

### Resources!

 - Learn OSM by the Humanitarian OSM Team (HOT)
 - OSM Wiki
 - help.openstreetmap.org
 - OSM IRC Channels (check out #osm-us for US updates, a bot sends messages out when people edit! Others: #osm, #osm-dev, #hot, #openstreetmap
 - [lists.openstreetmap.org](lists.openstreetmap.org) (has an event calendar)


Are your edits saved? Better be! :)