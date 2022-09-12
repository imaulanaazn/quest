import React from 'react';
import ReactAppHero from '../components/organism/ReactAppHero/ReactAppHero';
import BuildWithTools from '../components/organism/BuildWithTools';
import SeeQuest from '../components/organism/SeeQuest';
import EasyYetFlexible from '../components/organism/EasyYetFlexible';
import CustomComponents from '../components/organism/CustomComponents';
import ReadyForUse from '../components/organism/ReadyForUse';

export default function reactapp() {
  return (
    <>
      <ReactAppHero />
      <BuildWithTools />
      <SeeQuest />
      <EasyYetFlexible />
      <CustomComponents />
      <ReadyForUse />
    </>
  );
}
