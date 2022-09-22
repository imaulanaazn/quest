import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import useStyles from './style';

export default function FigmaPluginHero() {
  const classes = useStyles();
  return (
    <Box className={`${classes.heroContainer} container`}>
      <Box className="icons">
        <img src="images/figma (image).svg" alt="" />
        <ArrowRightIcon />
        <img src="images/Quest_Logo_Vert_Master_2020.svg" alt="" />
      </Box>
      <Box className={classes.heroContent}>
        <img className="bolt__icon" src="images/bolt.svg" alt="" />
        <Typography className="title" variant="h1">
          Convert Figma into React components
        </Typography>
        <Box>
          <Typography className="moto">
            Convert your designs into pixel-perfect,
            launch-ready React components automatically
            while fully customizing your MUI design system.
          </Typography>
        </Box>
        <Button className="signup__btn" variant="outlined">
          Get the Plugin
        </Button>
      </Box>
    </Box>
  );
}
