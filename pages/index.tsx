import React from 'react';

// import styles from '../styles/Home.module.css'
import Hero from '../components/organism/Hero';
import OurServices from '../components/organism/OurServices';
import FitYourWorkflow from '../components/organism/FitYourWorkflow';
import ScalesWhenReady from '../components/organism/ScalesWhenReady';
import AheadOfThePack from '../components/organism/AheadOfThePack';
import TheFutureFrontend from '../components/organism/TheFutureFronted';
import ComponentShowcase from '../components/organism/ComponentShowcase';

export default function Home() {
  return (
    <>
      <Hero />
      <OurServices />
      <FitYourWorkflow />
      <ScalesWhenReady />
      <AheadOfThePack />
      <TheFutureFrontend />
      <ComponentShowcase />
    </>
  );
}
