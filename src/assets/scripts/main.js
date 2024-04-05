/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();


import L from 'leaflet';

// Coordenadas de la Puerta de Brandeburgo en Berlín
const berlinCoordinates = [52.5163, 13.3779];

// Crea una instancia del mapa y configura la vista inicial
const map = L.map('map').setView(berlinCoordinates, 13);

// Capa de mosaico (tile layer) de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Marcador en la Puerta de Brandeburgo
const marker = L.marker(berlinCoordinates).addTo(map);


const circle = L.circle(berlinCoordinates, {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(map);

// Define las coordenadas del polígono (por ejemplo, un triángulo alrededor de la Puerta de Brandeburgo)
const triangleCoords = [
  [52.5163, 13.3779],
  [52.5180, 13.3790],
  [52.5172, 13.3810]
];

// polígono utilizando las coordenadas definidas
const polygon = L.polygon(triangleCoords, { color: '$corporate-dark-green' }).addTo(map);
