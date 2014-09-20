L.mapbox.accessToken = 'pk.eyJ1IjoiZ3JhZmEiLCJhIjoiU2U2QnIzUSJ9.4LnG05Ptvi1sUQ8t68rfgw';
var map = L.mapbox.map('map', null, {touchZoom: false, scrollWheelZoom: true});
var stamenLayer = L.tileLayer('http://127.0.0.1:20008/tile/geography-class/{z}/{x}/{y}.png')
    .addTo(map);

var featureLayer = L.mapbox.featureLayer();
    // .addTo(map);

map.setView([42.29,-98.78], 2);

//featureLayer.loadURL('{{site.baseurl}}/chapters/map/maptimes.geojson');
featureLayer.loadURL('./chapters/map/maptimes.geojson');

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
          iconUrl:'./img/maptime-marker.png',
          iconSize: [24,24],
          iconAnchor: [6,12],
          popupAnchor: [5,-10]
        }));
    });
    map.addLayer(clusterGroup);
});