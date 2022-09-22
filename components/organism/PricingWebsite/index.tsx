import React from 'react';
import {
  Box, Typography, Button,
} from '@mui/material';
import Chip from '@mui/material/Chip';
import useStyles from './style';
import PricingCard from '../../molecules/PricingCard';

export default function PricingWebsite() {
  const classes = useStyles();
  return (
    <Box className={`${classes.PricingBuildContainer} container`}>
      <Box className={classes.PricingBuildContent}>
        <Typography className="title" variant="h1">
          Build Websites
        </Typography>
        <Typography className="description">
          Quest currently only supports new signups for Figma users.
          The Sketch & XD plugins are no longer supported.
        </Typography>
        <Typography className="learn__more">
          <Typography variant="caption">Learn more </Typography>
          about Quest Websites.
        </Typography>

        <Chip sx={{ backgroundColor: '#01FC84' }} label="FREE" className="freeChip" />
        <Typography className="freePrice">$0</Typography>
        <Typography className="freeDesc">Build, experiment, share with your team or clients.</Typography>
        <Button className="freeSignup" variant="outlined">Sign Up</Button>
        <Typography className="freeDesc noCredit">No credit card required</Typography>

        <Box className={classes.cardContainer}>
          <PricingCard label="PERSONAL" price={15} color="#03C3FF" userPerMonth="/ user per month" buttonText="Sign Up" description="For personal projects, portfolios, etc." moto="Add your own custom domain" />
          <PricingCard label="PRO" price={50} color="#FE8888" userPerMonth="/ user per month" buttonText="Sign Up" description="For your business needs." moto="Build more, export code, get priority email support" />
          <PricingCard label="ENTERPRISE" price="Custom" color="#8066FF" userPerMonth="/  tailored to needs" buttonText="Contact Sales" description="For large companies with custom requirements." moto="Custom setup, training & support manager" />
        </Box>
      </Box>
    </Box>
  );
}
