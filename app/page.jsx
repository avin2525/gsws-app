"use client";
import { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import styles from "./globals.css";
import Loading from "./loading";
import Mid from "./components/midsecction/mid.jsx"
// import Layout from "./layout";

export default function HomePage() {

  return (

    <main className={styles.main}>
      <Suspense fallback={<Loading />}>
      <Mid/>
      </Suspense>
    </main>

  );
}
