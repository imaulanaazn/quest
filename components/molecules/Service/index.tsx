import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface serviceProps{
    title: string,
    content: string
}

const useStyles = makeStyles(() => ({
  cardContainer: {
    marginTop: '25px',
    '& img': {
      width: '30px',
      height: '30px',
    },
    '& h2.service__card': {
      fontWeight: ' 800',
      fontSize: '20px',
      margin: '20px 0',
    },
    '& p': {
      fontWeight: ' 600',
      fontSize: '16px',
    },
  },
  '@media (min-width:600px)': {
    cardContainer: {
      'h2.service__card': {
        fontSize: '24px',
        lineHeight: '28px',
      },
      '& p': {
        fontSize: '20px',
        lineHeight: '26px',
        maxWidth: '520px',
      },
    },
  },
  '@media (min-width:900px)': {
    cardContainer: {
      flex: '1',
      marginTop: '0',
      '& img': {
        width: '20px',
      },
      '& h2.service__card': {
        margin: '12px 0',
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
