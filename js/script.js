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

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 