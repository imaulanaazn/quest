import React from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from './style';

export default function SeeQuest() {
  const classes = useStyles();
  return (
    <Box className={`${classes.SeeQuestContaier} container`}>
      <Box className="subtitle">
        <img src="images/bolt.svg" alt="bolt icon" />
        <Typography variant="h2">SEE QUEST IN ACTION</Typography>
      </Box>
      <iframe src="https://www.youtube.com/embed/I6ypD7qv3Z8" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
    </Box>
  );
}
