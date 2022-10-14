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
        width: '14px',
        height: '14px',
      },
      '& h2': {
        fontWeight: '700',
        fontSize: '12px',
        marginLeft: '.9rem',
      },
    },
    '& .title': {
      fontWeight: ' 700',
      fontSize: '30px',
      lineHeight: '30px',
      margin: '2rem 0',
      '& span': {
        fontWeight: ' 700',
        fontSize: '30px',
        lineHeight: '30px',
        background: 'linear-gradient(270deg, #FE8888 52.38%, #8066FF 97.86%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        BackgroundClip: 'text',
        TextFillColor: 'transparent',
      },
    },
    '& thead th:first-child': {
      width: '40%',
    },
    '& thead tr th img': {
      width: '100%',
    },
    '& tbody td svg': {
      fontSize: '2rem',
      borderRadius: '50%',
    },
    '& td,th': {
      color: 'White',
      width: '20%',
      fontWeight: ' 700',
      fontSize: '12px',
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
        fontSize: '48px',
        lineHeight: '46px',
        margin: '3rem 0',
        '& span': {
          fontSize: '48px',
          lineHeight: '46px',
        },
      },
      '& td,th': {
        width: '15%',
        fontSize: '16px',
        lineHeight: '24px',
      },
      '& tbody td svg': {
        fontSize: '2.5rem',
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
