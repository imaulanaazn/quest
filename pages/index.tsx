import React from 'react';

// import styles from '../styles/Home.module.css'
import Navbar from '../components/organism/Navbar';
import Hero from '../components/organism/Hero';
import OurAdvantages from '../components/organism/OurAdvantages';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OurAdvantages />
    </>
  );
}
