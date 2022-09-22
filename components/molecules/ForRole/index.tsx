import React from 'react';
import { Box, Typography } from '@mui/material';
import useStyles from './style';

interface ForRoleProps{
    leftText: {
        title:string,
        description: string
    }[],
    rightText: {
        title:string,
        description: string
    }[],
    image: string
}

export default function ForRole(props:ForRoleProps) {
  const classes = useStyles();
  const { image, leftText, rightText } = props;
  return (
    <Box className={classes.forRoleContainer}>
      <Box className={classes.banner}>
        <img src={image} alt="role" />

      </Box>
      <Box className={`${classes.listContainer} container`}>
        <Box>
          <ul>
            {leftText.map((text) => (
              <li key={text.title}>
                <Typography variant="h2">{text.title}</Typography>
                <Typography>{text.description}</Typography>
              </li>
            ))}
          </ul>
        </Box>
        <Box>
          <ul>
            {rightText.map((text) => (
              <li key={text.title}>
                <Typography variant="h2">{text.title}</Typography>
                <Typography>{text.description}</Typography>
              </li>
            ))}
          </ul>
        </Box>
      </Box>
    </Box>
  );
}
