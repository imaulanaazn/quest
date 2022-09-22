import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  heroContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '6rem',
    paddingBottom: '6rem',
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
  },

  '@media (min-width: 600px)': {
    heroContent: {
      '& h1.title': {
        maxWidth: '100%',
      },
      '& div': {
        '& p.moto': {
          fontSize: '1.4rem',
        },
      },
    },
  },

  '@media (min-width: 900px)': {
    heroContent: {
      '& div': {
        '& p.moto': {
          maxWidth: '29rem',
          width: '100%',
        },
      },
    },
  },
}));
