$(function() {
  var map = L.map('map').setView([55, -70], 4);
  L.tileLayer('http://localhost:8888/{z}/{x}/{y}.png', {
      minZoom: 1,
      maxZoom: 9
  }).addTo(map);
  map.on('load', function(e) {
      console.log("loaded");
  });  
});
