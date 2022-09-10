import React from 'react';
import Link from '@mui/material/Link';
import {
  Box, Button, Menu, MenuItem, Drawer, List, ListItem, ListItemButton, ListItemText,
} from '@mui/material';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import useStyles from './style';

type Anchor = 'right';

export default function Navbar() {
  const classes = useStyles();

  // HANDLING DROPDOWN
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // HANDLING RIGHT MENU DRAWER
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (
    anchor: Anchor,
    open: boolean,
  ) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown'
        && ((event as React.KeyboardEvent).key === 'Tab'
          || (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['React components', 'Websites', 'Plugin for Figma', 'Docs'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box component="header" className={`${classes.header} container`}>
      {/* COMPANY LOGO HEADER */}
      <img className="header__logo" src="/images/logo-header.svg" alt="company logo" />

      {/* MENU DRAWER */}
      <Box className={classes.drawer}>
        {(['right'] as const).map((anchor) => (
          <React.Fragment key={anchor}>
            <Button onClick={toggleDrawer('right', true)}>
              <MenuIcon className={classes.menuIcon} />
            </Button>
            <Drawer
              anchor={anchor}
              open={state[anchor]}
              onClose={toggleDrawer(anchor, false)}
            >
              {list(anchor)}
            </Drawer>
          </React.Fragment>
        ))}
      </Box>

      {/* NAVBAR MENU */}
      <Box component="nav" className={classes.navbar}>
        <Button
          className={classes.navItem}
          id="basic-button"
          aria-controls={open ? 'basic-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Dashboard
          <ArrowDropDownIcon />
        </Button>
        <Menu
          className={classes.navItemDrop}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
        >
          <MenuItem onClick={handleClose}>React components</MenuItem>
          <MenuItem onClick={handleClose}>Websites</MenuItem>
          <MenuItem onClick={handleClose}>Plugin for Figma</MenuItem>
          <MenuItem onClick={handleClose}>Docs</MenuItem>
        </Menu>
        <Link className={classes.navItem} href="/" underline="none">Pricing</Link>
      </Box>

      {/* SIGN IN AND SIGN UP MENU */}
      <Box className={`${classes.authMenu}`}>
        <Link className="auth-btn login-btn" href="/" underline="none">Log In</Link>
        <Link className="auth-btn signup-btn" href="/" underline="none">Sign Up</Link>
      </Box>
    </Box>
  );
}
