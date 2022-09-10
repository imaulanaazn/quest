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

export default function FitYourWorkflow() {
  // USE STYLE FROM ./style
  const classes = useStyles();

  // DEFINING WICH IMAGE SHOULD APPEAR ON TABS
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
    <Box className={`${classes.workFlowContainer}`}>
      <Box className={classes.workFlowContent}>
        <Box className="text container">
          <Box className="subtitle">
            <img src="images/bolt.svg" alt="bolt icon" />
            <Typography variant="h2">FIT YOUR WORKFLOW</Typography>
          </Box>
          <Typography className="title" variant="h1">
            So easy...
            {' '}
            <br />
            <Typography variant="caption">Become a Pro </Typography>
            in 15 minutes
          </Typography>
          <Typography className="learn__more">
            <Typography variant="caption">Learn more </Typography>
            about our features.
          </Typography>
        </Box>

        {/* TAB PANEL */}
        <Box className="tab__btn__container" sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="EXPORT DESIGN" {...a11yProps(0)} />
            <Tab label="SET UP IN QUEST" {...a11yProps(1)} />
            <Tab label="EXPORT CODE" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box className="tab__content">
            <img src={`images/Step Visual1-${device}.png`} alt="" />
            <Typography>
              Export your Figma components to Quest &
              generate pixel-perfect presentation
            </Typography>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Box className="tab__content">
            <img src={`images/Step Visual2-${device}.png`} alt="" />
            <Typography>Add props / bindings / backend interface</Typography>
          </Box>
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Box className="tab__content">
            <img src={`images/Step Visual3-${device}.png`} alt="" />
            <Typography>Export code components and add them to your source control</Typography>
          </Box>
        </TabPanel>
      </Box>
    </Box>
  );
}
