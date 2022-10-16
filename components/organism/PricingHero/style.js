import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  pricingContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '114px',
    paddingBottom: '50px',
  },
  pricingContent: {
    position: 'relative',
    color: 'white',
    '& img.bolt__icon': {
      width: '20px',
      height: '20px',
      position: 'absolute',
      top: '0',
      left: '0',
      transform: 'translate(-110%,10%)',
    },
    '& h1.title': {
      fontWeight: ' 700',
      fontSize: '36px',
      lineHeight: '36px',
      maxWidth: '250px',
      '& span': {
        background: 'linear-gradient(90deg, #8066FF 8.09%, #FE8888 50%)',
        WebkitBackgroundClip: 'text',
        WebkittextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
        fontWeight: ' 700',
        fontSize: '36px',
        lineHeight: '36px',
        color: '#FE8888',
      },
    },
    '& div': {
      alignItems: 'center',
      marginTop: '15px',
      '& p.moto': {
        fontWeight: ' 600',
        fontSize: '16px',
        lineHeight: '24px',
        width: '80%',
      },
    },
  },

  '@media (min-width: 600px)': {
    pricingContent: {
      '& h1.title': {
        fontSize: '48px',
        lineHeight: '42px',
        maxWidth: '100%',
        '& span': {
          fontSize: '48px',
          lineHeight: '42px',
        },
      },
      '& div': {
        '& p.moto': {
          fontSize: '18px',
          lineHeight: '30px',
        },
      },
    },
  },

  '@media (min-width: 900px)': {
    pricingContent: {
      '& h1.title': {
        fontSize: '68px',
        lineHeight: '60px',
        '& span': {
          fontSize: '68px',
          lineHeight: '60px',
        },
      },
      '& div': {
        '& p.moto': {
          fontSize: '20px',
        },
      },
    },
  },
}));
