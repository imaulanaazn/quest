import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import useStyles from './hero';

export default function index() {
  const classes = useStyles();
  return (
    <Box className={`${classes.heroContainer} container`}>
      <Box className={classes.heroContent}>
        <img className="bolt__icon" src="images/bolt.svg" alt="" />
        <Typography className="title" variant="h1">
          The better way to
          <br />
          build your
        </Typography>
        <Typography className="title" variant="h1">frontend</Typography>
        <Box>
          <Typography className="moto">
            Generate React components with clean, extendable code.
            Build and iterate on your products faster than ever.
          </Typography>
          <Button className="signup__btn" variant="outlined">
            Sign Up Now
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
