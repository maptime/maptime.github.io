---
layout: post
title: What a difference the data makes!
category: blog

description: "Tonight I’m playing around with map things. First, I discovered that within a shapefile there is really and truly data!"
---

!["Watercolor map of SF"](/img/stamen-watercolor.png "Watercolor map of SF")

!["Watercolor map of SF with a shapefile"](/img/stamen-watercolor-map-stack.png "Watercolor map of SF with a shapefile")

Tonight I’m playing around with map things. First, I discovered that within a shapefile there is really and truly data! The top image is produced in QGIS, simply by [opening this data file](https://data.sfgov.org/Facilities-and-Structures/Building-Footprints-Zipped-Shapefile-Format-/jezr-5bxm) and then turning on the Stamen watercolor layer. No alignment needed! (But here is the necessary attribution to Watercolor: Map tiles by [Stamen Design](http://stamen.com/), under [CC BY 3.0](http://creativecommons.org/licenses/by/3.0). Data by [OpenStreetMap](http://openstreetmap.org/), under [CC BY SA](http://creativecommons.org/licenses/by-sa/3.0).)
<!--more-->
Just the other day, Stamen released a project called [Map Stack](http://mapstack.stamen.com/), which allows you to make similar images in seconds. I wondered if it would be faster simply to make the image on Map Stack. While indeed, it was much faster, the difference was in the data. As you can see, the data set from data.sfgov.org is far more complete that the one being used in Map Stack, which I believe is from OSM.

Not sure if there is a way to upload this data to OSM. Will look into how that works. 