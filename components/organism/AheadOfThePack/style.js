import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  aheadContainer: {
    backgroundColor: '#171717',
    color: 'white',
  },
  aheadContent: {
    paddingTop: ' 8rem',
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
    '& .title': {
      fontSize: '3.5rem',
      margin: '2rem 0',
      fontWeight: '700',
      lineHeight: '1',
      '& span': {
        fontSize: '3.5rem',
        fontWeight: '700',
        lineHeight: '1',
      },
    },
    '& thead th:first-child': {
      width: '40%',
    },
    '& thead tr th img': {
      width: '100%',
    },
    '& tbody td svg': {
      fontSize: '3rem',
      borderRadius: '50%',
    },
    '& td,th': {
      color: 'White',
      width: '20%',
      fontSize: '1.2rem',
      fontWeight: '500',
    },
    '& .tables .checked__blue': {
      color: '#A66FFF',
      backgroundColor: 'white',
    },
    '& .tables .checked__orange': {
      color: '#FE8888',
      backgroundColor: 'white',
    },
    '& .tables .unchecked': {
      color: '#FFFFFF',
      backgroundColor: '#BBBBBB',
    },
    '& .tables tr': {
      borderCollapse: 'separate',
    },
  },
  '@media (min-width:600px)': {
    '& thead th:first-child': {
      width: '55%',
    },
    aheadContent: {
      '& .title': {
        margin: '3rem 0',
      },
      '& td,th': {
        width: '15%',
      },
      '& tbody td svg': {
        fontSize: '2.8rem',
      },
    },
  },

  '@media (min-width: 900px)': {
    aheadContent: {
      '& .title': {
        maxWidth: '450px',
        margin: '2.5rem 0',
      },
      '& thead th:first-child': {
        width: '40%',

      },
      '& td,th': {
        width: '20%',
      },
      '& thead tr th img': {
        maxWidth: '140px',
      },
    },
  },
}));
