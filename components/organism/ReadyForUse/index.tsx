import React from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from './style';

export default function ReadyForUse() {
  const classes = useStyles();
  return (
    <Box className={`${classes.readyForContainer} container`}>
      <Box className={classes.readyForContent}>
        <Box className="dashboard__preview">
          <Box className="text">
            <Box className="subtitle">
              <img src="images/bolt.svg" alt="bolt icon" />
              <Typography variant="h2">READY FOR USE</Typography>
            </Box>
            <Typography className="title" variant="h1">
              Export
              {' '}
              <Typography variant="caption">clean</Typography>
              {' '}
              code
            </Typography>
            <Typography className="description">
              Clean and efficient code — as if it was hand-coded by a developer.
              Generated code is production-ready and can be immediately
              deployed using your existing CI/CD pipeline.
            </Typography>
          </Box>
          <Box className="thumb__container" />
        </Box>
      </Box>
    </Box>
  );
}
