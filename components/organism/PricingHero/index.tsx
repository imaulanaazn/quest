import React from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from './style';

export default function PricingHero() {
  const classes = useStyles();
  return (
    <Box className={`${classes.pricingContainer} container`}>
      <Box className={classes.pricingContent}>
        <img className="bolt__icon" src="images/bolt.svg" alt="" />
        <Typography className="title" variant="h1">
          The easiest way to build
          <br />
          <Typography variant="caption"> frontend </Typography>
          <br />
          ever
        </Typography>
        <Box>
          <Typography className="moto">
            Build in hours and days—not months—for a fraction of the cost
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
