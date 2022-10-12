import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  heroContainer: {
    backgroundColor: '#171719',
    paddingTop: '50px',
    paddingBottom: '5.5rem',
  },
  heroContent: {
    position: 'relative',
    color: 'white',
    '& img.bolt__icon': {
      width: '22px',
      position: 'absolute',
      top: '0',
      left: '0px',
      transform: 'translate(-110%,10%)',
    },
    '& h1.title': {
      fontWeight: '700',
      lineHeight: '38px',
      fontSize: '40px',
      '&.highlighted': {
        fontWeight: '700',
        lineHeight: '38px',
        fontSize: '40px',
        backgroundColor: '#FE8888',
        width: 'fit-content',
        backgroundImage: 'linear-gradient(90deg, #8066FF, #FE8888 )',
        WebkitBackgroundClip: 'text',
        MozBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        MozTextFillColor: 'transparent',
      },
    },
    '& div': {
      alignItems: 'center',
      marginTop: '24px',
      '& p.moto': {
        fontSize: '16px',
        fontWeight: '700',
        lineHeight: '22px',
      },
      '& button.signup__btn': {
        color: 'white',
        height: '44px',
        width: '143px',
        border: '3px solid #FE8888',
        borderRadius: '10px',
        textTransform: 'none',
        fontSize: '16px',
        letterSpacing: '0.4px',
        fontWeight: '700',
        marginTop: '30px',
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
