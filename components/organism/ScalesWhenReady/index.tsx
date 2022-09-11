import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Service from '../../molecules/Service';
import useStyles from './style';

export default function ScalesWhenReady() {
  // USING STYLE FROM ./style
  const classes = useStyles();
  return (
    <Box className={`${classes.advantagesContainer} container`}>
      <Box className={classes.advantagesContent}>
        <Box className="dashboard__preview">
          <Box className="text">
            <Box className="subtitle">
              <img src="images/bolt.svg" alt="bolt icon" />
              <Typography variant="h2">SCALES WHEN READY</Typography>
            </Box>
            <Typography className="title" variant="h1">
              Try it
              {' '}
              <Typography variant="caption">risk-free</Typography>
              {' '}
              and see for yourself
            </Typography>
            <Button variant="outlined" className="signup__btn">
              Sign Up Now
            </Button>
          </Box>
          <img className="dashboard__thumb" src="images/Code and Export.png" alt="dashboard" />
        </Box>

        {/* ADVANTAGES CARD */}
        <Box className="our__advantages">
          <Service
            title="Start small"
            content="Build one component and add it to your app. If it works, you can build more. You don't have to switch your entire app at once."
          />
          <Service
            title="No vendor lock-in"
            content="You export the code components you generate, so you’re are not locked-in."
          />
          <Service
            title="You own your code & your IP"
            content="You own whatever you build. It’s yours to do what you want."
          />
        </Box>
      </Box>
    </Box>
  );
}
