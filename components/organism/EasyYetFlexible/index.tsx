import React from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from './style';

export default function EasyYetFlexible() {
  const classes = useStyles();
  return (
    <Box className={`${classes.easyYetContainer} container`}>
      <Box className={classes.easyYetContent}>
        <Box className="text">
          <Box className="subtitle">
            <img src="images/bolt.svg" alt="bolt icon" />
            <Typography variant="h2">EASY YET FLEXIBLE</Typography>
          </Box>
          <Typography className="title" variant="h1">
            Generate custom
            {' '}
            <Typography variant="caption">React</Typography>
            {' '}
            components
          </Typography>
          <Typography className="description">
            Create fully functional custom components
            based on your own Figma designs.
            Create states using variants.
            Set up props & bindings and export clean React code.
          </Typography>
          <Typography className="getstarted">
            <Typography variant="caption">Get started </Typography>
            with 100+ React Components made in Figma.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
