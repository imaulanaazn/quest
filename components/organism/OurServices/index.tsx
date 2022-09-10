import React from 'react';
import { Box, Typography } from '@mui/material';
import Service from '../../molecules/Service';
import useStyles from './style';

export default function OurServices() {
  // USING STYLE FROM ./style
  const classes = useStyles();
  return (
    <Box className={`${classes.advantagesContainer} container`}>
      <Box className={classes.advantagesContent}>
        <Box className="dashboard__preview">
          <Box className="text">
            <Box className="subtitle">
              <img src="images/bolt.svg" alt="bolt icon" />
              <Typography variant="h2">FRONTEND PERFECTION</Typography>
            </Box>
            <Typography className="title" variant="h1">
              Achieve
              {' '}
              <Typography variant="caption">product</Typography>
              {' '}
              development nirvana
            </Typography>
          </Box>
          <img className="dashboard__thumb" src="images/dashboard.png" alt="dashboard" />
        </Box>

        {/* ADVANTAGES CARD */}
        <Box className="our__advantages">
          <Service title="Create clean and efficient code" content="Not only human readable, Quest-generated code is extendable to add your custom modules or business logic — as if you hand-coded it." />
          <Service title="Ensure consistency across your team" content="Lower technical debt in your frontend as every line of code has a purpose." />
          <Service title="Free up bandwidth for your developers" content="Instead of tweaking the UI constantly, your developers can focus more on your core product or business logic." />
        </Box>
      </Box>
    </Box>
  );
}
