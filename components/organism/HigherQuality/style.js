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
        fontWeight: ' 700',
        fontSize: '30px',
        lineHeight: '30px',
        margin: '10px 0',
        maxWidth: '185px',
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
        marginBottom: '30px',
      },
    },
    '& > img': {
      width: '106%',
      transform: 'translateX(-3%)',
    },
  },

  '@media (min-width: 600px)': {
    higherContainer: {
      padding: '70px 40px',
    },
    higherContent: {
      '& .text': {
        '& .title': {
          fontSize: '52px',
          lineHeight: '50px',
          maxWidth: '100%',
          '& span': {
            fontSize: '52px',
            lineHeight: '50px',
          },
        },
      },
      '& .advantages': {
        display: 'flex',
        gap: '2rem',
      },
    },
  },

  '@media (min-width: 900px)': {
    higherContainer: {
      padding: '70px 181px',
      '& .description': {
        fontSize: '20px',
        lineHeight: '30px',
      },
      '& .text': {
        maxWidth: 'max-content',
        margin: 'auto',
      },
    },
  },

}));
