function myMap() {
    var mapProp= {
      center:new google.maps.LatLng(41,-87),
      zoom:4,
    };
    
   var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
   }