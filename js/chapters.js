---
---
{% include js/mapbox-2.1.0.min.js %}
{% include js/leaflet-markercluster-0.4.0.min.js %}

$(function() {
  L.mapbox.accessToken = 'pk.eyJ1IjoiZ3JhZmEiLCJhIjoiU2U2QnIzUSJ9.4LnG05Ptvi1sUQ8t68rfgw';
    var map = L.mapbox.map('map', null, {
      touchZoom: false, 
      scrollWheelZoom: false,
      zoomControl: false,
      worldCopyJump: true
    });

    // swap out layers and token periodically
    var myLayer = L.tileLayer('http://api.tiles.mapbox.com/v4/grafa.88128171/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZ3JhZmEiLCJhIjoiU2U2QnIzUSJ9.4LnG05Ptvi1sUQ8t68rfgw')
        .addTo(map);

    L.control.zoom()
      .setPosition('bottomleft')
      .addTo(map);

    var featureLayer = L.mapbox.featureLayer();

    map.setView([39.774769485295465,-84.55078125], 3);
    featureLayer.loadURL('./map/maptimes.geojson');

    featureLayer.on('ready', function(e) {
        // The clusterGroup gets each marker in the group added to it
        // once loaded, and then is added to the map
        
        var clusterGroup = new L.MarkerClusterGroup({
          showCoverageOnHover: false, 
          maxClusterRadius: 30
        });
        
        e.target.eachLayer(function(marker) {
            clusterGroup.addLayer(marker);
            var popupContent = '<h2>'+ marker.feature.properties.title +'</h2>' +
              'Twitter: ' + '<a href="http://twitter.com/' + marker.feature.properties.twitter + '" target="_blank">@' + marker.feature.properties.twitter +'</a>';
            // and bind it to the marker
            marker.bindPopup(popupContent);
            marker.setIcon(new L.Icon({
              iconUrl:'./map/maptime-marker.png',
              iconSize: [24,24],
              iconAnchor: [6,12],
              popupAnchor: [5,-10]
            }));
        });
        map.addLayer(clusterGroup);
    });
});