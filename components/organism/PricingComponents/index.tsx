import {
  Box, Typography, Stack, Switch,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useState } from 'react';
import useStyles from './style';
import PricingCard from '../../molecules/PricingCard';

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 45,
  height: 20,
  padding: 0,
  display: 'flex',

  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(25px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 0.8,
    '&.Mui-checked': {
      transform: 'translateX(25px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#FFFFFF26',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 18.1,
    height: 18.1,
    borderRadius: '50%',
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor: '#FFFFFF26',
    border: '2px solid white',
    boxSizing: 'border-box',
  },
}));

export default function PricingComponents() {
  const [checked, setChecked] = useState(false);

  const classes = useStyles();
  return (
    <Box className={`${classes.PricingBuildContainer} container`}>
      <Box className={classes.PricingBuildContent}>
        <Typography className="title" variant="h1">
          Build React Components
        </Typography>
        <Typography className="description">
          All component plans include a 30-day money-back guarantee
        </Typography>
        <Typography className="learn__more">
          <Typography variant="caption">Learn more </Typography>
          about Quest Components.
        </Typography>

        <Stack direction="row" spacing={1} alignItems="center" className="switch">
          <Typography sx={{ color: checked ? 'white' : '#7F7F7F' }}>Monthly</Typography>
          <AntSwitch defaultChecked inputProps={{ 'aria-label': 'ant design' }} onClick={() => { setChecked(!checked); }} />
          <Typography sx={{ color: checked ? '#7F7F7F' : 'white' }}>Annual</Typography>
        </Stack>

        <Box className={classes.cardContainer}>
          <PricingCard label="PRO" price={49} color="#03C3FF" userPerMonth="/ user per month" buttonText="Sign Up" description="Perfect for freelancers and small teams" moto="Export unlimited components" />
          <PricingCard label="TEAM" price={299} color="#FE8888" userPerMonth="/ 10 users per month" buttonText="Contact Sales" description="Best for teams with larger products" moto="Build projects together" />
          <PricingCard label="ENTERPRISE" price="Custom" color="#8066FF" userPerMonth="/  tailored to needs" buttonText="Contact Sales" description="For large companies with custom requirements" moto="Custom setup, training & support manager" />
        </Box>
      </Box>
    </Box>
  );
}
