import React from 'react';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

interface AdvantagesProps{
    title: string,
    content: string
}

const useStyles = makeStyles(() => ({
  cardContainer: {
    '& h2.service__card': {
      fontWeight: '600',
      fontSize: '1.2rem',
      padding: '1.8rem 0',
    },
    '& p': {
      fontWeight: '500',
      fontSize: '1rem',
      maxWidth: '20rem',
    },
  },

  '@media (min-width:600px)': {
    cardContainer: {
      '& p': {
        maxWidth: '30rem',
      },
    },
  },

  '@media (min-width:900px)': {
    cardContainer: {
      flex: '1',
      '& h2.service__card': {
        fontSize: '1.4rem',
        padding: '1.2rem 0',
      },
      '& p': {
        fontSize: '1rem',
      },
    },
  },
}));

export default function Advantages(props:AdvantagesProps) {
  const { title, content } = props;
  const classes = useStyles();
  return (
    <Box className={classes.cardContainer}>
      <Typography className="service__card" variant="h2">
        {title}
      </Typography>
      <Typography>
        {content}
      </Typography>
    </Box>
  );
}
