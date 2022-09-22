import React from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from './style';

export default function SamplesHero() {
  const classes = useStyles();
  return (
    <Box className={`${classes.heroContainer} container`}>
      <Box className={classes.heroContent}>
        <img className="bolt__icon" src="images/bolt.svg" alt="" />
        <Typography className="title" variant="h1">
          Sample Projects
        </Typography>
        <Box>
          <Typography className="moto">
            Check out some samples built with Quest.
            See the Figma designs, see the code and see how
            they all came to life.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
