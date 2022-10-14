import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  // STYLE WHEN SCREEN SIZE IS < 600px
  advantagesContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '108px',
  },
  advantagesContent: {
    '& .dashboard__preview': {
      borderBottom: '3px solid #2E2E2E',
      '& .text': {
        '& .title': {
          fontWeight: ' 700',
          fontSize: '32px',
          lineHeight: '30px',
          marginTop: '26px',
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
            fontWeight: '700',
            fontSize: '12px',
            lineWeight: '30px',
            letterSpacing: '2px',
            marginLeft: '8px',
          },
        },
      },
      '& img.dashboard__thumb': {
        width: '100%',
        margin: '30px 0',
      },
    },
    '& .our__advantages': {
      paddingTop: '5px',
    },
  },

  '@media (min-width:600px)': {
    advantagesContent: {
      '& .dashboard__preview': {
        borderBottom: '3px solid #2E2E2E',
        '& .text': {
          '& .title': {
            fontSize: '44px',
            lineHeight: '42px',
            maxWidth: '428px',
            '& span': {
              fontSize: '44px',
              lineHeight: '42px',
            },
          },
        },
        '& img.dashboard__thumb': {
          margin: '30px 0 40px',
        },
      },
      '& .our__advantages': {
        paddingTop: '15px',
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
        paddingBottom: '35px',
        '& .text': {
          width: '40%',
        },
        '& img.dashboard__thumb': {
          width: '55%',
          margin: '0',
        },
      },
      '& .our__advantages': {
        display: 'flex',
        justifyContent: 'space-between',
        gap: '5.2rem',
        paddingTop: '35px',
      },
    },
  },
}));
