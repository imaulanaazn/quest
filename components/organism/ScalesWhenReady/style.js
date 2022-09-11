import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  // STYLE WHEN SCREEN SIZE IS < 600px
  advantagesContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '8rem',
  },
  advantagesContent: {
    '& .dashboard__preview': {
      borderBottom: '3px solid #2E2E2E',
      '& .text': {
        '& .title': {
          fontSize: '3.5rem',
          fontWeight: '700',
          lineHeight: '1',
          margin: '2rem 0',
          '& span': {
            fontSize: '3.5rem',
            fontWeight: '700',
            lineHeight: '1',
          },
        },
        '& .subtitle': {
          display: 'flex',
          alignItems: 'center',
          '& img': {
            width: '1.4rem',

          },
          '& h2': {
            fontSize: '1rem',
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
      borderRadius: '10px',
      border: '2px solid #FE8888',
      color: 'white',
      textTransform: 'none',
      fontSize: '1.5rem',
      fontWeight: '600',
      padding: '.5rem 2rem',
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
      },
      '& .text .signup__btn': {
        padding: '.2rem 1.2rem',
        fontSize: '1.3rem',
        fontWeight: '500',
      },
    },
  },
}));
