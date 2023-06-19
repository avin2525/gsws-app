"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./mid.module.css";
import Selector from "./selctor/section";
import Map from "./map/map";
import { Margin } from "@mui/icons-material";
import { colors } from "@mui/material";
export default function Mid() {
  const [selectedFirstOption, setSelectedFirstOption] = useState("");
  const [selectedSecondOption, setSelectedSecondOption] = useState("");
  const [firstData, setFirstData] = useState("");
  const [secondData, setSecondData] = useState("");
  const [showListings, setShowListings] = useState(false);

  const handleOptionChange = (
    firstData,
    secondData,
    firstValue,
    secondValue
  ) => {
    setSelectedFirstOption(firstValue);
    setSelectedSecondOption(secondValue);
    setFirstData(firstData);
    setSecondData(secondData);

    // setShowListings(false);
  };

  // useEffect to show listings when secondData is available
  useEffect(() => {
    if (selectedSecondOption) {
      setShowListings(true);
    }
  }, [selectedSecondOption]);

  return (
    <section className={styles.container}>
      <div className={styles.midSection}>
        <div className={styles.leftSection}>
          <div className={styles.topRow}>
            <Selector handleOptionChange={handleOptionChange} />
          </div>
          {showListings && <h1 className={styles.h1}>List of Secretariat Offices</h1>}
          <div className={styles.bottomRow}>
            <div id="listings" className={styles.listings}></div>
          </div>
        </div>
        <div className={styles.rightSection}>
          <Map
            selectedFirstOption={selectedFirstOption}
            selectedSecondOption={selectedSecondOption}
            firstData={firstData}
            secondData={secondData}
          />
        </div>
      </div>
    </section>
  );
}
