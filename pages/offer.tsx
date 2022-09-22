import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import OfferHero from '../components/organism/OfferHero';
import SeeQuestOffer from '../components/organism/SeeQuestOffer';
import ForDesigners from '../components/organism/ForDesigners';
import ForMarketers from '../components/organism/ForMarketers';
import ForDevelopers from '../components/organism/ForDevelopers';
import Faq from '../components/organism/Faq';

export default function offer() {
  return (
    <>
      <OfferHero />
      <SeeQuestOffer />
      <ForDesigners />
      <ForMarketers />
      <ForDevelopers />
      <Faq />
      <Box sx={{ backgroundColor: '#171717', textAlign: 'center', padding: '7rem 0' }}>
        <Typography sx={{
          color: '#FE8888', fontSize: '2.2rem', fontWeight: '600', marginBottom: '1rem',
        }}
        >
          Join us
          {' '}
          <Typography variant="caption" sx={{ color: 'white', fontSize: '2.2rem', fontWeight: '600' }}>
            on our mission
          </Typography>
        </Typography>
        <Button
          className="signup__btn"
          variant="outlined"
          sx={{
            color: 'white',
            height: { xs: '3.5rem', sm: '3rem' },
            border: '3px solid #FE8888',
            borderRadius: '10px',
            textTransform: 'none',
            fontSize: { xs: '1.4rem', sm: '1.2rem' },
            fontWeight: '600',
            padding: '5px 15px',
          }}
        >
          Build for Free
        </Button>
      </Box>
    </>
  );
}
