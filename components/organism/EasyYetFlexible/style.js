import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  easyYetContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '6rem',
    paddingBottom: '6rem',
  },
  easyYetContent: {
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
          color: '#FE8888',
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
        maxWidth: '400px',
        fontWeight: '500',
        margin: '2rem 0',
      },
      '& .getstarted': {
        fontSize: '1.5rem',
        maxWidth: '20rem',
        fontWeight: '500',
        '& span': {
          fontSize: '1.5rem',
          maxWidth: '460px',
          fontWeight: '500',
          color: '#FE8888',
        },
      },
    },
  },

  '@media (min-width: 600px)': {
    easyYetContent: {
      '& .text': {
        '& .title': {
          fontSize: '2.6rem',
          '& span': {
            fontSize: '2.6rem',
          },
        },
        '& .description': {
          fontSize: '1.4rem',
          maxWidth: '100%',
        },
        '& .getstarted': {
          fontSize: '1.4rem',
          maxWidth: '100%',
          '& span': {
            fontSize: '1.4rem',
          },
        },
      },
    },
  },

  '@media (min-width: 900px)': {
    '& .text': {
      '& .title': {
        maxWidth: '29rem',
      },
      '& .description': {
        fontSize: '1.4rem',
        maxWidth: '45rem',
      },
    },
  },

}));
