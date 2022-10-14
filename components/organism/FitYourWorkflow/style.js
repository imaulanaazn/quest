import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  workFlowContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '90px',
  },
  workFlowContent: {
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
        marginLeft: '10px',
      },
    },
    '& .title': {
      fontWeight: '700',
      fontSize: '32px',
      lineHeight: '30px',
      marginTop: '18px',
      maxWidth: '220px',
      letterSpacing: '-2px',
      '& span': {
        fontWeight: '700',
        fontSize: '32px',
        lineHeight: '30px',
        letterSpacing: '-2px',
        background: 'linear-gradient(270deg, #FE8888 27.16%, #8066FF 97.86%)',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
        textFillColor: 'transparent',
      },
    },
    '& .learn__more': {
      fontWeight: '600',
      fontSize: '16px',
      lineHeight: '22px',
      letterSpacing: '0.0909091px',
      margin: '18px 0 40px',
      '& span': {
        fontWeight: '600',
        fontSize: '16px',
        lineHeight: '22px',
        letterSpacing: '0.0909091px',
        color: '#FE8888',
      },
    },
    '& .tab__btn__container': {
      padding: '0.5rem',
      '& button': {
        flex: '1',
        fontWeight: '700',
        fontSize: '11px',
        lineHeight: '17px',
        letterSpacing: '0.3px',
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
        padding: '1rem 1rem',
        fontWeight: '600',
        fontSize: '14px',
        lineHeight: '16px',
      },
    },

  },

  '@media (min-width:600px)': {
    workFlowContent: {
      '& .title': {
        fontWeight: ' 700',
        fontSize: '44px',
        lineHeight: '42px',
        maxWidth: '314px',
        '& span': {
          fontWeight: ' 700',
          fontSize: '44px',
          lineHeight: '42px',
        },
      },
      '& .tab__btn__container': {
        margin: '1rem 0',
        fontSize: '22px',
        lineHeight: '26px',
        padding: '0 52px',
        '& button': {
          fontSize: '13px',
          lineHeight: '20px',
        },
      },
      '& .tab__content': {
        '& p': {
          fontSize: '18px',
          maxWidth: '410px',
          lineHeight: '22px',
        },
      },
    },
  },

  '@media (min-width:900px)': {
    workFlowContent: {
      '& .tab__btn__container': {
        padding: '0 10rem',
        '& .tab__content': {
          padding: '1rem 7rem',
        },
        '& button': {
          fontSize: '18px',
          lineHeight: '28px',
        },
      },
      '& .tab__content': {
        '& p': {
          fontSize: '22px',
          lineHeight: '26px',
          maxWidth: '500px',
        },
      },
      '& div[role="tabpanel"]': {
        padding: '1rem 10rem',
        '& .MuiBox-root': {
          padding: '0',
        },
      },
    },
  },

}));
