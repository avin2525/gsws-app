"use client";
import Image from "next/image";
import React, { useState } from "react";
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
  };
  return (
    <section className={styles.container}>
      <div className={styles.midSection}>
        <div className={styles.leftSection}>
          <div className={styles.topRow}>
            <Selector handleOptionChange={handleOptionChange} />
          </div>
          <div className={styles.bottomRow}>
          <h3>List of Seceretariat Offices</h3>
            {/* <Paragraphs /> */}
            <div id="listings" className={styles.listings}></div>
          </div>
        </div>

        <div className={styles.rightSection} >
          {/* add right side routes */}
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
