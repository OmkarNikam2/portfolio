import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Landing from "@/components/landing/landing";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import { useEffect, useLayoutEffect, useState } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import ScrollSmoother from 'gsap/dist/ScrollSmoother'

export default function Home() {

  gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

  return (
    <>
      <Head>
        <title>Omkar Portfolio</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Landing />
          <Footer/>
        </div>
      </div>
    </>
  );
}
