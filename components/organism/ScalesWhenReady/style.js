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
          marginTop: '2rem',
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
            fontSize: '.8rem',
            marginLeft: '.9rem',
          },
        },
      },
      '& img.dashboard__thumb': {
        width: '100%',
        margin: '3rem 0',
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
      },
    },
  },
}));
