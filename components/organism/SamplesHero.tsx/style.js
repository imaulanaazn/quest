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
      fontSize: '34px',
      lineHeight: '32px',
    },
    '& div': {
      alignItems: 'center',
      marginTop: '1rem',
      '& p.moto': {
        fontWeight: ' 600',
        fontSize: '16px',
        lineHeight: '24px',
        maxWidth: '270px',
      },
    },
  },

  '@media (min-width: 600px)': {
    heroContent: {
      '& h1.title': {
        fontSize: '50px',
        lineHeight: '52px',
      },
      '& img.bolt__icon': {
        width: '50px',
        height: '50px',
      },
      '& div': {
        '& p.moto': {
          fontWeight: ' 600',
          fontSize: '20px',
          lineHeight: '30px',
          maxWidth: '409px',
        },
      },
    },
  },

  '@media (min-width: 900px)': {
    heroContent: {
      '& h1.title': {
        fontSize: '64px',
        lineHeight: '64px',
      },
      '& div': {
        '& p.moto': {
          maxWidth: '29rem',
        },
      },
    },
  },
}));
