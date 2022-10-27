import React from 'react';
import {
  Box, Typography, Button, Stack,
} from '@mui/material';
import TextField from '@mui/material/TextField';

// import TextField from '@mui/material/TextField';
import useStyles from '../styles/contact';

export default function contact() {
  const classes = useStyles();
  return (
    <Box className={`${classes.flexContainer} container`}>
      <Box>
        <Typography variant="h1">Contact us</Typography>
        <Typography>
          Fill out our form, and we&apos;ll try to get back
          to you within 24 hours.
        </Typography>
      </Box>
      <Box className="inputFieldSide">
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            '& > :not(style)': { m: 1 },
          }}
        >
          <TextField
            helperText="Please enter your name"
            id="demo-helper-text-aligned"
            label="Name"
            placeholder="Enter your full name"
          />
          <TextField
            helperText="Please enter your email"
            id="demo-helper-text-aligned"
            label="Email"
            placeholder="Enter your email"
          />
          <TextField
            helperText="Please enter your message"
            id="demo-helper-text-aligned"
            label="Message"
            placeholder="Enter your message here"
          />
          <Stack direction="row" className="flex__container">
            <Typography>Join us on Discord</Typography>
            <Button variant="contained">Send</Button>
          </Stack>

        </Box>
      </Box>
    </Box>
  );
}
