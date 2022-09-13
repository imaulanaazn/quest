import React from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from './style';

export default function Features() {
  const classes = useStyles();
  return (
    <Box className={`${classes.featuresContainer} container`}>
      <Box className={classes.feautresContent}>
        <Typography className="title">Features</Typography>
        <Box className="features__list">
          <Box>
            <ul>
              <li>
                <Typography variant="caption">• </Typography>
                Convert custom Figma designs into React
              </li>
              <li>
                <Typography variant="caption">• </Typography>
                Fully customize your Design System in Figma
              </li>
              <li>
                <Typography variant="caption">• </Typography>
                Export Figma to see how the working React component will look
              </li>
              <li>
                <Typography variant="caption">• </Typography>
                Support for props, bindings & features
              </li>
              <li>
                <Typography variant="caption">• </Typography>
                Resync design without losing features, props or bindings
              </li>
            </ul>
          </Box>
          <Box>
            <ul>
              <li>
                <Typography variant="caption">• </Typography>
                Create states using variants in Figma
              </li>
              <li>
                <Typography variant="caption">• </Typography>
                Support for styled components and emotion
              </li>
              <li>
                <Typography variant="caption">• </Typography>
                Conditional bindings
              </li>
              <li>
                <Typography variant="caption">• </Typography>
                Support for nested components
              </li>
              <li>
                <Typography variant="caption">• </Typography>
                Lists, Dialogs and Popovers
              </li>
              <li>
                <Typography variant="caption">• </Typography>
                Full support for MUI components & bindings
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
