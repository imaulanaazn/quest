import React, { useEffect, useState } from 'react';
import {
  Box, Typography, Tab, Tabs,
} from '@mui/material';
import useStyles from './style';

// TAB PANEL PROPS
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// CHANGE TAB PANEL FUNCTION
function TabPanel(props: TabPanelProps) {
  const {
    children, value, index, ...other
  } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Box>{children}</Box>
        </Box>
      )}
    </div>
  );
}

TabPanel.defaultProps = {
  children: null,
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function HowItWorks() {
  const classes = useStyles();

  const [device, setDevice] = useState('');
  function usedDevice(size:number) {
    if (size < 600) {
      setDevice('M');
    } else if (size > 900) {
      setDevice('D');
    } else {
      setDevice('T');
    }
  }
  useEffect(() => {
    usedDevice(window.outerWidth);
    window.addEventListener('resize', () => {
      usedDevice(window.outerWidth);
    });
  }, []);

  // TAB PANEL HANDLE
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box className={`${classes.HowItContainer} container`}>
      <Box className={classes.HowItContent}>
        <img src="images/white.svg" alt="" />
        <Box className="text">
          <Box className="subtitle">
            <img src="images/bolt.svg" alt="bolt icon" />
            <Typography variant="h2">CONVERT DESIGN INTO CODE</Typography>
          </Box>
          <Typography className="title" variant="h1">
            How does it work?
          </Typography>
          <Typography className="description">
            Convert custom Figma designs into beautiful React code
            and go to market faster than ever thought possible.
          </Typography>
        </Box>

        {/* TAB PANEL */}
        <Box className="tab__btn__container" sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="SYNC MUI DSEIGN SYSTEM" {...a11yProps(0)} />
            <Tab label="EXPORT DESIGN" {...a11yProps(1)} />
            <Tab label="SETUP IN QUEST" {...a11yProps(2)} />
            <Tab label="EXPORT REACT CODE" {...a11yProps(3)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box className="tab__content">
            <img src={`images/Step Visual 1 - ${device}.png`} alt="" />
            <Typography>
              Sync your Material UI based design system and/or copy
              & paste MUI components into your custom designs
            </Typography>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box className="tab__content">
            <img src={`images/Step Visual 2 - ${device}.png`} alt="" />
            <Typography>
              Export your Figma components with the
              Quest plugin for Figma into the Quest web app
            </Typography>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box className="tab__content">
            <img src={`images/Step Visual 3 - ${device}.png`} alt="" />
            <Typography>Add props, bindings & features inside the Quest web app</Typography>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Box className="tab__content">
            <img src={`images/Step Visual 3 - ${device}.png`} alt="" />
            <Typography>
              Export your component or entire React app (CRA or Next.js)
              & get clean code as good as a top-notch developer would write
            </Typography>
          </Box>
        </TabPanel>
      </Box>
    </Box>
  );
}
