import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  header: {
    width: '100vw',
    backgroundColor: '#171717',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: '.5rem',
    paddingBottom: '.5rem',
    '& img.header__logo': {
      width: '7rem',
    },
  },
  menuIcon: {
    fontSize: '2.5rem',
    color: 'white',
  },
  navbar: {
    display: 'none',
    alignItems: 'center',
    flex: '1',
    justifyContent: 'center',
    '& button': {
      fontSize: '1rem',
    },
    '&:hover': {
      backgroundColor: 'none',
    },
  },
  navItem: {
    textTransform: 'none',
    fontSize: '.9rem',
    color: 'white',
    margin: '0 .5rem',
    padding: '0',
    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  navItemDrop: {
    '& .MuiPaper-root': {
      backgroundColor: '#171717',
      '& li.MuiButtonBase-root': {
        color: 'white',
        '&:hover': {
          backgroundColor: '#979797',
        },
      },
    },
  },
  authMenu: {
    display: 'none',
    '& a.auth-btn': {
      margin: '0 .8rem',
      color: 'white',
      fontSize: '.9rem',
    },
    '& a.auth-btn.signup-btn': {
      color: '#FE8888',
    },
  },

  // 600-900 px
  '@media (min-width:600px)': {
    header: {
      display: 'flex',
      paddingTop: '1rem',
      paddingBottom: '1rem',
    },
    drawer: {
      display: 'none',
    },
    navbar: {
      display: 'flex',
    },
    navItem: {
      fontSize: '1rem',
    },
    authMenu: {
      display: 'block',
      '& a.auth-btn': {
        fontSize: '1rem',
      },
    },
  },

  // 900-1200 px
  '@media (min-width:900px)': {
    header: {
      '& img.header__logo': {
        width: '6rem',
      },
    },
    navbar: {
      justifyContent: 'start',
      marginLeft: '10rem',
    },
  },

  // 1200-1536 px
  '@media (min-width:1200px)': {

  },

  // > 1536  px
  '@media (min-width:1536px)': {

  },
}));
