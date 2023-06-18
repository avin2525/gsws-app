"use client";
import React, { useState, useEffect } from "react";
import styles from "./section.module.css";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Divider from "@mui/material/Divider";





const Section = ({ handleOptionChange }) => {
  const [firstData, setFirstData] = useState(null);
  const [secondData, setSecondData] = useState(null);
  const [selectedFirstOption, setSelectedFirstOption] = useState('');
  const [selectedSecondOption, setSelectedSecondOption] = useState('');
  const [secondDropdownOptions, setSecondDropdownOptions] = useState([]);
  
 

  useEffect(() => {
    const fetchFirstData = async () => {
      try {
        const response = await fetch("/ANDHRA_PRADESH_NEW_DISTRICTS.geojson");
        const jsonData = await response.json();
        setFirstData(jsonData);
      } catch (error) {
        console.error("Error fetching GeoJSON:", error);
      }
    };

    const fetchSecondData = async () => {
      try {
        const response = await fetch("/ANDHRA_PRADESH_SUBDISTRICTS.geojson");
        const jsonData = await response.json();
        setSecondData(jsonData);
      } catch (error) {
        console.error("Error fetching GeoJSON:", error);
      }
    };

    fetchFirstData();
    fetchSecondData();
  }, []);

  const handleFirstDropdownChange = (event) => {
    const selectedFirstOption = event.target.value;
    setSelectedFirstOption(selectedFirstOption);
  
    // Filter the second data based on the selected option from the first dropdown
    const filteredOptions = secondData.features.filter(feature => feature.properties.dtname === selectedFirstOption);
  
    // Extract the sdtname from each filtered option
    const sdtNames = filteredOptions.map(feature => feature.properties.sdtname);
  
    setSecondDropdownOptions(sdtNames);
    setSelectedSecondOption('');
    handleOptionChange(firstData, secondData, selectedFirstOption, selectedSecondOption);
  };
  

  const handleSecondDropdownChange = (event) => {
    const selectedSecondOption = event.target.value;
    setSelectedSecondOption(selectedSecondOption);
    console.log('hghjj' , event.target.value)
    console.log('hghjkjkgj' , selectedSecondOption)
    handleOptionChange(firstData, secondData, selectedFirstOption, selectedSecondOption);
  };


  return (
    <selector className={styles.selector}>
      <form className={styles.form}>
        <FormControl sx={{ m: 2, minWidth: 300 }} >
          
          {/* <InputLabel id="demo-simple-select-label">District</InputLabel> */}
          <select className={styles.firstDropdown}value={selectedFirstOption} onChange={handleFirstDropdownChange}>
            <option value="">Select an DISTRICTS</option>
            {firstData && firstData.features.map((feature, index) => (
              <option key={index} value={feature.properties.NAME}>{feature.properties.NAME}</option>
            ))}
          </select>
        </FormControl>
        <FormControl sx={{ m: 2, minWidth: 300 }}>
          {/* <InputLabel id="demo-simple-select-label" >SUBDISTRICT</InputLabel> */}
          <select  className={styles.secondDropdown} value={selectedSecondOption} onChange={handleSecondDropdownChange}>
            <option value="">Select an SUBDISTRICTS</option>
            {secondDropdownOptions.map((sdtname, index) => (
              <option key={index} value={sdtname}>{sdtname}</option>
            ))}
          </select>
        </FormControl>
      </form>

    </selector>
  );
};

export default Section;
