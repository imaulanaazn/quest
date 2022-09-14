import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import useStyles from './style';

export default function OfferHero() {
  const classes = useStyles();
  return (
    <Box className={`${classes.offerContainer} container`}>
      <Box className={classes.offerContent}>
        <img className="bolt__icon" src="images/bolt.svg" alt="" />
        <Typography className="title" variant="h1">
          Convert
          your design
          into a

          <br />
          <Typography variant="caption"> launch </Typography>
          {' '}
          ready website
        </Typography>
        <Box>
          <Typography className="moto">
            Design what you want and automatically bring pixel-perfect,
            responsive sites to life.
          </Typography>
          <Button className="signup__btn" variant="outlined">
            Sign Up Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
