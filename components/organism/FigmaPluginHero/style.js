import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  heroContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '6rem',
    paddingBottom: '6rem',

    '& div.icons': {
      display: 'flex',
      marginBottom: '2rem',
      '& img': {
        width: '4rem',
      },
      '& svg': {
        fontSize: '3.5rem',
      },
    },
  },
  heroContent: {
    position: 'relative',
    color: 'white',
    '& img.bolt__icon': {
      width: '2rem',
      position: 'absolute',
      top: '0',
      left: '0',
      transform: 'translate(-110%,10%)',
    },
    '& h1.title': {
      fontWeight: '700',
      lineHeight: '1',
      fontSize: '3.5rem',
    },
    '& div': {
      alignItems: 'center',
      marginTop: '1rem',
      '& p.moto': {
        fontSize: '1.8rem',
        fontWeight: '500',
        width: '82%',
      },
    },
    '& button.signup__btn': {
      color: 'white',
      height: '3.5rem',
      border: '3px solid #FE8888',
      borderRadius: '10px',
      textTransform: 'none',
      fontSize: '1.4rem',
      fontWeight: '600',
      marginTop: '2rem',
      padding: '5px 15px',
    },
  },

  '@media (min-width: 600px)': {
    heroContainer: {
      '& div.icons': {
        '& img': {
          width: '3.5rem',
        },
        '& svg': {
          fontSize: '3rem',
        },
      },
    },
    heroContent: {
      '& h1.title': {
        fontSize: '3rem',
        maxWidth: '27rem',
      },
      '& div': {
        marginTop: '2rem',
        '& p.moto': {
          maxWidth: '30rem',
          width: '100%',
          fontSize: '1.4rem',
        },
      },
      '& button.signup__btn': {
        marginTop: '2rem',
        height: '3rem',
        fontSize: '1.25rem',
      },
    },
  },

  '@media (min-width: 900px)': {
    heroContent: {
      '& div': {
        '& p.moto': {
          fontSize: '1.3rem',
          maxWidth: '38rem',
        },
        '& button.signup__btn': {
          margin: '0',
          minWidth: '180px',
        },
      },
    },
  },
}));
