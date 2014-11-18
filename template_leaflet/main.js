// Sostituire MapID con il proprio ID mapbox
var map = L.map('map').setView([45.4588, 9.2010], 9);
  L.tileLayer('http://{s}.tiles.mapbox.com/v3/MapID/{z}/{x}/{y}.png', {
    attribution: Map tiles by <a href="http://stamen.com">Stamen Design</a>, under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>. Data by <a href="http://openstreetmap.org">OpenStreetMap</a>, under <a href="http://www.openstreetmap.org/copyright">ODbL</a>,
    maxZoom: 18
}).addTo(map);

// In alternativa usare le mappe di Stamen (a fondo pagina le istruzioni)
// http://maps.stamen.com/#terrain/12/37.7706/-122.3782

// Tutorial Leaflets
// http://leafletjs.com/examples/quick-start.html