import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  drawer: {
    display: 'block',
  },
  header: {
    width: '100%',
    backgroundColor: '#171717',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '17px 20px 17px 20px',
    '& img.header__logo': {
      width: '147px',
    },

  },
  menuIcon: {
    fontSize: '2.9rem',
    color: 'white',
  },
  navbar: {
    display: 'none',
    alignItems: 'center',
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
    fontWeight: '700',
    textDecoration: 'none',
    color: 'white',
    padding: '0',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    '&.button': {
      marginRight: '30px',
    },
  },
  navItemDrop: {
    '& .MuiPaper-root': {
      backgroundColor: '#171717',
      '& li': {
        '&:hover': {
          backgroundColor: '#979797',
        },
        '& a': {
          color: 'white',
          textDecoration: 'none',
        },
      },
    },
  },
  authMenu: {
    textAlign: 'right',
    flex: '1',
    display: 'none',
    '& a.auth-btn': {
      marginLeft: '30px',
      fontWeight: '700',
      color: 'white',
      fontSize: '.9rem',
      textDecoration: 'none',
    },
    '& a.auth-btn.signup-btn': {
      color: '#FE8888',
    },
  },

  // 600-900 px
  '@media (min-width:600px)': {
    header: {
      padding: '13px 33px',
      display: 'flex',
      justifyContent: 'unset',
    },
    drawer: {
      display: 'none',
    },
    navbar: {
      display: 'flex',
      marginLeft: '58px',
    },
    navItem: {
      fontSize: '16px',
      '&.button': {
        fontSize: '16px',
      },
    },
    authMenu: {
      display: 'block',
      '& a.auth-btn': {
        fontSize: '16px',
      },
    },
  },

  // 900-1200 px
  '@media (min-width:1200px)': {
    header: {
      padding: '14px 180px',
    },
    navbar: {
      marginLeft: '135px',
    },
    navItem: {
      '&.button': {
        marginRight: '39px',
      },
    },
    authMenu: {
      '& a.auth-btn': {
        marginLeft: '33px',
      },
    },
  },

}));
