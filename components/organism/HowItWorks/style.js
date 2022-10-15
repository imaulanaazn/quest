import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  HowItContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '70px',
    paddingBottom: '70px',
  },
  HowItContent: {
    '& > img': {
      width: '228.95px',
      marginBottom: '2rem',
    },
    '& .text': {
      '& .title': {
        fontWeight: ' 700',
        fontSize: '30px',
        lineHeight: '30px',
        margin: '24px 0 22px',
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
    '& .tab__btn__container': {
      '& .MuiTabs-flexContainer': {
        flexWrap: 'wrap',
      },
      'div.MuiTab-root': {
        minWidth: '400px',
        padding: '0',
      },
      '& button': {
        flex: '1',
        color: '#FFFFFF80',
        fontWeight: '700',
        fontSize: '11px',
        lineHeight: '17px',
        letterSpacing: '0.3px',
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
        '& .title': {
          fontSize: '52px',
          lineHeight: '52px',
        },
        '& .description': {
          maxWidth: '100%',
          fontSize: ' 18px',
          lineHeight: ' 26px',
        },
      },
      '& .tab__btn__container': {
        '& button': {
          fontSize: '13px',
          lineHeight: '20px',
        },
      },
      '& .tab__content': {
        '& p': {
          fontSize: '18px',
          lineHeight: '22px',
        },
      },
    },
  },

  '@media (min-width: 900px)': {
    HowItContent: {
      '& > img': {
        width: '55%',
      },
      '& .text': {
        '& .description': {
          maxWidth: '600px',
          fontSize: '20px',
          lineHeight: '30px',
        },
        '& .tab__content': {
          '& p': {
            fontSize: '22px',
            lineHeight: '26px',
            maxWidth: '504px',
          },
        },
      },
    },
  },
}));
