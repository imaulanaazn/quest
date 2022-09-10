import React from 'react';

// import styles from '../styles/Home.module.css'
import Navbar from '../components/organism/Navbar';
import Hero from '../components/organism/Hero';
import OurServices from '../components/organism/OurServices';
import FitYourWorkflow from '../components/organism/FitYourWorkflow';
import ScalesWhenReady from '../components/organism/ScalesWhenReady';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurServices />
      <FitYourWorkflow />
      <ScalesWhenReady />
    </>
  );
}
