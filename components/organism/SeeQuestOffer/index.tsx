import React from 'react';
import { Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import SeeQuest from '../SeeQuest';
import Advantages from '../../molecules/Advantages';

const useStyles = makeStyles(() => ({
  seeQuestContainer: {
    backgroundColor: '#171717',
    color: 'white',
  },
  '@media (min-width: 600px)': {
    seeQuestContainer: {
      display: 'flex',
      gap: '2rem',
    },
  },
}));

export default function SeeQuestOffer() {
  const classes = useStyles();
  return (
    <>
      <SeeQuest />
      <Box className={`${classes.seeQuestContainer} container`}>
        <Advantages title="Design without limits" content="Generate code that’s clean and efficient, and as good or better than hand-coded." />
        <Advantages title="Export to code" content="By removing the back and forth between designer and developer, your product will no longer  be just “good enough”." />
        <Advantages title="Launch and done" content="Build exactly what your designer envisions with pixel-perfect conversion of your Figma designs." />
      </Box>
    </>

  );
}
