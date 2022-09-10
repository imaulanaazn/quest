import React from 'react';
import { Box, Typography } from '@mui/material';

export default function AheadOfThePack() {
  return (
    <Box>
      <Box>
        <Box className="text container">
          <Box className="subtitle">
            <img src="images/bolt.svg" alt="bolt icon" />
            <Typography variant="h2">FIT YOUR WORKFLOW</Typography>
          </Box>
          <Typography className="title" variant="h1">
            So easy...
            {' '}
            <br />
            <Typography variant="caption">Become a Pro </Typography>
            in 15 minutes
          </Typography>
          <Typography className="learn__more">
            <Typography variant="caption">Learn more </Typography>
            about our features.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
