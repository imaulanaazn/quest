import React from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from './style';

export default function CustomizeDesign() {
  const classes = useStyles();
  return (
    <Box className={classes.fasterContainer}>
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
            Your designers and developers can iterate independently.
            Quest seamlessly brings it all together without any conflicts.
            For example, if your designer has 3 different ideas for variations,
            they can build all 3 without any developer involvement.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
