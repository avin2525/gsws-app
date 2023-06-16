"use client";
import React from "react";
import styles from "./page.module.css";
// import logo from "../../public/images/ap_logo.png";
import logo from "../../../public/images/ap_logo.png";
import logo1 from "../../../public/images/jagan_logo.png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className={styles.Container}>
      <div className={styles.pageTitle1}>
        <Link href="/">
          <Image className={styles.leftImage} src={logo} alt="logo" />
        </Link>
        <Link href="/" className={styles.link}>
          <h2 className={styles.leftHeading} alt="heading1">
            {" "}
            Grama-Ward Sachivalayam{" "}
          </h2>
        </Link>
      </div>
      <div className={styles.pageTitle2}>
        <Image
          src={logo1}
          alt="logo_information"
          className={styles.rightImage1}
        />
        <Image src={logo} alt="logo" className={styles.rightImage2} />
      </div>
    </header>
  );
};

export default Header;
