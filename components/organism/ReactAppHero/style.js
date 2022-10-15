import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  heroContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '50px',
    paddingBottom: '54px',
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
      fontSize: '36px',
      lineHeight: '37px',
      '& span': {
        fontWeight: ' 700',
        fontSize: '36px',
        lineHeight: '37px',
        background: 'linear-gradient(90deg, #8066FF 8.09%, #FE8888 50%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        BackgroundClip: 'text',
        TextFillColor: 'transparent',
      },
    },
    '& div': {
      alignItems: 'center',
      marginTop: '20px',
      '& p.moto': {
        fontWeight: ' 700',
        fontSize: '16px',
        lineHeight: '22px',
        maxWidth: '263px',
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
        marginTop: '35px',
      },
    },
  },

  '@media (min-width: 600px)': {
    heroContainer: {
      paddingTop: '70px',
      paddingBottom: '64px',
    },
    heroContent: {
      '& h1.title': {
        fontSize: '78px',
        lineHeight: '72px',
        '& span': {
          fontSize: '78px',
          lineHeight: '72px',
        },
      },
      '& div': {
        marginTop: '2rem',
        '& p.moto': {
          width: '100%',
          fontSize: '18px',
          lineHeight: '28px',
          maxWidth: '100%',
        },
        '& button.signup__btn': {
          marginTop: '2rem',
          width: '183px',
          height: '52px',
          borderRadius: '8px',
          fontSize: '20px',
        },
      },
      '& img.bolt__icon': {
        width: '50px',
        height: '50px',
      },
    },
  },

  '@media (min-width: 900px)': {
    heroContainer: {
      paddingTop: '80px',
      paddingBottom: '60px',
    },
    heroContent: {
      '& h1.title': {
        fontWize: '110px',
        lineHeight: '96px',
        '& span': {
          fontWize: '110px',
          lineHeight: '96px',
        },
      },
      '& div': {
        display: 'flex',
        '& p.moto': {
          width: 'initial',
          fontSize: '1.3rem',
          maxWidth: '38rem',
        },
        '& button.signup__btn': {
          margin: '0',
          marginLeft: '2rem',
          minWidth: '180px',
        },
      },
    },
  },
}));
