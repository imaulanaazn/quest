import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  heroContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '106px',
    paddingBottom: '106px',

    '& div.icons': {
      display: 'flex',
      marginBottom: '2rem',
      '& img': {
        width: '40px',
        height: '41px',
      },
      '& svg': {
        fontSize: '2rem',
      },
    },
  },
  heroContent: {
    position: 'relative',
    color: 'white',
    '& img.bolt__icon': {
      width: '24px',
      height: '24px',
      position: 'absolute',
      top: '0',
      left: '0',
      transform: 'translate(-110%,10%)',
    },
    '& h1.title': {
      fontWeight: ' 700',
      fontSize: '30px',
      lineHeight: '30px',
    },
    '& div': {
      alignItems: 'center',
      marginTop: '1rem',
      '& p.moto': {
        fontWeight: ' 600',
        fontSize: '16px',
        lineHeight: '26px',
        maxWidth: '250px',
      },
    },
    '& button.signup__btn': {
      fontWeight: ' 700',
      fontSize: '16px',
      lineHeight: '20px',
      color: 'white',
      border: '3px solid #FE8888',
      borderRadius: '10px',
      textTransform: 'none',
      width: '155px',
      height: ' 44px',
      marginTop: '2rem',
    },
  },

  '@media (min-width: 600px)': {
    heroContainer: {
      '& div.icons': {
        '& img': {
          width: '46px',
          height: '46px',
        },
        '& svg': {
          fontSize: '3rem',
        },
      },
    },
    '& img.bolt__icon': {
      width: '36px',
      height: '36px',
    },
    heroContent: {
      '& h1.title': {
        fontSize: '56px',
        lineHeight: '52px',
      },
      '& div': {
        marginTop: '2rem',
        '& p.moto': {
          maxWidth: '483px',
          fontSize: '20px',
          lineHeight: '30px',
        },
      },
      '& button.signup__btn': {
        fontSize: '20px',
        lineHeight: '20px',
        width: '196px',
        height: ' 52px',
      },
    },
  },

  '@media (min-width: 900px)': {
    heroContainer: {
      '& div.icons': {
        '& img': {
          width: '73px',
          height: '73px',
        },
        '& svg': {
          fontSize: '4rem',
        },
      },
    },
    heroContent: {
      '& img.bolt__icon': {
        width: '50px',
        height: '50px',
      },
      '& h1.title': {
        fontSize: '68px',
        lineHeight: '64px',
        maxWidth: '601px',
      },
      '& div': {
        marginTop: '2rem',
        '& p.moto': {
          maxWidth: '483px',
          fontSize: '20px',
          lineHeight: '30px',
        },
      },
      '& button.signup__btn': {
        fontSize: '20px',
        lineHeight: '20px',
        width: '196px',
        height: ' 52px',
      },
    },
  },
}));
