import React from 'react';
import { Box } from '@mui/material';
import Link from 'next/link';
import makeStyles from './style';

export default function Footer() {
  const classes = makeStyles();
  return (
    <Box className={`${classes.footerContainer} container`}>
      <Box>
        <img src="images/logo-header.svg" alt="" />
      </Box>
      <Box className={classes.footerContent}>
        <Box className="listContainer">
          <ul>
            <li className="list__title"><a href="/#">Product</a></li>
            <li><a href="/#">Build React components</a></li>
            <li><a href="/#">Build Websites</a></li>
            <li><a href="/#">Plugin for Figma</a></li>
            <li><a href="/#">Docs</a></li>
          </ul>
        </Box>
        <Box className="listContainer">
          <Box>
            <ul>
              <li className="list__title"><a href="/#">Social</a></li>
              <li><a href="/#">Twitter</a></li>
              <li><a href="/#">Medium</a></li>
              <li><a href="/#">Instagram</a></li>
            </ul>
          </Box>
          <Box>
            <ul>
              <li className="list__title"><a href="/#">Company</a></li>
              <li><a href="/#">Jobs</a></li>
              <li><Link href="/contact"><a href="/#">Contact Us</a></Link></li>
            </ul>
          </Box>
        </Box>
        <Box className="listContainer">
          <Box>
            <ul>
              <li className="list__title"><a href="/#">Community</a></li>
              <li><a href="/#">Discord</a></li>
            </ul>
          </Box>
          <Box>
            <ul>
              <li className="list__title"><a href="/#">Terms</a></li>
              <li><a href="/#">Privacy Policy</a></li>
              <li><a href="/#">Terms of Service</a></li>
            </ul>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
