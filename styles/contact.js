import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  flexContainer: {
    paddingTop: '8rem',
    paddingBottom: '20rem',
    backgroundColor: '#171717',
    color: 'white',
    '& h1': {
      fontSize: '3rem',
      fontWeight: '600',
    },
    '& > div > p': {
      padding: '.5rem 0 2.5rem',
      fontSize: '1.6rem',
    },
    '& > div.inputFieldSide .MuiBox-root': {
      border: '1px solid white',
      flexDirection: 'column',
      gap: '1.5rem',
      padding: '3rem 2.5rem',
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
      marginTop: '2rem',
      alignItems: 'center',

      '& p': {
        fontSize: '1.3rem',
        color: '#FE8888',
      },

      '& button': {
        fontSize: '1.3rem',
        backgroundColor: 'white',
        border: '3px solid #FE8888',
        color: 'black',
        borderRadius: '8px',
        fontWeight: '700',
        padding: '.4rem 2.2rem',
        textTransform: 'inherit',
      },
    },
  },

  '@media (min-width: 600px)': {
    flexContainer: {
      display: 'flex',
      gap: '1.5rem',
      '& h1': {
        fontSize: '2.8rem',
      },
      '& > div > p': {
        fontSize: '1.2rem',
      },
      '& > div': {
        flex: '1',
      },

      '& > div.inputFieldSide .MuiBox-root': {
        padding: '2rem 1.5rem',
      },
      '& .MuiFormControl-root': {
        '& > .MuiInputBase-root': {
          '& input': {
            fontSize: '1.3rem',
          },
        },
        '& label.MuiFormLabel-root': {
          fontSize: '1.3rem',
        },
        '& p.MuiFormHelperText-root': {
          padding: '.5rem 0 0rem',
          fontSize: '1rem',
        },
      },
      '& div.flex__container': {
        '& p': {
          fontSize: '1.15rem',
        },

        '& button': {
          padding: '.1rem 1rem',
          fontSize: '1.15rem',

        },
      },
    },
  },

  '@media (min-width: 900px)': {
    flexContainer: {
      '& > div > p': {
        maxWidth: '18rem',
      },
    },
  },
}));
