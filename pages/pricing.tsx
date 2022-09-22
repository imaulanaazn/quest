import React from 'react';
import { Box, Typography } from '@mui/material';
import PricingHero from '../components/organism/PricingHero';
import PricingComponents from '../components/organism/PricingComponents';
import PricingWebsite from '../components/organism/PricingWebsite';

export default function pricing() {
  return (
    <>
      <PricingHero />
      <PricingComponents />
      <Box className="separator" sx={{ backgroundColor: '#171717', position: 'relative', padding: '3rem 0' }}>
        <Box className="dash" sx={{ width: '100%', height: '1.5px', backgroundColor: '#C4C4C4' }} />
        <Typography sx={{
          color: 'white', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', backgroundColor: '#171717', padding: '1rem 2rem', fontWeight: '600', fontSize: '1.2rem', letterSpacing: '.2rem',
        }}
        >
          O R
        </Typography>
      </Box>
      <PricingWebsite />
    </>
  );
}
