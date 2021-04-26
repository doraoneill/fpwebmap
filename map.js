'use strict'       


console.log('Loaded map.js')


mapboxgl.accessToken = 'pk.eyJ1IjoiZG9yYW9uZWlsbCIsImEiOiJja254cTlmd28wYzgxMm9wNm5zNGN1bDd0In0.GqXFCLhh7WMsZBfH7eLKsQ'

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-streets-v10',
    center: [2.609253, 28.897288],
    zoom: 4.5
});

var migrationphotos_url = "./data/migrationphotos.geojson"


map.on('load',function(){

    map.addSource('migrationphotos_data',{
      'type':'geojson',
      'data': "./data/migrationphotos.geojson"
    });
 
    map.addLayer({
      'id':'migrationphotos',
      'type':'circle',
      'source':'migrationphotos_data',
      'paint':{
        'circle-radius':8,
        'circle-color': '#349f27',
        'circle-opacity':0.7
      },
    })
  
  
  });