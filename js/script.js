function myMap() {
  var chicago = new google.maps.LatLng(41.850, -87.650);
  
  var mapOptions = {
    zoom: 4,
    center: chicago,
    mapTypeId: 'hybrid'
  };
  
  var googleMap = new google.maps.Map(document.getElementById('googleMap'),
    mapOptions);
  
  var marker = new google.maps.Marker({
    map: googleMap,
    position: chicago,
    animation: google.maps.Animation.DROP,
    title: 'Chicago Marker'
  });

}