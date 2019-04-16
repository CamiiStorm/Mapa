// This is a JavaScript file

mapquest.key = '	xHmkdc5vLO1qt3U9ooBdyjIV2DAupiwY';
var baseLayer = mapquest.tileLayer('dark');

mapquest.geocoding().geocode(['New York, NY'], showMap);

function showMap(err, data) {
  var map = createMap();
  map.addControl(mapquest.control());
  addLayerControl(map);
}

function createMap() {
  var map = mapquest.map('map', {
    center: [40.7237, -73.9825],
    zoom: 14,
    layers: baseLayer
  });
  return map;
}

function addLayerControl(map) {
  L.control.layers({
    'Map': mapquest.tileLayer('map'),
    'Satellite': mapquest.tileLayer('satellite'),
    'Hybrid': mapquest.tileLayer('hybrid'),
    'Light': mapquest.tileLayer('light'),
    'Dark': baseLayer
  }, {}, { position: 'topleft'}).addTo(map);
}


   window.onload = function() {

     var onSuccess = function(position){
        L.mapquest.key = 'xHmkdc5vLO1qt3U9ooBdyjIV2DAupiwY';
        var map = L.mapquest.map('map', {
          center: [position.coords.latitude, position.coords.longitude],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
        });   

        map.addControl(L.mapquest.control());
        }

        navigator.geolocation.getCurrentPosition(onSuccess);
    }

