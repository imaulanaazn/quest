import React from 'react';
import SamplesHero from '../components/organism/SamplesHero.tsx';
import SamplesProject from '../components/organism/SamplesProject';
import TheFutureFrontend from '../components/organism/TheFutureFronted';

export default function samples() {
  return (
    <>
      <SamplesHero />
      <SamplesProject />
      <TheFutureFrontend />
    </>
  );
}
