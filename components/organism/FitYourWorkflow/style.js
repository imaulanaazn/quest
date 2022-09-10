import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  workFlowContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '9rem',
  },
  workFlowContent: {
    '& .subtitle': {
      display: 'flex',
      alignItems: 'center',
      '& img': {
        width: '1.4rem',
      },
      '& h2': {
        fontSize: '.8rem',
        marginLeft: '.9rem',
      },
    },
    '& .title': {
      fontSize: '3.5rem',
      marginTop: '2rem',
      fontWeight: '700',
      lineHeight: '1',
      maxWidth: '375px',
      '& span': {
        fontSize: '3.5rem',
        fontWeight: '700',
        lineHeight: '1',
      },
    },
    '& .learn__more': {
      fontSize: '1.6rem',
      fontWeight: '500',
      margin: '1rem 0',
      '& span': {
        fontSize: '1.6rem',
        fontWeight: '500',
        color: '#FE8888',
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
        fontSize: '1.5rem',
        lineHeight: '1.2',
      },
    },

  },

  '@media (min-width:600px)': {
    workFlowContent: {
      '& .title': {
        maxWidth: '500px',
      },
      '& .tab__btn__container': {
        margin: '1rem 0',
      },
    },
  },

  '@media (min-width:900px)': {
    workFlowContent: {
      '& .title': {
        maxWidth: '100%',
        fontSize: '2.5rem',
        '& span': {
          fontSize: '2.5rem',
        },
      },
      '& .tab__btn__container': {
        padding: '0 7rem',
        '& .tab__content': {
          padding: '1rem 7rem',
        },
      },
      '& div[role="tabpanel"]': {
        padding: '1rem 7rem',
        '& .MuiBox-root': {
          padding: '0',
        },
      },
    },
  },

}));
