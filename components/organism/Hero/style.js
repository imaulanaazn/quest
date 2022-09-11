import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  heroContainer: {
    backgroundColor: '#171719',
    paddingTop: '5.5rem',
    paddingBottom: '5.5rem',
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
      marginTop: '3rem',
      '& p.moto': {
        fontSize: '1.6rem',
        fontWeight: '600',
        width: '75%',
      },
      '& button.signup__btn': {
        color: 'white',
        height: '3.5rem',
        border: '3px solid #FE8888',
        borderRadius: '10px',
        textTransform: 'none',
        fontSize: '1.4rem',
        fontWeight: '600',
        marginTop: '3rem',
      },
    },
  },

  '@media (min-width:600px)': {
    heroContent: {
      '& img.bolt__icon': {
        width: '2rem',
        transform: 'translate(-110%,10%)',
      },
      '& div': {
        '& p.moto': {
          fontSize: '1.4rem',
          fontWeight: '500',
          width: '65%',
        },
        '& button.signup__btn': {
          border: '3px solid #FE8888',
          borderRadius: '10px',
          height: '3rem',
          fontSize: '1.2rem',
        },
      },

    },
  },

  '@media (min-width:900px)': {
    heroContent: {
      '& img.bolt__icon': {
        width: '2.4rem',
        transform: 'translate(-140%,10%)',
      },
      '& h1.title': {
        fontWeight: '700',
        lineHeight: '1',
        fontSize: '5.5rem',
      },
      '& div': {
        display: 'flex',
        alignItems: 'center',
        '& p.moto': {
          fontSize: '1.3rem',
          fontWeight: '500',
          width: '55%',
        },
        '& button.signup__btn': {
          fontSize: '1.1rem',
          marginTop: '0',
          marginLeft: '2rem',
        },
      },
    },
  },
}));
