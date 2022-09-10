import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface serviceProps{
    title: string,
    content: string
}

const useStyles = makeStyles(() => ({
  cardContainer: {
    marginTop: '3rem',
    '& img': {
      width: '2.5rem',
    },
    '& h2.service__card': {
      fontWeight: '600',
      fontSize: '2rem',
      margin: '1.8rem 0',
    },
    '& p': {
      fontWeight: '500',
      fontSize: '1.5rem',
    },
  },
  '@media (min-width:900px)': {
    cardContainer: {
      flex: '1',
      marginTop: '3rem',
      '& img': {
        width: '1.3rem',
      },
      '& h2.service__card': {
        fontSize: '1.4rem',
        margin: '1.2rem 0',
      },
      '& p': {
        fontSize: '1rem',
      },
    },
  },
}));

export default function index(props:serviceProps) {
  const { title, content } = props;
  const classes = useStyles();
  return (
    <Box className={classes.cardContainer}>
      <img src="images/bolt.svg" alt="bolt" />
      <Typography className="service__card" variant="h2">
        {title}
      </Typography>
      <Typography>
        {content}
      </Typography>
    </Box>
  );
}
