import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  easyYetContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '72px',
    paddingBottom: '72px',
  },
  easyYetContent: {
    '& .text': {
      '& .title': {
        fontSize: '30px',
        lineHeight: '30px',
        fontWeight: '700',
        marginTop: '2rem',
        maxWidth: '269px',
        '& span': {
          fontSize: '30px',
          lineHeight: '30px',
          fontWeight: '700',
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
          fontSize: '12px',
          lineHeight: '30px',
          marginLeft: '.9rem',
        },
      },
      '& .description': {
        fontWeight: ' 600',
        fontSize: '16px',
        lineHeight: '26px',
        margin: '20px 0',
      },
      '& .getstarted': {
        maxWidth: '20rem',
        fontWeight: ' 600',
        fontSize: '16px',
        lineHeight: '22px',
        '& span': {
          maxWidth: '20rem',
          fontWeight: ' 600',
          fontSize: '16px',
          color: '#FE8888',
        },
      },
    },
  },

  '@media (min-width: 600px)': {
    easyYetContent: {
      '& .text': {
        '& .title': {
          fontSize: '52px',
          lineHeight: '52px',
          maxWidth: '100%',
          marginTop: '1.2rem',
          '& span': {
            fontSize: '52px',
            lineHeight: '52px',
          },
        },
        '& .description': {
          fontSize: '18px',
          lineHeight: '26px',
          maxWidth: '100%',
        },
        '& .getstarted': {
          ffontSize: '18px',
          lineHeight: '26px',
          maxWidth: '100%',
          '& span': {
            ffontSize: '18px',
            lineHeight: '26px',
          },
        },
      },
    },
  },

  '@media (min-width: 900px)': {
    '& .text': {
      '& .title': {
        maxWidth: '577px',
      },
      '& .description': {
        fontSize: '20px',
        lineHeight: '30px',
        maxWidth: '609px',
      },
      '& .getstarted': {
        fontSize: '20px',
        lineHeight: '30px',
        '& span': {
          fontSize: '20px',
          lineHeight: '30px',
        },
      },
    },
  },

}));
