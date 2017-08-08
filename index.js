var markers = []

addMarkerOnClick = () => {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: {lat: 39.849, lng: -104.673}
  })

  map.addListener('click', e => {
   placeMarkerAndPanTo(e.latLng, map);
  })
}

placeMarkerAndPanTo = (latLng, map) => {
  const marker = new google.maps.Marker({
    position: latLng,
    map: map
  })
  map.panTo(latLng)
  const lat = marker.position.lat()
  const lng = marker.position.lng()
  addToMarkerArray(lat, lng)
}

addToMarkerArray = (lat, lng) => {
  markers.push({lat: lat, lng: lng})
  console.log(markers)
}
