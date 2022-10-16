import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  offerContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '50px',
    paddingBottom: '50px',
  },
  offerContent: {
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
      maxWidth: '228px',
      '& span': {
        fontWeight: ' 700',
        fontSize: '36px',
        lineHeight: '37px',
        color: '#FE8888',
      },
    },
    '& div': {
      alignItems: 'center',
      marginTop: '25px',
      '& p.moto': {
        fontWeight: ' 700',
        fontSize: '16px',
        lineHeight: '28px',
        width: '80%',
      },
      '& button.signup__btn': {
        color: 'white',
        width: '149px',
        height: ' 44px',
        border: '3px solid #FE8888',
        borderRadius: '8px',
        textTransform: 'none',
        fontWeight: ' 700',
        fontSize: '16px',
        lineHeight: '20px',
        marginTop: '25px',
      },
    },
  },

  '@media (min-width: 600px)': {
    offerContent: {
      '& img.bolt__icon': {
        width: '49px',
        height: '49px',
      },
      '& h1.title': {
        fontSize: '60px',
        lineHeight: '56px',
        maxWidth: '380px',
        '& span': {
          fontSize: '60px',
          lineHeight: '56px',
        },
      },
      '& div': {
        '& p.moto': {
          fontSize: '18px',
        },
        '& button.signup__btn': {
          width: '188px',
          height: '52px',
          fontSize: '20px',
        },
      },
    },
  },

  '@media (min-width: 900px)': {
    offerContent: {
      '& h1.title': {
        fontSize: '78px',
        lineHeight: '72px',
        maxWidth: '505px',
        '& span': {
          fontSize: '78px',
          lineHeight: '72px',
        },
      },
      '& div': {
        '& p.moto': {
          maxWidth: '375px',
        },
      },
    },
  },
}));
