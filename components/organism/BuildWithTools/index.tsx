import React from 'react';
import { Box, Typography, Button } from '@mui/material';

import useStyles from './style';

export default function BuildWithTools() {
  const classes = useStyles();
  return (
    <Box className={`${classes.buildWithContainer} container`}>
      <Box className={classes.builWithContent}>
        <Box className="text">
          <img className="bolt__icon" src="images/bolt.svg" alt="" />
          <Typography className="title" variant="h1">
            <Typography variant="caption">Build </Typography>
            with the tools you love
          </Typography>
          <Box>
            <Typography className="moto">
              Simply bring your custom Figma designs
              and design system and generate React
              components based on Material UI automatically.
            </Typography>
            <Button className="signup__btn" variant="outlined">
              Sign Up Now
            </Button>
          </Box>
        </Box>
        <Box className="sideThumb">
          <img src="images/laptop.png" alt="laptop" />
        </Box>
      </Box>
    </Box>
  );
}
