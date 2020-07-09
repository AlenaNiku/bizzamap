
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
            description: 'ServiceTitan prides itself in providing an intuitive all-in-one software for home service businesses. However, the polished customer experience in their product was not reflected in the attendee experience of previous events. Prior to Bizzabo, ServiceTitan event attendees couldn’t see the event agenda on their phones or check-in onsite in an efficient manner. The registration tool was also separate from their other tools. As a result, it was difficult to sync and analyze data.',
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
            img: 'images/greenbook.png'
        }
    },]
};