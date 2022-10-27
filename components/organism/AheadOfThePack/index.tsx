import React from 'react';
import {
  Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody,
} from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import useStyles from './style';

function createData(
  feature: string,
  quest: JSX.Element,
  anima: JSX.Element,
  bubble: JSX.Element,
) {
  return {
    feature, quest, anima, bubble,
  };
}

const rows = [
  createData('Build new applications', <CheckCircleIcon className="checked__blue" />, <CheckCircleIcon className="checked__orange" />, <CheckCircleIcon className="checked__orange" />),
  createData('Generates react.js code', <CheckCircleIcon className="checked__blue" />, <CheckCircleIcon className="checked__orange" />, <CancelIcon className="unchecked" />),
  createData('Integrates with the design and dev tools you love', <CheckCircleIcon className="checked__blue" />, <CancelIcon className="unchecked" />, <CancelIcon className="unchecked" />),
  createData('Add to existing applications easily', <CheckCircleIcon className="checked__blue" />, <CancelIcon className="unchecked" />, <CancelIcon className="unchecked" />),
  createData('Design system support built-in', <CheckCircleIcon className="checked__blue" />, <CancelIcon className="unchecked" />, <CancelIcon className="unchecked" />),
  createData('Component library support built-in (MUI)', <CheckCircleIcon className="checked__blue" />, <CancelIcon className="unchecked" />, <CancelIcon className="unchecked" />),
  createData('Clean code with separation of concerns', <CheckCircleIcon className="checked__blue" />, <CancelIcon className="unchecked" />, <CancelIcon className="unchecked" />),
  createData('Generates production-ready code', <CheckCircleIcon className="checked__blue" />, <CancelIcon className="unchecked" />, <CancelIcon className="unchecked" />),
];

export default function AheadOfThePack() {
  const classes = useStyles();
  return (
    <Box className={`${classes.aheadContainer} container`}>
      <Box className={classes.aheadContent}>
        <Box className="text">
          <Box className="subtitle">
            <img src="images/bolt.svg" alt="bolt icon" />
            <Typography variant="h2">AHEAD OF THE PACK</Typography>
          </Box>
          <Typography className="title" variant="h1">
            Built for the most demanding
            {' '}
            <br />
            <Typography variant="caption">product teams </Typography>
          </Typography>
        </Box>

        <Box className="tables">
          <TableContainer>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell> </TableCell>
                  <TableCell align="center"><img src="images/Quest logo comparison.svg" alt="quest logo" /></TableCell>
                  <TableCell align="center"><img src="images/logo a.svg" alt="company a logo" /></TableCell>
                  <TableCell align="center"><img src="images/logo b.svg" alt="company b logo" /></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    className="row"
                    key={row.feature}
                  >
                    <TableCell>{row.feature}</TableCell>
                    <TableCell align="center">{row.quest}</TableCell>
                    <TableCell align="center">{row.anima}</TableCell>
                    <TableCell align="center">{row.bubble}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
    </Box>
  );
}
