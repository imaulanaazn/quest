import React from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from './style';

export default function JoinTheFuture() {
  const classes = useStyles();
  return (
    <Box className={classes.joinContainer}>
      <Box className={classes.joinContent}>
        <Box className="text">
          <Box className="subtitle">
            <img src="images/bolt.svg" alt="bolt icon" />
            <Typography variant="h2">JOIN THE FUTURE</Typography>
          </Box>
          <Typography className="title" variant="h1">
            Discover the
            {' '}
            <Typography variant="caption">future </Typography>
            of product development
          </Typography>
          <Typography className="description">
            The low-code movement is helping companies of all sizes
            remove redundant work. Quest enables you to build bold
            software products, faster and true to design.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
