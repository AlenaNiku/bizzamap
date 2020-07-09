
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxpbmlrdWwiLCJhIjoiY2tiY28xbHd4MDNyMzJybnR0czZqYW1xbSJ9.z_-zeSM0wGBIMbwTVT9J-A';

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/alinikul/ckceg8r0r0wps1iphme3xc375', // my custom stylesheet location
    center: [-17.32, 27.37], // starting position [lng, lat]
    zoom: 1.5 // starting zoom
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// custom geoJSON for rendering geospatial data of the business locations
let geojson = {
    type: 'FeatureCollection',
    features: [{
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-118.253, 34.133]
        },
        properties: {
            title: 'ServiceTitan, Glendale, CA',
            description: 'Bizzabo allowed us to cut the event administration process down by giving us more control to manage changes in real-time to sessions, speakers, or agendas. That is a powerful addition to our process.',
            name: '—Amy Herman, Senior Program Manager',
            img: 'images/Service-Titan.png'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-122.265, 37.470]
        },
        properties: {
            title: 'Gainsight, Redwood City, CA',
            description: 'Gainsight is a SaaS platform that is largely responsible for defining the customer success category. Critical to Gainsight’s market presence is the Pulse brand.',
            name: '—Amy Herman, Senior Program Manager',
            img: 'images/gainsight.png'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-84.399, 33.779]
        },
        properties: {
            title: 'GreenBook, Worldwide',
            description: 'GreenBook is one of the foremost market research companies in the world. Every year they hold several global conferences to create connections within consumer insights by bringing together the most innovative voices in the industry. Out of all of these conferences none is greater than IIeX (Insight Innovation Exchange) North America, which features over 150 speakers for 3 full days of groundbreaking content.',
            name: '—Amy Herman, Senior Program Manager',
            img: 'images/greenbook.png'
        }
    },]
};

// add markers to map
geojson.features.forEach(marker => {

    // create a HTML element for each feature
    let el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(`<h3>${marker.properties.title}</h3><img src="${marker.properties.img}"</img><p>${marker.properties.description}</p><p>${marker.properties.name}</p>`))
        .addTo(map);
});