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
      '& .description': {
        fontSize: '1.5rem',
        fontWeight: '500',
        maxWidth: '460px',
      },
      '& .learn__more': {
        fontSize: '1.5rem',
        fontWeight: '500',
        margin: '1rem 0',
        '& span': {
          fontSize: '1.5rem',
          fontWeight: '500',
          color: '#FE8888',
        },
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

  '@media (min-width: 600px)': {
    futureContent: {
      '& .text': {
        '& .title': {
          maxWidth: '600px',
        },
        '& .description': {
          maxWidth: '700px',
        },
      },
    },
  },

  '@media (min-width: 900px)': {
    futureContent: {
      '& .text': {
        '& .title': {
          maxWidth: '100%',
        },
        '& .description': {
          fontSize: '1.3rem',
          maxWidth: '605px',
        },
        '& .learn__more': {
          fontSize: '1.3rem',
        },
        '& .signup__btn': {
          padding: '.2rem 1.2rem',
          fontSize: '1.3rem',
          fontWeight: '500',
        },
      },
    },
  },
}));
