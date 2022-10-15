import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  fasterContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '46px 0 40px',
  },
  fasterContent: {
    margin: 'auto',
    '& .text': {
      '& .title': {
        fontWeight: ' 700',
        fontSize: '30px',
        lineHeight: '30px',
        margin: '19px 0',
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
    fasterContent: {
      padding: '0 2.6rem',
      width: '100%',
      '& .text': {
        '& .title': {
          fontSize: '46px',
          lineHeight: '47px',
          '& span': {
            fontSize: '46px',
            lineHeight: '47px',
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
    fasterContent: {
      padding: '0',
      maxWidth: 'max-content',
      margin: 'auto',
      '& .text': {
        '& .title': {
          maxWidth: '741px',
        },
        '& .description': {
          fontSize: '20px',
          lineHeight: '30px',
          maxWidth: '521px',
        },
      },
    },
  },
}));
