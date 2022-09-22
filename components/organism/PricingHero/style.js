import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  pricingContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '6rem',
    paddingBottom: '4rem',
  },
  pricingContent: {
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
      maxWidth: '23rem',
      '& span': {
        fontWeight: '700',
        lineHeight: '1',
        fontSize: '3.5rem',
        color: '#FE8888',
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
    },
  },

  '@media (min-width: 600px)': {
    pricingContent: {
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
}));
