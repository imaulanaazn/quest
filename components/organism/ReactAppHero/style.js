import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  heroContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '6rem',
    paddingBottom: '4rem',
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
      '& span': {
        fontWeight: '700',
        lineHeight: '1',
        fontSize: '3.5rem',
      },
    },
    '& div': {
      alignItems: 'center',
      marginTop: '3rem',
      '& p.moto': {
        fontSize: '1.8rem',
        fontWeight: '500',
        width: '80%',
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

  '@media (min-width: 600px)': {
    heroContent: {
      '& div': {
        marginTop: '2rem',
        '& p.moto': {
          width: '100%',
          fontSize: '1.6rem',
        },
        '& button.signup__btn': {
          marginTop: '2rem',
          padding: '0',
        },
      },
    },
  },

  '@media (min-width: 900px)': {
    heroContent: {
      '& div': {
        display: 'flex',
        '& p.moto': {
          width: 'initial',
          fontSize: '1.5rem',
          maxWidth: '38rem',
        },
        '& button.signup__btn': {
          margin: '0',
          marginLeft: '3rem',
          minWidth: '180px',
        },
      },
    },
  },
}));
