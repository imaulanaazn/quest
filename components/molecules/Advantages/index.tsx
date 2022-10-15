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
      fontWeight: ' 700',
      fontSize: '22px',
      lineHeight: '22px',
      padding: '45px 0 5px',
    },
    '& p': {
      fontWeight: ' 600',
      fontSize: '16px',
      lineHeight: '26px',
      maxWidth: '200px',
    },
  },

  '@media (min-width:600px)': {
    cardContainer: {
      flex: '1',
      '& p': {
        maxWidth: '30rem',
        fontSize: '18px',
        lineHeight: '26px',
      },
    },
  },

  '@media (min-width:900px)': {
    cardContainer: {
      flex: '1',
      '& h2.service__card': {
        fontSize: '26px',
        lineHeight: '30px',
        padding: '46px 0 5px',
      },
      '& p': {
        fontSize: '20px',
        lineHeight: '30px',
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
