$(function() {
  var map = L.map('map').setView([55, -70], 4),
  graticule = L.graticule({ interval: 10 });

  L.tileLayer('http://localhost:8888/{z}/{x}/{y}.png', {
      minZoom: 1,
      maxZoom: 9
  }).addTo(map);

  $('#graticules').on("click", function() {
    if ($(this).prop("checked")) {
      map.addLayer(graticule);
    } else {
      map.removeLayer(graticule);
    }
  });

});
