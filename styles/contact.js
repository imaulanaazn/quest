import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  flexContainer: {
    paddingTop: '8rem',
    paddingBottom: '20rem',
    backgroundColor: '#171717',
    color: 'white',
    '& h1': {
      fontWeight: ' 700',
      fontSize: '30px',
      lineHeight: '30px',
    },
    '& > div > p': {
      padding: '.5rem 0 1.6rem',
      fontWeight: ' 600',
      fontSize: '18px',
      lineHeight: '24px',
    },
    '& > div.inputFieldSide .MuiBox-root': {
      border: '1px solid white',
      flexDirection: 'column',
      gap: '1.5rem',
      padding: '1.8rem 1.4rem',
      borderRadius: '15px',
    },
    '& .MuiFormControl-root': {
      width: '100%',
      '& label.MuiFormLabel-root': {
        color: 'white',
        fontSize: '1.4rem',
        lineHeight: '1.6em',
      },
      '& > .MuiInputBase-root': {
        '& input': {
          color: 'white',
          fontSize: '1.4rem',
        },
        '& fieldset': {
          border: '1px solid white',
          '& legend span': {
            fontSize: '1.1rem',
          },
        },
      },
      '& p.MuiFormHelperText-root': {
        color: 'white',
        fontSize: '1.1rem',
      },
    },
    '& div.flex__container': {
      width: '100%',
      justifyContent: 'space-between',
      marginTop: '1.5rem',
      alignItems: 'center',

      '& p': {
        fontWeight: ' 600',
        fontSize: '18px',
        lineHeight: '24px',
        color: '#FE8888',
      },

      '& button': {
        width: '100px',
        height: ' 44px',
        fontWeight: ' 700',
        fontSize: '16px',
        lineHeight: '20px',
        backgroundColor: 'white',
        border: '3px solid #FE8888',
        color: 'black',
        borderRadius: '8px',
        textTransform: 'inherit',
      },
    },
  },

  '@media (min-width: 600px)': {
    flexContainer: {
      display: 'flex',
      gap: '1.5rem',
      '& h1': {
        fontSize: '46px',
        lineHeight: '42px',
      },
      '& > div > p': {
        fontSize: '20px',
        lineHeight: '24px',
      },
      '& > div': {
        flex: '1',
      },
      '& .MuiFormControl-root': {
        '& > .MuiInputBase-root': {
          '& input': {
            fontSize: '1.2rem',
          },
        },
        '& p.MuiFormHelperText-root': {
          fontSize: '0.9rem',
        },
      },
    },
  },

  '@media (min-width: 900px)': {
    flexContainer: {
      '& h1': {
        fontSize: '52px',
        lineHeight: '42px',
      },
      '& > div > p': {
        fontSize: '20px',
        lineHeight: '24px',
        maxWidth: '18rem',
      },
      '& > div': {
        flex: '1',
      },
    },
  },
}));
