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
    heroContainer: {
      paddingTop: '80px',
    },
    heroContent: {
      '& h1.title': {
        fontSize: '64px',
        lineHeight: '64px',
        '&.highlighted': {
          fontSize: '64px',
          lineHeight: '64px',
        },
      },
      '& img.bolt__icon': {
        width: '2rem',
        transform: 'translate(-140%,10%)',
      },
      '& div': {
        marginTop: '15px',
        '& p.moto': {
          fontWeight: '700',
          fontSize: '20px',
          lineHeight: '28px',
          maxWidth: '420px',
        },
        '& button.signup__btn': {
          width: '183px',
          height: '52px',
          borderRadius: '8px',
          fontSize: '20px',
        },
      },

    },
  },

  '@media (min-width:1200px)': {
    heroContent: {
      '& img.bolt__icon': {
        width: '50px',
        transform: 'translate(-140%,10%)',
      },
      '& h1.title': {
        fontSize: '110px',
        lineHeight: '96px',
        '&.highlighted': {
          fontSize: '110px',
          lineHeight: '96px',
        },
      },
      '& div': {
        marginTop: '26px',
        display: 'flex',
        alignItems: 'center',
        '& p.moto': {
          fontWeight: '600',
          fontSize: '24px',
          lineHeight: '34px',
          maxWidth: '670px',
        },
        '& button.signup__btn': {
          marginTop: '0',
          width: '180px',
          height: '52px',
          fontSize: '20px',
          marginLeft: '36px',
        },
      },
    },
  },
}));
