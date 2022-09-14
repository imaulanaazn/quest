import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  offerContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '6rem',
    paddingBottom: '4rem',
  },
  offerContent: {
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
      '& button.signup__btn': {
        color: 'white',
        height: '3.5rem',
        border: '3px solid #FE8888',
        borderRadius: '10px',
        textTransform: 'none',
        fontSize: '1.4rem',
        fontWeight: '600',
        marginTop: '3rem',
        padding: '5px 15px',
      },
    },
  },

  '@media (min-width: 600px)': {
    offerContent: {
      '& div': {
        '& p.moto': {
          fontSize: '1.4rem',
        },
      },
    },
  },

  '@media (min-width: 900px)': {
    offerContent: {
      '& div': {
        '& p.moto': {
          width: '20rem',
        },
      },
    },
  },
}));
