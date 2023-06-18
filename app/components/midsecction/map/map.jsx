
"use client"
import { useState, useEffect, useRef} from 'react';
import React from "react";
import Head from "next/head";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./map.module.css";
// import Loading from "./loading";
const Map = ({
  firstData,
  secondData,
  selectedFirstOption,
  selectedSecondOption
}) => {
  const mapContainerRef = useRef(null); // Add this line
  const [map, setMap] = useState(null);
  // const mapContainerRef = useRef(null);


  const stores = {
    'type': 'FeatureCollection',
    'features': [
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [80.9924978, 16.3884828]
        },
        'properties': {
          'name': 'GIDIVADA',
          'country': 'India' }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [83.027369, 17.712488]
        },
        'properties': {
          'phoneFormatted': '(202) 507-8357',
          'phone': '2025078357',
          'name': 'SANKARAM',
          'city': 'Hyderabad',
          'country': 'India',
          'Street': 'KPHB',
          'postalCode': '50072',
          'state': 'Telangana'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [79.0694421, 14.7712253]
        },
        'properties': {
          'phoneFormatted': '(202) 387-9338',
          'phone': '2023879338',
          'name': 'ANANTHARAJUPURAM',
          'city': 'Hyderabad',
          'country': 'India',
          'Street': 'KPHB',
          'postalCode': '50072',
          'state': 'Telangana'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [77.57303, 15.165795]
        },
        'properties': {
          'phoneFormatted': '(202) 337-9338',
          'phone': '2023379338',
          'name': 'OBULAPURAM',
          'city': 'Hyderabad',
          'country': 'India',
          'Street': 'KPHB',
          'postalCode': '50072',
          'state': 'Telangana'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [78.6794481, 13.9422946]
        },
        'properties': {
          'phoneFormatted': '(202) 547-9338',
          'phone': '2025479338',
          'name': 'CHINNAMANDEM1',
          'city': 'Hyderabad',
          'country': 'India',
          'Street': 'KPHB',
          'postalCode': '50072',
          'state': 'Telangana'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [79.971209, 15.904490]
        },
        'properties': {
          'phoneFormatted': '(301) 654-7336',
          'phone': '3016547336',
          'name': 'CHINNAKOTHAPALLI',
          'city': 'Hyderabad',
          'country': 'India',
          'Street': 'KPHB',
          'postalCode': '50072',
          'state': 'Telangana'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [79.2094591, 13.1751379]
        },
        'properties': {
          'phoneFormatted': '(301) 654-7336',
          'phone': '3016547336',
          'name': 'BNRPETA',
          'city': 'Hyderabad',
          'country': 'India',
          'Street': 'KPHB',
          'postalCode': '50072',
          'state': 'Telangana'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [81.9676504, 16.5862821]
        },
        'properties': {
          'phoneFormatted': '(571) 203-0082',
          'phone': '5712030082',
          'name': 'BANDARULANKA1',
          'city': 'Hyderabad',
          'country': 'India',
          'Street': 'KPHB',
          'postalCode': '50072',
          'state': 'Telangana'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [81.729724, 16.9989277]
        },
        'properties': {
          'phoneFormatted': '(703) 522-2016',
          'phone': '7035222016',
          'name': 'VEMULURU',
          'city': 'Hyderabad',
          'country': 'India',
          'Street': 'KPHB',
          'postalCode': '50072',
          'state': 'Telangana'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [81.2611993, 16.8110387]
        },
        'properties': {
          'phoneFormatted': '(610) 642-9400',
          'phone': '6106429400',
          'name': 'BHIMADOLE1',
          'city': 'Hyderabad',
          'country': 'India',
          'Street': 'KPHB',
          'postalCode': '50072',
          'state': 'Telangana'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [80.5258609, 16.4542985]
        },
        'properties': {
          'phoneFormatted': '(215) 386-1365',
          'phone': '2153861365',
          'name': 'KURAGALLU',
          'city': 'Hyderabad',
          'country': 'India',
          'Street': 'KPHB',
          'postalCode': '50072',
          'state': 'Telangana'
        }
      },
      {
        'type': 'Feature',
        'geometry': {
          'type': 'Point',
          'coordinates': [82.223411, 17.081278]
        },
        'properties': {
          'phoneFormatted': '(202) 331-3355',
          'phone': '2023313355',
          'name': 'CHANDRAMAPALLI',
          'city': 'Hyderabad',
          'country': 'India',
          'Street': 'KPHB',
          'postalCode': '50072',
          'state': 'Telangana'
        }
      }
    ]
  };

  /**
   * Assign a unique id to each store. You'll use this `id`
   * later to associate each point on the map with a listing
   * in the sidebar.
   */
  stores.features.forEach((store, i) => {
    store.properties.id = i;
  });

console.log("i am at map",firstData )
console.log("i am at map",selectedFirstOption )
  mapboxgl.accessToken = 'pk.eyJ1IjoiYXZpbjI1MjUiLCJhIjoiY2xpeXhkMm5uMDEwcjNuczNyeXl6MWxmZyJ9.u1RrljqlwQckvFpSWhyGvA'
  useEffect(() => {
    const initializeMap = () => {
      const mapInstance = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: "mapbox://styles/mapbox/streets-v12",
        center: [81.95565, 15.7973],
        zoom: 6.0,
      });

      mapInstance.addControl(new mapboxgl.NavigationControl(), 'top-right');

      setMap(mapInstance);
    };

    if (!map) {
      initializeMap();
    }

    return () => {
      if (map) {
        map.remove();
      }
    };
  }, [map]);


  useEffect(() => {
    console.log("map" ,firstData )
    if (map && firstData) {
      const { features } = firstData;

      // Remove existing layers
      const layerIds = map.getStyle().layers.map(layer => layer.id);
      layerIds.forEach(layerId => {
        if (layerId.startsWith('data-')) {
          map.removeLayer(layerId);
        }
      });

      // Remove existing sources
      const sourceIds = Object.keys(map.getStyle().sources);
      sourceIds.forEach(sourceId => {
        if (sourceId.startsWith('data-')) {
          map.removeSource(sourceId);
        }
      });
      
      // Iterate over the features and apply different colors based on the selected option
      features.forEach((feature, index) => {
        const isSelected = selectedFirstOption === feature.properties.NAME; 
        map.addSource(`data-${index}`, {
          type: 'geojson',
          data: feature,
        });
        
        map.addLayer({
          id: `data-${index}-layer`,
          type: 'line',
          source: `data-${index}`,
          paint: {
            'line-color': isSelected ? '#ff7f50' : null,
            'line-opacity': isSelected ? 1 : 0.5,
            'line-width': 5
          },
        });
        
        if (isSelected) {
          const bounds = new mapboxgl.LngLatBounds();
          feature.geometry.coordinates.forEach(coord => {
            coord.forEach(point => {
              bounds.extend(point);
            });
          });
          map.fitBounds(bounds, { padding: 20 });
        }
      });
    }
  }, [selectedFirstOption]);

  useEffect(() => {
    if (map && secondData && stores) {
      const { features } = secondData;

      // Remove existing layers
      const layerIds = map.getStyle().layers.map(layer => layer.id);
      layerIds.forEach(layerId => {
        if (layerId.startsWith('data-')) {
          map.removeLayer(layerId);
        }
      });

      // Remove existing sources
      const sourceIds = Object.keys(map.getStyle().sources);
      sourceIds.forEach(sourceId => {
        if (sourceId.startsWith('data-')) {
          map.removeSource(sourceId);
        }
      });

      // Iterate over the features and apply different colors based on the selected option
      features.forEach((feature, index) => {
        const isSelected = selectedSecondOption === feature.properties.sdtname;

        map.addSource(`data-${index}`, {
          type: 'geojson',
          data: feature,
        });

        map.addLayer({
          id: `data-${index}-layer`,
          type: 'line',
          source: `data-${index}`,
          paint: {
            'line-color': isSelected ? '#ff7f50' : '',
            'line-opacity': isSelected ? 1 : 0.5,
            'line-width': 3
          },
        });

        if (isSelected) {
          const bounds = new mapboxgl.LngLatBounds();
          feature.geometry.coordinates.forEach(coord => {
            coord.forEach(point => {
              bounds.extend(point);
            });
          });
          map.fitBounds(bounds, { padding: 20 });
        }
      }); 
        map.addSource('places', {
          'type': 'geojson',
          'data': stores
        });
        buildLocationList(stores);
        addMarkers();
    }
  }, [selectedSecondOption], [stores]);
  
  
  
  /**
   * Add a marker to the map for every store listing.
   **/
  function addMarkers() {
    /* For each feature in the GeoJSON object above: */
    for (const marker of stores.features) {
      /* Create a div element for the marker. */
      const el = document.createElement('div');
      /* Assign a unique `id` to the marker. */
      el.id = `marker-${marker.properties.id}`;
      /* Assign the `marker` class to each marker for styling. */
      el.className = styles.marker;
  
      /**
       * Create a marker using the div element
       * defined above and add it to the map.
       **/
      new mapboxgl.Marker(el, { offset: [0, -23] })
        .setLngLat(marker.geometry.coordinates)
        .addTo(map);
  
      /**
       * Listen to the element and when it is clicked, do three things:
       * 1. Fly to the point
       * 2. Close all other popups and display popup for clicked store
       * 3. Highlight listing in sidebar (and remove highlight for all other listings)
       **/
      el.addEventListener('click', (e) => {
        /* Fly to the point */
        flyToStore(marker);
        /* Close all other popups and display popup for clicked store */
        createPopUp(marker);
        /* Highlight listing in sidebar */
        const activeItem = document.getElementsByClassName('active');
        e.stopPropagation();
        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }
        const listing = document.getElementById(
          `listing-${marker.properties.id}`
        );
        listing.classList.add('active');
      });
    }
  }
  
  /**
   * Add a listing for each store to the sidebar.
   **/
  function buildLocationList(stores) {
    for (const store of stores.features) {
      /* Add a new listing section to the sidebar. */
      const listings = document.getElementById('listings');
      const listing = listings.appendChild(document.createElement('div'));
      /* Assign a unique `id` to the listing. */
      listing.id = `listing-${store.properties.id}`;
      /* Assign the `item` class to each listing for styling. */
      listing.className = styles.item;
  
      /* Add the link to the individual listing created above. */
      const link = listing.appendChild(document.createElement('a'));
      link.href = '#';
      link.className = styles.title;
      link.id = `link-${store.properties.id}`;
      link.innerHTML = `${store.properties.name}`;
  
      /* Add details to the individual listing. */
      const details = listing.appendChild(document.createElement('div'));
      details.innerHTML = `${store.properties.city}`;
      if (store.properties.phone) {
        details.innerHTML += ` &middot; ${store.properties.phoneFormatted}`;
      }
  
      /**
       * Listen to the element and when it is clicked, do four things:
       * 1. Update the `currentFeature` to the store associated with the clicked link
       * 2. Fly to the point
       * 3. Close all other popups and display popup for clicked store
       * 4. Highlight listing in sidebar (and remove highlight for all other listings)
       **/
      link.addEventListener('click', function () {
        for (const feature of stores.features) {
          if (this.id === `link-${feature.properties.id}`) {
            flyToStore(feature);
            createPopUp(feature);
          }
        }
        const activeItem = document.getElementsByClassName('active');
        if (activeItem[0]) {
          activeItem[0].classList.remove('active');
        }
        this.parentNode.classList.add('active');
      });
    }
  }
  
  /**
   * Use Mapbox GL JS's `flyTo` to move the camera smoothly
   * a given center point.
   **/
  function flyToStore(currentFeature) {
    map.flyTo({
      center: currentFeature.geometry.coordinates,
      zoom: 15
    });
  }
  
  // /**
  //  * Create a Mapbox GL JS `Popup`.
  //  **/
  function createPopUp(currentFeature) {
    const popUps = document.getElementsByClassName('mapboxgl-popup');
    if (popUps[0]) popUps[0].remove();
    const popup = new mapboxgl.Popup({ closeOnClick: false })
      .setLngLat(currentFeature.geometry.coordinates)
      .setHTML(
        `<h3>SECRETARIAT NAME</h3><h4>${currentFeature.properties.name}</h4>`
      )
      .addTo(map);
  }





// console.log("I am okay", selectedOption)
  return (
  <div  className={styles.container}>
    {/* <Suspense fallback={<Loading/>}> */}
      {/* <h2>Target Component</h2> */}
      {/* <p>First Data: {JSON.stringify(firstData)}</p> */}
      <div ref={mapContainerRef} className={styles.map} />
      {/* <Section selectedOption={selectedOption} /> */}
      {/* <p>First Selected  Option: {selectedOption}</p>
      <p>second Selected Option: {anotherSelectedOption}</p>
      {/* <p>Selected Second Option: {selectedSecondOption}</p> */}
      {/* <p>Second Dropdown Options: {JSON.stringify(secondDropdownOptions)}</p> */} 
   {/* </Suspense> */}
   </div>
  );
};

export default Map;
