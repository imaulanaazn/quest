import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import useStyles from './style';

export default function ReactAppHero() {
  const classes = useStyles();
  return (
    <Box className={`${classes.heroContainer} container`}>
      <Box className={classes.heroContent}>
        <img className="bolt__icon" src="images/bolt.svg" alt="" />
        <Typography className="title" variant="h1">
          Build React Apps
          <br />
          <Typography variant="caption">faster</Typography>
          {' '}
          than ever
        </Typography>
        <Box>
          <Typography className="moto">
            Build as fast as your designer can envision them,
            with clean and efficient code — as if you hand-coded them.
          </Typography>
          <Button className="signup__btn" variant="outlined">
            Sign Up Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
