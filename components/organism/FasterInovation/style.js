import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  fasterContainer: {
    backgroundColor: '#171717',
    color: 'white',
    padding: '6rem 0',

  },
  fasterContent: {
    width: '70%',
    margin: 'auto',
    '& .text': {
      '& .title': {
        fontSize: '3.5rem',
        fontWeight: '700',
        lineHeight: '1',
        margin: '2rem 0 1.5rem',
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
        fontWeight: '500',
      },
    },
  },

  '@media (min-width: 600px)': {
    fasterContent: {
      padding: '0 2.6rem',
      width: '100%',
    },
  },

  '@media (min-width: 900px)': {
    fasterContent: {
      padding: '0',
      width: '70%',
    },
  },

}));
