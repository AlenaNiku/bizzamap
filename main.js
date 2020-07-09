
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxpbmlrdWwiLCJhIjoiY2tiY28xbHd4MDNyMzJybnR0czZqYW1xbSJ9.z_-zeSM0wGBIMbwTVT9J-A';

let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/alinikul/ckceg8r0r0wps1iphme3xc375', // my custom stylesheet location
    center: [-0.32, 27.37], // starting position [lng, lat]
    zoom: 1.7 // starting zoom
});

// Add zoom and rotation controls to the map.
map.addControl(new mapboxgl.NavigationControl());

// custom geoJSON for rendering geospatial data of the business locations
let geojson = {
    type: 'FeatureCollection',
    features: [
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
            coordinates: [13.411, 52.537]
        },
        properties: {
            title: 'HubSpot, Berlin, Germany',
            description: 'HubSpot is an American developer and marketer of software products for inbound marketing, sales, and customer service. It was founded by Brian Halligan and Dharmesh Shah in 2006.',
            img: 'images/hubspot_loggo.jpg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [3.736, 51.065]
        },
        properties: {
            title: 'HubSpot, Ghent, Belgium',
            description: 'HubSpot is an American developer and marketer of software products for inbound marketing, sales, and customer service. It was founded by Brian Halligan and Dharmesh Shah in 2006.',
            img: 'images/hubspot_loggo.jpg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-6.255, 53.355]
        },
        properties: {
            title: 'HubSpot, Dublin, Ireland',
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
            coordinates: [-70.646, -33.441]
        },
        properties: {
            title: 'Uber Technologies Inc, Santiago, Chile',
            description: 'Uber Technologies, Inc., commonly known as Uber, is an American multinational ride-hailing company offering services that include peer-to-peer ridesharing, ride service hailing, food delivery, and a micromobility system with electric bikes and scooters.',
            img: 'images/uber.jpeg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-74.127, 4.564]
        },
        properties: {
            title: 'Uber Technologies Inc, Bogota, Colombia',
            description: 'Uber Technologies, Inc., commonly known as Uber, is an American multinational ride-hailing company offering services that include peer-to-peer ridesharing, ride service hailing, food delivery, and a micromobility system with electric bikes and scooters.',
            img: 'images/uber.jpeg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [4.908, 52.370]
        },
        properties: {
            title: 'Uber Technologies Inc, Amsterdam, Netherlands',
            description: 'Uber Technologies, Inc., commonly known as Uber, is an American multinational ride-hailing company offering services that include peer-to-peer ridesharing, ride service hailing, food delivery, and a micromobility system with electric bikes and scooters.',
            img: 'images/uber.jpeg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [2.349, 48.866]
        },
        properties: {
            title: 'Uber Technologies Inc, Paris, France',
            description: 'Uber Technologies, Inc., commonly known as Uber, is an American multinational ride-hailing company offering services that include peer-to-peer ridesharing, ride service hailing, food delivery, and a micromobility system with electric bikes and scooters.',
            img: 'images/uber.jpeg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [31.245, 30.056]
        },
        properties: {
            title: 'Uber Technologies Inc, Cairo, Egypt',
            description: 'Uber Technologies, Inc., commonly known as Uber, is an American multinational ride-hailing company offering services that include peer-to-peer ridesharing, ride service hailing, food delivery, and a micromobility system with electric bikes and scooters.',
            img: 'images/uber.jpeg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [28.004, -26.189]
        },
        properties: {
            title: 'Uber Technologies Inc, Johannessburg, South Africa',
            description: 'Uber Technologies, Inc., commonly known as Uber, is an American multinational ride-hailing company offering services that include peer-to-peer ridesharing, ride service hailing, food delivery, and a micromobility system with electric bikes and scooters.',
            img: 'images/uber.jpeg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [55.384, 25.162]
        },
        properties: {
            title: 'Uber Technologies Inc, Dubai, UAE',
            description: 'Uber Technologies, Inc., commonly known as Uber, is an American multinational ride-hailing company offering services that include peer-to-peer ridesharing, ride service hailing, food delivery, and a micromobility system with electric bikes and scooters.',
            img: 'images/uber.jpeg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [87.844, 26.269]
        },
        properties: {
            title: 'Uber Technologies Inc, Gurgaon, India',
            description: 'Uber Technologies, Inc., commonly known as Uber, is an American multinational ride-hailing company offering services that include peer-to-peer ridesharing, ride service hailing, food delivery, and a micromobility system with electric bikes and scooters.',
            img: 'images/uber.jpeg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [78.469, 17.396]
        },
        properties: {
            title: 'Uber Technologies Inc, Hyderabad, India',
            description: 'Uber Technologies, Inc., commonly known as Uber, is an American multinational ride-hailing company offering services that include peer-to-peer ridesharing, ride service hailing, food delivery, and a micromobility system with electric bikes and scooters.',
            img: 'images/uber.jpeg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [77.550, 12.873]
        },
        properties: {
            title: 'Uber Technologies Inc, Bangalore, India',
            description: 'Uber Technologies, Inc., commonly known as Uber, is an American multinational ride-hailing company offering services that include peer-to-peer ridesharing, ride service hailing, food delivery, and a micromobility system with electric bikes and scooters.',
            img: 'images/uber.jpeg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [103.802, 1.351]
        },
        properties: {
            title: 'Uber Technologies Inc, Singapore',
            description: 'Uber Technologies, Inc., commonly known as Uber, is an American multinational ride-hailing company offering services that include peer-to-peer ridesharing, ride service hailing, food delivery, and a micromobility system with electric bikes and scooters.',
            img: 'images/uber.jpeg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [120.988, 14.593]
        },
        properties: {
            title: 'Uber Technologies Inc, Manila, Phillippines',
            description: 'Uber Technologies, Inc., commonly known as Uber, is an American multinational ride-hailing company offering services that include peer-to-peer ridesharing, ride service hailing, food delivery, and a micromobility system with electric bikes and scooters.',
            img: 'images/uber.jpeg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [151.207, -33.812]
        },
        properties: {
            title: 'Uber Technologies Inc, Sydney, Australia',
            description: 'Uber Technologies, Inc., commonly known as Uber, is an American multinational ride-hailing company offering services that include peer-to-peer ridesharing, ride service hailing, food delivery, and a micromobility system with electric bikes and scooters.',
            img: 'images/uber.jpeg'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-71.062, 42.357]
        },
        properties: {
            title: 'Drift, Boston, MA',
            description: 'Drift.com, Inc. is a conversational marketing and sales technology company based in Boston, USA.',
            img: 'images/drift.png'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [139.643, 35.640]
        },
        properties: {
            title: 'Rakuten, Tokyo, Japan',
            description: 'Rakuten, Inc. is a Japanese electronic commerce and online retailing company based in Tokyo, founded in 1997 by Japanese businessman Hiroshi Mikitani. Its B2B2C E-Commerce platform Rakuten Ichiba is the largest e-commerce site in Japan and among the worlds largest by sales.',
            img: 'images/rakuten.png'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [-97.715, 30.276]
        },
        properties: {
            title: 'SolarWinds, Austin, TX',
            description: 'SolarWinds Inc. is an American company that develops software for businesses to help manage their networks, systems, and information technology infrastructure.',
            img: 'images/solarwinds.png'
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [144.971, -37.792]
        },
        properties: {
            title: 'BDO Australia, Melbourne, Australia',
            description: 'BDO Australia Ltd operates operates as a full-service audit, tax and advisory firm. The Company provides its services around the world.',
            img: 'images/bdo.jpg'
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

// custom geoJSON for testimonials
let geojsonTestimonials = {
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
            img: 'images/Service-Titan.png',
            name: '—Amy Herman, Senior Program Manager',
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [153.034, -27.458]
        },
        properties: {
            title: 'BDO Australia, Brisbane, Australia',
            description: 'Using Bizzabo, we were able to successfully increase attendee engagement, helping us to create an interactive and impactful event experience. ',
            img: 'images/bdo.jpg',
            name: '—Phillip Basil-Jones, National Digital & Online Comm. Admin',
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
            description: 'We are now able to focus less on tedious operations, and more on creating a memorable and seamless experience for our attendees.',
            img: 'images/greenbook.png',
            name: '—Emily Fullmer, Global Events Director',
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
            description: 'Bizzabo platform allowed us to scale our events using the best revenue dashboard I have come across in the event space',
            img: 'images/coindesk-logo-1.png',
            name: '—Dasha Sukovatitsyn, Operations Manager at Coindesk',
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
            description: 'The Bizzabo platform gave our event the social impact we really wanted to see.',
            img: 'images/spains.png',
            name: '—Sofia Benjumea, Co-Founder and CEO',
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
            description: 'From someone who has seen a lot of different platforms over the course of 15 years of running events, Bizzabo is by far the most intuitive platform that I have ever used.”',
            img: 'images/gainsight.png',
            name: '—Lauren Sommers, VP Corporate Events',
        }
    },
    {
        type: 'Feature',
        geometry: {
            type: 'Point',
            coordinates: [34.778, 32.085]
        },
        properties: {
            title: 'Tel Aviv-Yafo, Israel',
            description: 'We were not able to get by trying different things together. We had to find something that had the features that we needed to scale.',
            img: 'images/gainsight.png',
            name: '—Matt Stone, Senior Director of Marketing',
        }
    },]
};

// add markers to map
geojsonTestimonials.features.forEach(marker => {

    // create a HTML element for each feature
    let el = document.createElement('div');
    el.className = 'marker2';

    // make a marker for each feature and add to the map
    new mapboxgl.Marker(el)
        .setLngLat(marker.geometry.coordinates)
        .setPopup(new mapboxgl.Popup({ offset: 25 }) // add popups
            .setHTML(`<h3>${marker.properties.title}</h3><img src="${marker.properties.img}"</img><p>${marker.properties.description}</p><p>${marker.properties.name}</p>`))
        .addTo(map);
});

// change water layer's color with buttons
let swatches = document.getElementById('swatches');
let layer = document.getElementById('layer');
let colors = [
    '#6761ad',
    '#cc7c8d',
    '#4bbacb',
    '#b3a7cc',
    '#f4e5de',
];

colors.forEach(function (color) {
    let swatch = document.createElement('button');
    swatch.style.backgroundColor = color;
    swatch.addEventListener('click', function () {
        map.setPaintProperty(layer.value, 'fill-color', color);
    });
    swatches.appendChild(swatch);
});


