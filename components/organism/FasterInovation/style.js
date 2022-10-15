import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  fasterContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '63px',
    paddingBottom: '63px',
  },
  fasterContent: {
    '& .text': {
      '& .title': {
        fontWeight: ' 700',
        fontSize: '30px',
        lineHeight: '30px',
        margin: '24px 0 18px',
        '& span': {
          fontWeight: ' 700',
          fontSize: '30px',
          lineHeight: '30px',
          color: '#FE8888',
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
          fontWeight: ' 700',
          fontSize: '12px',
          lineHeight: '30px',
          marginLeft: '.9rem',
        },
      },
      '& .description': {
        fontWeight: ' 600',
        fontSize: '16px',
        lineHeight: '26px',
      },
    },
  },

  '@media (min-width: 600px)': {
    fasterContainer: {
      paddingTop: '73px',
      paddingBottom: '73px',
    },
    fasterContent: {
      width: '100%',
      '& .text': {
        '& .title': {
          fontSize: '52px',
          lineHeight: '52px',
          margin: '18px 0',
          '& span': {
            fontSize: '52px',
            linHeight: '52px',
          },
        },
        '& .description': {
          fontSize: '18px',
          lineHeight: '26px',
        },
      },
    },
  },

  '@media (min-width: 900px)': {
    fasterContainer: {
      paddingTop: '83px',
      paddingBottom: '83px',
    },
    fasterContent: {
      padding: '0',
      width: '70%',
      margin: '0 auto',
      '& .description': {
        fontSize: '20px',
        lineHeight: '30px',
      },
    },
  },

}));
