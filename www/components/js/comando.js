// This is a JavaScript file

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


