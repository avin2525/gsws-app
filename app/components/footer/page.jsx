"use client"
import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import EmailIcon from "@mui/icons-material/Email";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
// import logo from "./../../public/images/logo.png";
import logo from "../../../public/images/logo.png";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.logo}>
        <Image src={logo} width={300} height={50} alt="logo" />
      </div>
      <div className={styles.reachUs}>
        <div className={styles.title}>Reach Us</div>
        <div className={styles.contact}>
          <div className={styles.email}>
            <EmailIcon /> gsws-support@ap.gov.in
          </div>
          <div className={styles.phoneNumber}>
            <PhoneInTalkIcon /> 1902
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;