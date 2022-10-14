import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  // STYLE WHEN SCREEN SIZE IS < 600px
  advantagesContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '107px',
  },
  advantagesContent: {
    '& .dashboard__preview': {
      borderBottom: '3px solid #2E2E2E',
      '& .text': {
        '& .title': {
          margin: '2rem 0',
          fontWeight: '700',
          fontSize: '32px',
          lineHeight: '30px',
          maxWidth: '218px',
          '& span': {
            fontWeight: ' 700',
            fontSize: '32px',
            lineHeight: '30px',
            background: 'linear-gradient(270deg, #FE8888 27.16%, #8066FF 97.86%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textFillColor: 'transparent',
          },
        },
        '& .subtitle': {
          display: 'flex',
          alignItems: 'center',
          '& img': {
            width: '14px',
            height: '14px',
          },
          '& h2': {
            fontWeight: ' 700',
            fontSize: '12px',
            marginLeft: '.9rem',
          },
        },
      },
      '& img.dashboard__thumb': {
        width: '100%',
        margin: '3rem 0',
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

  '@media (min-width:600px)': {
    advantagesContent: {
      '& .dashboard__preview': {
        borderBottom: '3px solid #2E2E2E',
        '& .text': {
          '& .title': {
            maxWidth: '387px',
            fontSize: '44px',
            lineHeight: '42px',
            '& span': {
              fontSize: '44px',
              lineHeight: '42px',
            },
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

  // STYLE WHEN SCREEN SIZE IS > 900px
  '@media (min-width:900px)': {
    advantagesContent: {

      '& .dashboard__preview': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '3.5rem',
        '& .text': {
          width: '40%',
          '& .title': {
            fontSize: '2.5rem',
            marginTop: '1.5rem',
            '& span': {
              fontSize: '2.5rem',
            },
          },
          '& .subtitle': {
            '& img': {
              width: '1rem',
            },
          },
        },
        '& img.dashboard__thumb': {
          width: '55%',
        },
      },
      '& .our__advantages': {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '3rem',
        marginTop: '35px',
      },
      '& button.signup__btn': {
        width: '180px',
        height: '52px',
        fontSize: '20px',
      },
    },
  },
}));
