import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  customContainer: {
    width: '100%',
    height: '30rem',
    backgroundImage: 'url("images/sec4 Image.png")',
    backgroundSize: 'cover',
    backgroundColor: '#171717',
  },

  '@media (min-width: 600px)': {
    customContainer: {
      height: '40rem',
    },
  },

  '@media (min-width: 900px)': {
    customContainer: {
      height: '63rem',
    },
  },
}));

export default function CustomComponents() {
  const classes = useStyles();
  return (
    <Box className={classes.customContainer} />
  );
}
