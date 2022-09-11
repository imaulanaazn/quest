import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import useStyles from './style';

export default function TheFutureFrontend() {
  const classes = useStyles();
  return (
    <Box className={`${classes.futureContainer} container`}>
      <Box className={classes.futureContent}>
        <Box className="text">
          <Box className="subtitle">
            <img src="images/bolt.svg" alt="bolt icon" />
            <Typography variant="h2">THE FUTURE OF OF FRONTEND</Typography>
          </Box>
          <Typography className="title" variant="h1">
            Join the
            {' '}
            <Typography variant="caption">future</Typography>
            {' '}
            & build products at rapid speed
          </Typography>
          <Typography className="description">
            The nocode movement is helping companies
            of all sizes remove redundant work.
            Quest enables you to build software
            products faster and true to design.
          </Typography>
          <Typography className="learn__more">
            <Typography variant="caption">Learn more </Typography>
            about our features.
          </Typography>
          <Button variant="outlined" className="signup__btn">
            Sign Up Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
