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
        width: '14px',
        height: '14px',
      },
      '& h2': {
        fontWeight: ' 700',
        fontSize: '12px',
        lineHeight: '30px',
        marginLeft: '.9rem',
      },
    },
    '& iframe': {
      width: '100%',
      height: '194px',
      marginTop: '0.6rem',
    },

    '@media (min-width: 600px)': {
      '& iframe': {
        height: '337px',
      },
    },

    '@media (min-width: 900px)': {
      '& .subtitle': {
        '& img': {
          width: '1rem',
        },
      },
      '& iframe': {
        height: '607px',
        marginTop: '2rem',
      },
    },
  },
}));
