
"use client"
import { useState, useEffect, useRef } from 'react';
import React from "react";
import Head from "next/head";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import styles from "./map.module.css"
const Map = ({
  firstData,
  secondData,
  selectedFirstOption,
  secondSelectedOption
}) => {
  const mapContainerRef = useRef(null); // Add this line
  const [map, setMap] = useState(null);
  // const [firstData, setFirstData] = useState(null);
  // const [secondData, setSecondData] = useState(null);
  // const [selectedFirstOption, setSelectedFirstOption] = useState('');

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
console.log("i am entered into first selection")
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
      console.log("i am at map 71 line",selectedFirstOption )
      // Iterate over the features and apply different colors based on the selected option
      features.forEach((feature, index) => {
        const isSelected = selectedFirstOption === feature.properties.NAME; // coming from probs me
console.log("hvhvhv", isSelected)
        map.addSource(`data-${index}`, {
          type: 'geojson',
          data: feature,
        });
        console.log("i am at map 80 line",selectedFirstOption )
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
        console.log("i am at map 91 line",selectedFirstOption )
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







// console.log("I am okay", selectedOption)
  return (
    <div > 
    <main className={styles.main}>
      {/* <h2>Target Component</h2> */}
      {/* <p>First Data: {JSON.stringify(firstData)}</p> */}
      <div ref={mapContainerRef} className={styles.map} />
      {/* <Section selectedOption={selectedOption} /> */}
      {/* <p>First Selected  Option: {selectedOption}</p>
      <p>second Selected Option: {anotherSelectedOption}</p>
      {/* <p>Selected Second Option: {selectedSecondOption}</p> */}
      {/* <p>Second Dropdown Options: {JSON.stringify(secondDropdownOptions)}</p> */} 
   </main>
   <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v2.9.1/mapbox-gl.js'></script>
    </div>
  );
};

export default Map;
