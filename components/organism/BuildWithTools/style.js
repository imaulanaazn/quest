import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  buildWithContainer: {
    backgroundColor: '#282727',
    color: 'white',
    paddingTop: '4rem',
  },
  builWithContent: {
    position: 'relative',
    color: 'white',
    '& h1.title': {
      fontWeight: '700',
      lineHeight: '1',
      fontSize: '3rem',
      '& span': {
        fontWeight: '700',
        lineHeight: '1',
        fontSize: '3rem',
      },
    },
    '& div': {
      alignItems: 'center',
      marginTop: '3rem',
      '& p.moto': {
        fontSize: '1.4rem',
        fontWeight: '500',
        width: '80%',
      },
      '& button.signup__btn': {
        color: 'white',
        height: '3.5rem',
        border: '3px solid #FE8888',
        borderRadius: '10px',
        textTransform: 'none',
        fontSize: '1.4rem',
        fontWeight: '600',
        marginTop: '3rem',
        padding: '5px 15px',
      },
    },
    '& .sideThumb': {
      width: '100%',
      clipPath: 'polygon(0 18%, 100% 0, 100% 100%, 0% 100%)',
      borderTopRightRadius: '10px',
      '& img': {
        width: '100%',
      },
    },
  },

  '@media (min-width: 600px)': {
    builWithContent: {
      '& div': {
        margin: '0',
        '& .title': {
          fontSize: '2.6rem',
          maxWidth: '24rem',
          '& span': {
            fontSize: '2.6rem',
          },
        },
        '& p.moto': {
          fontSize: '1.4rem',
          width: '100%',
          margin: '2rem 0',
        },
        '& button.signup__btn': {
          margin: '0',
          height: '3rem',
          fontSize: '1.2rem',
        },
      },
    },
  },

  '@media (min-width: 900px)': {
    builWithContent: {
      display: 'flex',
      gap: '2rem',
      justifyContent: 'space-between',
      alignItems: 'center',
      '& > div': {
        flex: '1',
        position: 'relative',
      },
      '& p.moto': {
        marginTop: '2rem',
        fontSize: '1.2rem',
      },
      '& .sideThumb': {
        clipPath: 'polygon(0 14%, 100% 0, 100% 100%, 0% 100%)',
      },
    },
  },
}));
