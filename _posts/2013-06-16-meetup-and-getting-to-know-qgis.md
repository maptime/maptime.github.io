---
layout: post
title: "Notes: 6.11.13 meetup + getting started with QGIS"
category: blog

description: "Last Thursday, a few of us gathered at the Stamen office to free form learn mapmaking. For about 2 hours, we sat together listening to music and working on mapmaking projects."
---

Last Thursday, a few of us gathered at the Stamen office to free form learn mapmaking. For about 2 hours, we sat together listening to music and working on mapmaking projects. Most of the people in the group are just learning how to make maps (Camille, Kristina, me). Mike and Chris know more and helped us a lot, which was great, especially considering that the very first steps of getting a map editor up and running can be a little cumbersome. Without Chris, I may still be hunting for links.

!["Intro to QGIS"](/img/qgis.png "Intro to QGIS")

Here are the steps Chris shared with me, which will help get you up and running (if you have Mac). 
<!--more-->

!["Intro to QGIS"](/img/qgis-2.png "Intro to QGIS")

### Get started with mapping!

 1. Go to KyngChaos, and download and install GSL, GDAL, and QGIS.
 2. Grab some Open Street Map data. If you want to download a whole city, check out Metro Extracts and bbbike.org. This will take a little bit of time. Good moment to grab a snack or answer that email (you know the one).
 3. I ended up getting impatient and so I ended up at Natural Earth, where I downloaded the Natural Earth Quick Start Kit. 
 4. Open Natural_Earth_quick_start_for_QGIS.qgs
 5. Start playing with layers!

### More notes and learnings

 - Kristina alerted me of the QGIS Open Layers plugin, which allows you to use styles from maps.stamen.com. 
 - KML files can be saved as KMZ files, which QGIS can read. Merge Shapes is a plugin that allows multiple KMZ files. Merged shapes end up as s vector.
 - DEM = digital elevation model
 - How to import data from a CSV into QGIS (which I haven’t done successfully yet)
 - SRTM = NASA’s Shuttle Radar Topography Mission = source of elevation data of the whole word, in a slightly lower resolution.

### Some quotes from the evening

 - "cartography is all about generalization”
 - "it’s got different colors for different types of dead pedestrians" - Camille, referring to her shape file exploration