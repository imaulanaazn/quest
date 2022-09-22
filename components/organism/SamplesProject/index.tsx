import React from 'react';
import { Box } from '@mui/material';
import SampleProject from '../../molecules/SampleProject';
import useStyles from './style';

export default function SamplesProject() {
  const classes = useStyles();
  return (
    <Box className={`${classes.samplesContainer} container`}>
      <Box className={classes.samplesContent}>
        <SampleProject
          title="Company Dashboard"
          description="This internal page was designed as 8 components in Figma then combined and set up in Quest to create a fully custom company dashboard from design to done in less than 1 day."
          webUrl="www.google.com"
          figmaUrl="www.google.com"
          githubUrl="www.google.com"
          img="images/Screen=Desktop 1.png"
        />
        <SampleProject
          title="Payment Checkout"
          description="This checkout component was easily setup in Quest and converted to working React code with MUI components copied and pasted from the Material UI Figma Design System."
          webUrl="www.google.com"
          figmaUrl="www.google.com"
          githubUrl="www.google.com"
          img="images/Screen=Desktop 2.png"
        />
        <SampleProject
          title="Company Website"
          description="This entire Quest website you’re on right now is made with Quest."
          figmaUrl="www.google.com"
          img="images/Frame 1.png"
        />
      </Box>
    </Box>
  );
}
