"use client";
import React, { useState, useEffect } from "react";
import mapboxgl from "mapbox-gl";
import styles from "./section.module.css";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Divider from "@mui/material/Divider";
import TargetComponent from "../map/map";

const Section = ({ handleOptionChange }) => {
  const [firstData, setFirstData] = useState(null);
  const [secondData, setSecondData] = useState(null);
  const [selectedFirstOption, setSelectedFirstOption] = useState("");
  const [selectedSecondOptionValue, setSelectedSecondOptionValue] = useState("");
  const [secondDropdownOptions, setSecondDropdownOptions] = useState([]);
  // const [selectedFirstData, setSelectedFirstData] = useState(null);
  // const [selectedSecondData, setSelectedSecondData] = useState(null);

 

  useEffect(() => {
    const fetchFirstData = async () => {
      try {
        const response = await fetch("/ANDHRA_PRADESH_NEW_DISTRICTS.geojson");
        const jsonData = await response.json();
        setFirstData(jsonData);
        // setSelectedFirstData(jsonData)
        console.log(jsonData);
      } catch (error) {
        console.error("Error fetching GeoJSON:", error);
      }
    };

    const fetchSecondData = async () => {
      try {
        const response = await fetch("/ANDHRA_PRADESH_SUBDISTRICTS.geojson");
        const jsonData = await response.json();
        setSecondData(jsonData);
        console.log(jsonData);
      } catch (error) {
        console.error("Error fetching GeoJSON:", error);
      }
    };

    fetchFirstData();
    fetchSecondData();
  }, []);

  const handleFirstDropdownChange = (event) => {
    const selectedOption = event.target.value;
    console.log("Selected first option:", selectedOption);
    setSelectedFirstOption(selectedOption);

    // Filter the second data based on the selected option from the first dropdown
    if (secondData){
      const filteredOptions = secondData.features.filter(
        (feature) => feature.properties.dtname === selectedOption
      );
    
      console.log("Filtered options:", filteredOptions);
      // Extract the sdtname from each filtered option
      const sdtNames = filteredOptions.map(
        (feature) => feature.properties.sdtname
      );
      console.log("Filtered second dropdown options:", sdtNames);
      setSecondDropdownOptions(sdtNames);
      setSelectedSecondOptionValue(""); // Reset the selected option in the second dropdown
      handleOptionChange(firstData, secondData, selectedOption, selectedSecondOptionValue);
    
    
    }

};

  const handleSecondDropdownChange = (event) => {
    const selectedSecondOption = event.target.value;
    setSelectedSecondOptionValue(selectedSecondOption);
    console.log("i am again ",selectedSecondOption)
    handleOptionChange(firstData, secondData, selectedFirstOption, selectedSecondOptionValue);
    console.log("i am again ",selectedFirstOption)
    console.log("i am again ",selectedSecondOptionValue)
  };

  return (
    <div className={styles.selector}>
      <div className={styles.form}>
        <FormControl sx={{ m: 2, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-label">District</InputLabel>
          <select
            id="selectOption"
            value={selectedFirstOption}
            onChange={handleFirstDropdownChange}
          >
            <option value="All">All</option>
            {firstData &&
              firstData.features?.map((feature, index) => (
                <option key={index} value={feature.properties.NAME}>
                  {feature.properties.NAME}
                </option>
              ))}
          </select>
        </FormControl>
        <FormControl sx={{ m: 2, minWidth: 200 }}>
          <InputLabel id="demo-simple-select-label">Mandal</InputLabel>
          <select
            id="selectOption"
            value={selectedSecondOptionValue}
            onChange={handleSecondDropdownChange}
          >
            <option value="All">All</option>
            {secondDropdownOptions.map((sdtname, index) => (
              <option key={index} value={sdtname}>
                {sdtname}
              </option>
            ))}
          </select>
        </FormControl>
      </div>
      <Divider />

    </div>
  );
};

export default Section;
