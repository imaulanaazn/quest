import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  SeeQuestContaier: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '6rem',
    '& .subtitle': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      '& img': {
        width: '1.4rem',
      },
      '& h2': {
        fontSize: '1rem',
        marginLeft: '.9rem',
      },
    },
    '& iframe': {
      width: '100%',
      height: '16rem',
      marginTop: '1rem',
    },

    '@media (min-width: 600px)': {
      '& iframe': {
        height: '22rem',
      },
    },

    '@media (min-width: 900px)': {
      '& .subtitle': {
        '& img': {
          width: '1rem',
        },
      },
      '& iframe': {
        height: '34rem',
        marginTop: '2rem',
      },
    },
  },
}));
