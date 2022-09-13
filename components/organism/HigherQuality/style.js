import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  higherContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '6rem',
    paddingBottom: '6rem',
  },
  higherContent: {
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
    '& > img': {
      width: '106%',
      transform: 'translateX(-3%)',
    },
  },

  '@media (min-width: 600px)': {
    higherContent: {
      '& .advantages': {
        display: 'flex',
        gap: '2rem',
      },
    },
  },
}));
