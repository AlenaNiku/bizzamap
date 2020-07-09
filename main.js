
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