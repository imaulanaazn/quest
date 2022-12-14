import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ReactAppHero from '../components/organism/ReactAppHero/ReactAppHero';
import BuildWithTools from '../components/organism/BuildWithTools';
import SeeQuest from '../components/organism/SeeQuest';
import EasyYetFlexible from '../components/organism/EasyYetFlexible';
import CustomComponents from '../components/organism/CustomComponents';
import ReadyForUse from '../components/organism/ReadyForUse';
import FasterInovation from '../components/organism/FasterInovation';
import HowItWorks from '../components/organism/HowItWorks';
import HigherQuality from '../components/organism/HigherQuality';
import CustomizeDesign from '../components/organism/CustomizeDesign';
import Features from '../components/organism/Features';
import Faq from '../components/organism/Faq';
import JoinTheFuture from '../components/organism/JoinTheFuture';
import Footer from '../components/organism/Footer';

export default function reactapp() {
  return (
    <>
      <ReactAppHero />
      <BuildWithTools />
      <SeeQuest />
      <EasyYetFlexible />
      <CustomComponents />
      <ReadyForUse />
      <FasterInovation />
      <HowItWorks />
      <HigherQuality />
      <CustomizeDesign />
      <img src="images/ds 1.png" alt="" style={{ width: '100%', backgroundColor: '#171717' }} />
      <Features />
      <Faq />
      <JoinTheFuture />
      <Box sx={{ backgroundColor: '#171717', textAlign: 'center', padding: '7rem 0' }}>
        <Typography sx={{
          color: '#FE8888', fontSize: '38px', fontWeight: '700', marginBottom: '1rem',
        }}
        >
          Build better
        </Typography>
        <Button
          className="signup__btn"
          variant="outlined"
          sx={{
            color: 'white',
            width: { xs: '143px', sm: '183px' },
            height: { xs: '44px', sm: '52px' },
            border: '3px solid #FE8888',
            borderRadius: '10px',
            textTransform: 'none',
            fontSize: { xs: '16', sm: '20px' },
            fontWeight: '700',
            padding: '5px 15px',
          }}
        >
          Sign Up Now
        </Button>
      </Box>
      <Footer />
    </>
  );
}
