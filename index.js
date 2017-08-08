// var script = document.createElement('script');
//    script.src = 'http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_week.geojsonp';
//    document.getElementsByTagName('head')[0].appendChild(script);
// function initMap() {
//       //  var uluru = {lat: -25.363, lng: 131.044};
//       var denver = {lat: 39.849, lng: -104.673}
//        var map = new google.maps.Map(document.getElementById('map'), {
//          zoom: 4,
//          center: denver
//        })
//        var marker = new google.maps.Marker({
//          position: denver,
//          map: map
//        })
//      }

addMarkerOnClick = () => {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: {lat: 39.849, lng: -104.673}
  })
  map.addListener('click', function(e) {
   placeMarkerAndPanTo(e.latLng, map);
    });

  function placeMarkerAndPanTo(latLng, map) {
    var marker = new google.maps.Marker({
      position: latLng,
      map: map
    });
    map.panTo(latLng)
    console.log(marker.position)
  }
}
