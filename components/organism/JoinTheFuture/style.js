import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  joinContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '6rem',
  },
  joinContent: {
    margin: 'auto',
    '& .text': {
      '& .title': {
        fontWeight: ' 700',
        fontSize: '30px',
        lineHeight: '30px',
        margin: '2rem 0 1.5rem',
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
          fontSize: '1rem',
          marginLeft: '.9rem',
        },
      },
      '& .description': {
        fontWeight: ' 400',
        fontSize: '16px',
        lineHeight: '26px',
      },
    },
  },

  '@media (min-width: 600px)': {
    joinContent: {
      width: '100%',
      '& .text': {
        '& .title': {
          fontSize: '54px',
          lineHeight: '52px',
          '& span': {
            fontSize: '54px',
            lineHeight: '52px',
          },
        },
      },
      '& .description': {
        maxWidth: '430px',
      },
    },
  },

  '@media (min-width: 900px)': {
    joinContent: {
      '& .text': {
        '& .title': {
          fontSize: '66px',
          lineHeight: '62px',
        },
      },
      '& .description': {
        maxWidth: '480px',
        fontWeight: ' 600',
        fontSize: '20px',
        lineHeight: '30px',
      },
    },
  },

}));
