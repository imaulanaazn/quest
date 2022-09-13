import React from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from './style';

export default function Faq() {
  const classes = useStyles();
  return (
    <Box className={`${classes.faqContainer} container`}>
      <Box className={classes.faqContent}>
        <Typography variant="h1" className="title">
          FAQs
        </Typography>
        <Box>
          <Typography variant="h2">Who owns the code generated by Quest?</Typography>
          <Typography>You do. Export it, share it, deploy it as you want. </Typography>
        </Box>
        <Box>
          <Typography variant="h2">How secure is the code generated by Quest?</Typography>
          <Typography>
            Quest generates clean code to the latest standards.
            You can then deploy it to your security standards and specifications.
          </Typography>
        </Box>
        <Box>
          <Typography variant="h2">How often can I export my code?</Typography>
          <Typography>You can export your code as often as you want. </Typography>
        </Box>
      </Box>
    </Box>
  );
}
