import React from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from './style';
import Advantages from '../../molecules/Advantages';

export default function HigherQuality() {
  const classes = useStyles();
  return (
    <Box className={`${classes.higherContainer} container`}>
      <Box className={classes.higherContent}>
        <Box className="text">
          <Box className="subtitle">
            <img src="images/bolt.svg" alt="bolt icon" />
            <Typography variant="h2">HIGHER QUALITY</Typography>
          </Box>
          <Typography className="title" variant="h1">
            <Typography variant="caption">Elevate </Typography>
            your product
          </Typography>
          <Typography className="description">
            Eliminate the tedium and focus on what matters.
          </Typography>
        </Box>
        <img src="images/Rectangle 109.png" alt="frame" />
        <Box className="advantages">
          <Advantages title="Better than hand-coded" content="Generate code that’s clean and efficient, and as good or better than hand-coded." />
          <Advantages title="Iterate until it’s right" content="By removing the back and forth between designer and developer, you can ship high-quality designs faster." />
          <Advantages title="Pixel perfect" content="Build exactly what your designer envisions with pixel-perfect conversion of your Figma designs." />
        </Box>
      </Box>
    </Box>
  );
}
