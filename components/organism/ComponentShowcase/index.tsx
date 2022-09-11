import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  showcase__content: {
    width: '100%',
    height: '512px',
    backgroundImage: 'url("images/sec4 Image.svg")',
    padding: '8rem 0',
  },
  showcase__container: {
    paddingTop: '8rem',
    backgroundColor: '#171717',
  },
}));

export default function ComponentShowcase() {
  const classes = useStyles();
  return (
    <Box className={classes.showcase__container}>
      <Box className={classes.showcase__content} />
    </Box>
  );
}
