import React from 'react';
import ReactAppHero from '../components/organism/ReactAppHero/ReactAppHero';
import BuildWithTools from '../components/organism/BuildWithTools';
import SeeQuest from '../components/organism/SeeQuest';

export default function reactapp() {
  return (
    <>
      <ReactAppHero />
      <BuildWithTools />
      <SeeQuest />
    </>
  );
}
