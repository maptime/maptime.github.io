---
---
{% include js/mapbox-2.1.0.min.js %}
{% include js/leaflet-markercluster-0.4.0.min.js %}
{% include js/handlebars-2.0.min.js %}

$(function() {
  var source   = $("#chapters-template").html(),
      $output = $("#chapters-output");
      template = Handlebars.compile(source),
      data = {{ site.data.chapters | jsonify }},
      html = '';

    var map = L.map('map', {
      touchZoom: false,
      scrollWheelZoom: false,
      zoomControl: false,
      worldCopyJump: true
    }).setView([39.774769485295465,-84.55078125], 3);

    L.tileLayer('https://watercolormaps.collection.cooperhewitt.org/tile/watercolor/{z}/{x}/{y}.jpg', {
      attribution: 'Map tiles by Stamen Design, under CC BY 3.0. Data by OpenStreetMap, under CC BY SA.',
      maxZoom: 18
    }).addTo(map);

    L.control.zoom()
      .setPosition('bottomleft')
      .addTo(map);

    var chapterMarkers = L.geoJson( data, {
      onEachFeature: function (feature, layer) {
        var popupOptions = {'maxWidth' : '1000'};  
        var popupContent = '<h2>'+ feature.properties.title +'</h2>';
        if (feature.properties.location && feature.properties.location.length  > 0) {
          popupContent = popupContent + '<h3>'+ feature.properties.location +'</h3>';
        }
        if (feature.properties.twitter && feature.properties.twitter.length  > 0) {
          popupContent = popupContent + 'Twitter: ' + '<a href="http://twitter.com/' + 
            feature.properties.twitter + '" target="_blank">@' + feature.properties.twitter +'</a>';
        }
        layer.bindPopup(popupContent,popupOptions);
        layer.setIcon(new L.Icon({
          iconUrl:'/img/maptime-marker.png',
          iconSize: [24,24],
          iconAnchor: [6,12],
          popupAnchor: [5,-10]
        }));
      }
    });

    var clusterGroup = new L.MarkerClusterGroup({
      showCoverageOnHover: false, 
      maxClusterRadius: 30
    });

    clusterGroup.addLayer(chapterMarkers);
    map.addLayer(clusterGroup);

    // Fit map bounds to chapters.json
    console.log(chapterMarkers.getBounds());
    map.fitBounds(chapterMarkers.getBounds());

    // Sort alphabetically; capitalization matters!
    function sortAlphabetically(a,b) {
      if (a.properties.title < b.properties.title)
         return -1;
      if (a.properties.title > b.properties.title)
        return 1;
      return 0;
    }

    // Sort chapters, comile data, append to body of page
    data.features.sort(sortAlphabetically);
    html = template(data);
    $output.append(template(data));
});
