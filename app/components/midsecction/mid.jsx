"use client";
import Image from "next/image";
import React, { useState } from "react";
import styles from "./mid.module.css";
import Selector from "./selctor/section";
import Map from "./map/map";
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
    <main className={styles.main}>
      <div className={styles.leftSection}>
        <div className={styles.topRow}>
          <Selector handleOptionChange={handleOptionChange} />
        </div>
        <div className={styles.bottomRow}>
          {/* <Paragraphs /> */}
          <p>
            On 1 October 1953, Andhra State was formed with its capital as
            Kurnool. It was formed after the Andhra movement, led by various
            Telugu leaders. During the same time, campaigns such as Visalandhra
            movement started in Andhra State and by Telugu-speaking people in
            Hyderabad State. States Reorganisation Act, 1956 came into effect
            from 1 November 1956 with an aim to organising the boundaries of
            India's states and territories along linguistic lines. As a result,
            the central government, led by Nehru, merged Andhra State and
            Hyderabad State (Telugu-speaking areas are now Telangana) to form
            united Andhra Pradesh on 1 November 1956 after ensuring safeguards
            to Telangana in the form of a gentleman's agreement. Hyderabad
            became the new capital of the state of united Andhra Pradesh. There
            have been several movements to revoke the merger of Telangana and
            Andhra, major ones occurring in 1969, 1972, and 2009. The movement
            for a new state of Telangana gained momentum in the 21st century by
            an initiative of Telangana Political Joint Action Committee, TJAC
            including political leadership representing the Telangana area.[1]
            On 9 December 2009 the government of India announced the process of
            formation of the Telangana state. Violent protests led by people in
            the Coastal Andhra and Rayalseema regions occurred immediately after
            the announcement, and the decision was put on hold on 23 December
            2009. The movement continued in Hyderabad and other districts of
            Telangana.[2] There have been hundreds of claimed suicides,[3]
            strikes, protests and disturbances to public life demanding separate
            statehood. On 30 July 2013, the Congress Working Committee
            unanimously passed a resolution to recommend the formation of a
            separate Telangana state. After various stages the bill was placed
            in the Parliament of India in February 2014.[4] In February 2014,
            Andhra Pradesh Reorganisation Act, 2014 bill was passed by the
            Parliament of India for the formation of Telangana state comprising
            ten districts from north-western Andhra Pradesh.[5] The bill
            received the assent of the president and published in the Gazette on
            1 March 2014.[6] The state of Telangana was officially formed on 2
            June 2014 with its capital as Hyderabad. Amaravati was founded by
            former Andhra Pradesh Chief Minister N. Chandrababu Naidu in 2014 as
            the Greenfield administrative capital city of the Andhra Pradesh
            state, and its foundation stone was laid at Uddandarayunipalem by
            the Prime Minister of India, Narendra Modi on 22 October 2015.[7] In
            2017, Andhra Pradesh Government began operating officially from the
            newly planned capital city Amaravati.[8][9] In August 2020, Andhra
            Pradesh Legislative Assembly passed Andhra Pradesh Decentralisation
            and Inclusive Development of All Regions Act, 2020. According to its
            provisions, Visakhapatnam is the executive capital while Amaravati
            and Kurnool serve as legislative and judicial capitals,
            respectively.[10] The decision resulted in widespread protests by
            the farmers of Amaravati.[11] The act has been challenged in Andhra
            Pradesh High Court, which ordered to maintain status quo until the
            court completes its hearing. On 22 November 2021, the government,
            led by Y. S. Jagan Mohan Reddy, have withdrawn the act. The decision
            to withdraw the act was taken at an emergency cabinet meeting held
            on 21 November 2021.[12]
          </p>
        </div>
      </div>
      <div className={styles.rightSection}>
        {/* add right side routes */}
        <Map
          selectedFirstOption={selectedFirstOption}
          selectedSecondOption={selectedSecondOption}
          firstData={firstData}
          secondData={secondData}
        />
      </div>
    </main>
  );
}
