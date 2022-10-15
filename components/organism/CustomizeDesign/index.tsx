import React from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from './style';

export default function CustomizeDesign() {
  const classes = useStyles();
  return (
    <Box className={`${classes.fasterContainer} container`}>
      <Box className={classes.fasterContent}>
        <Box className="text">
          <Box className="subtitle">
            <img src="images/bolt.svg" alt="bolt icon" />
            <Typography variant="h2">FIT YOUR WORKFLOW</Typography>
          </Box>
          <Typography className="title" variant="h1">
            Customize your
            {' '}
            <Typography variant="caption">Material UI </Typography>
            based design system
          </Typography>
          <Typography className="description">
            Completely & easily style Material UI components in Figma
            based on our Quest Design Kit. Design custom components using
            the design system to export React code.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
