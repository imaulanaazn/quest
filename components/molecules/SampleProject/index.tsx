import React from 'react';
import { Box, Typography, Link } from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GitHubIcon from '@mui/icons-material/GitHub';
import useStyles from './style';

interface SampleProjectProps{
  title: string,
  description: string,
  img: string
  webUrl?:string,
  figmaUrl?: string,
  githubUrl?: string
}

export default function SampleProject(props:Partial<SampleProjectProps>) {
  const {
    title, description, img, webUrl, figmaUrl, githubUrl,
  } = props;
  const classes = useStyles();
  return (
    <Box className={classes.sampleContainer}>
      <Box className="flex__left">
        <Typography variant="h1">{title}</Typography>
        <Typography className="description">
          {description}
        </Typography>
        <Box className="links">
          {webUrl
            ? (
              <Link href={webUrl} className="underscored">
                <VisibilityIcon />
                See the Sample
              </Link>
            ) : undefined}
          {figmaUrl
            ? (
              <Link href={figmaUrl}>
                <VisibilityIcon />
                View the Figma file
              </Link>
            ) : undefined}
          {githubUrl
            ? (
              <Link href={githubUrl}>
                <GitHubIcon />
                Get the Code on GitHub
              </Link>
            ) : undefined}
        </Box>
      </Box>
      <Box className="flex__right">
        <img src={img} alt="" />
      </Box>
    </Box>
  );
}
