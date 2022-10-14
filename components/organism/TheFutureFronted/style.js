import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  futureContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '8rem',
  },
  futureContent: {
    '& .text': {
      '& .title': {
        fontWeight: ' 700',
        fontSize: '30px',
        lineHeight: '30px',
        margin: '2rem 0',
        '& span': {
          fontWeight: ' 700',
          fontSize: '30px',
          lineHeight: '30px',
          color: '#FE8888',
        },
      },
      '& .subtitle': {
        display: 'flex',
        alignItems: 'center',
        '& img': {
          height: '14px',
          width: '14px',
        },
        '& h2': {
          fontWeight: ' 700',
          fontSize: '12px',
          lineHeight: '30px',
          marginLeft: '.9rem',
        },
      },
      '& .description': {
        fontWeight: ' 600',
        fontSize: '16px',
        lineHeight: '26px',
      },
      '& .learn__more': {
        fontWeight: ' 600',
        fontSize: '16px',
        margin: '1rem 0',
        '& span': {
          fontWeight: ' 600',
          fontSize: '16px',
          color: '#FE8888',
        },
      },
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
    },
  },

  '@media (min-width: 600px)': {
    futureContent: {
      '& .text': {
        '& .title': {
          fontSize: '56px',
          lineHeight: '52px',
          maxWidth: '600px',
          '& span': {
            fontSize: '56px',
            lineHeight: '52px',
          },
        },
        '& .description': {
          fontSize: '20px',
          lineHeight: '30px',
          maxWidth: '700px',
        },
        '& .learn__more': {
          fontSize: '20px',
          '& span': {
            fontSize: '20px',
          },
        },
      },
      '& button.signup__btn': {
        width: '183px',
        height: '52px',
        borderRadius: '8px',
        fontSize: '20px',
      },
    },
  },

  '@media (min-width: 900px)': {
    futureContent: {
      '& .text': {
        '& .title': {
          fontSize: '64px',
          lineHeight: '56px',
          maxWidth: '100%',
        },
        '& .description': {
          fontSize: '20px',
          lineHeight: '30px',
          maxWidth: '605px',
        },
        '& button.signup__btn': {
          marginTop: '0',
          width: '180px',
          height: '52px',
          fontSize: '20px',
        },
      },
    },
  },
}));
