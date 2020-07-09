
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
            description: 'ServiceTitan provides operational software for home services businesses. What makes their events so unique is the strong focus on educational content. From Power User Workshops, Implementation Bootcamps, and the flagship user conference Pantheon, ServiceTitan unlocks key learnings for their avid users and prospects to deliver event experiences curated for professional growth.',
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
            description: 'Gainsight is a SaaS platform that is largely responsible for defining the customer success category. Critical to Gainsight’s market presence is the Pulse brand. First launched in 2012, Gainsight’s Pulse has grown from an annual user conference to an omnipresent, year-round initiative comprised of events across the world. Pulse North America alone has managed to scale from 300 to over 6,000 attendees.',
            img: 'images/gainsight.png'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-3.688, 40.430]
        },
        properties: {
            title: 'Spain Startup, Madrid, Spain',
            description: 'Spain Startup organizes one of the leading startup conferences in the South of Europe. At South Summit, the best talent from the Mediterranean and Latin America meet leading investors and innovative companies from around the world. The Summit brings together top startups and industry leaders for 3 days of innovation, learning, and top-notch networking.',
            img: 'images/spains.png'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-73.988, 40.750]
        },
        properties: {
            title: 'CoinDesk, New York, NY',
            description: 'CoinDesk is a news site specializing in bitcoin and digital currencies. The site was founded by Shakil Khan and was subsequently acquired by Digital Currency Group.',
            img: 'images/coindesk-logo-1.png'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-71.112, 42.378]
        },
        properties: {
            title: 'HubSpot, Cambridge, MA',
            description: 'HubSpot is an American developer and marketer of software products for inbound marketing, sales, and customer service. It was founded by Brian Halligan and Dharmesh Shah in 2006.',
            img: 'images/hubspot_loggo.jpg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-122.436, 37.773]
        },
        properties: {
            title: 'Uber Technologies Inc, San Francisco, CA',
            description: 'Uber Technologies, Inc., commonly known as Uber, is an American multinational ride-hailing company offering services that include peer-to-peer ridesharing, ride service hailing, food delivery, and a micromobility system with electric bikes and scooters.',
            img: 'images/uber.jpeg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-0.164, 51.590]
        },
        properties: {
            title: 'Uber Technologies Inc, London, UK',
            description: 'Uber Technologies, Inc., commonly known as Uber, is an American multinational ride-hailing company offering services that include peer-to-peer ridesharing, ride service hailing, food delivery, and a micromobility system with electric bikes and scooters.',
            img: 'images/uber.jpeg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-99.134, 19.425]
        },
        properties: {
            title: 'Uber Technologies Inc, Mexico City, Mexico',
            description: 'Uber Technologies, Inc., commonly known as Uber, is an American multinational ride-hailing company offering services that include peer-to-peer ridesharing, ride service hailing, food delivery, and a micromobility system with electric bikes and scooters.',
            img: 'images/uber.jpeg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-79.396, 43.676]
        },
        properties: {
            title: 'Uber Technologies Inc, Toronto, Canada',
            description: 'Uber Technologies, Inc., commonly known as Uber, is an American multinational ride-hailing company offering services that include peer-to-peer ridesharing, ride service hailing, food delivery, and a micromobility system with electric bikes and scooters.',
            img: 'images/uber.jpeg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-46.639, -23.551]
        },
        properties: {
            title: 'Uber Technologies Inc, Sao Paulo, Brazil',
            description: 'Uber Technologies, Inc., commonly known as Uber, is an American multinational ride-hailing company offering services that include peer-to-peer ridesharing, ride service hailing, food delivery, and a micromobility system with electric bikes and scooters.',
            img: 'images/uber.jpeg'
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

// add markers to map
geojson.features.forEach(marker => {

    // create a HTML element for each feature
    let el = document.createElement('div');
    el.className = 'marker';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(`<h3>${marker.properties.title}</h3><img src="${marker.properties.img}"</img><p>${marker.properties.description}</p>`))
        .addTo(map);
});