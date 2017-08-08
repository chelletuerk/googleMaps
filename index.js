var markerArr = []

addMarkerOnClick = () => {
  const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 2,
    center: {lat: 39.849, lng: -104.673}
  })

  map.addListener('click', (e) => {
   placeMarkerAndPanTo(e.latLng, map);
    })
}

placeMarkerAndPanTo = (latLng, map) => {
  const marker = new google.maps.Marker({
    position: latLng,
    map: map
  })
  map.panTo(latLng)
  console.log(marker.position.lat())
  console.log(marker.position.lng())
  const lat = marker.position.lat()
  const lng = marker.position.lng()
  addToMarkerArray(lat, lng)
}

addToMarkerArray = (lat, lng) => {
  markerArr.push({lat: lat, lng: lng})
  console.log(markerArr)
}
