import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  HowItContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '6rem',
    paddingBottom: '6rem',
  },
  HowItContent: {
    '& > img': {
      width: '80%',
      marginBottom: '2rem',
    },
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
        maxWidth: '400px',
        fontWeight: '500',
      },
    },
    '& .tab__btn__container': {
      padding: '0 2rem',
      '& button': {
        flex: '1',
        color: '#FFFFFF80',
      },
      '& button.Mui-selected': {
        color: '#FE8888',
      },
      '& .MuiTabs-indicator': {
        backgroundColor: '#FE8888',
      },
    },
    '& .tab__content': {
      borderRadius: '6px',
      backgroundImage: 'linear-gradient(89.93deg, rgba(128, 102, 255, 0.95) 29.38%, rgba(254, 136, 136, 0.95) 91.84%)',
      '& img': {
        width: '100%',
      },
      '& p': {
        padding: '.8rem 1rem',
        fontSize: '1.2rem',
        lineHeight: '1.2',
      },
    },
  },

  '@media (min-width: 600px)': {
    HowItContent: {
      '& > img': {
        width: '66%',
      },
      '& .text': {
        '& .description': {
          maxWidth: '100%',
        },
      },
    },
  },

  '@media (min-width: 900px)': {
    HowItContent: {
      '& > img': {
        width: '60%',
      },
    },
  },
}));
