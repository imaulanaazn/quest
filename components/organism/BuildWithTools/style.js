import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  buildWithContainer: {
    backgroundColor: '#282727',
    color: 'white',
    paddingTop: '2rem',
  },
  builWithContent: {
    position: 'relative',
    color: 'white',
    '& h1.title': {
      fontWeight: ' 700',
      fontSize: '30px',
      lineHeight: '30px',
      '& span': {
        fontWeight: ' 700',
        fontSize: '30px',
        lineHeight: '30px',
        color: '#FE8888',
      },
    },
    '& div': {
      alignItems: 'center',
      marginTop: '15px',
      '& p.moto': {
        fontWeight: ' 600',
        fontSize: '16px',
        lineHeight: '26px',
        maxWidth: '254px',
      },
      '& button.signup__btn': {
        color: 'white',
        height: '44px',
        width: '143px',
        border: '3px solid #FE8888',
        borderRadius: '10px',
        textTransform: 'none',
        fontSize: '16px',
        letterSpacing: '0.4px',
        fontWeight: '700',
        marginTop: '15px',
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
          fontSize: '52px',
          lineHeight: '52px',
          maxWidth: '479px',
          '& span': {
            fontSize: '52px',
            lineHeight: '52px',
          },
        },
        '& p.moto': {
          fontSize: '18px',
          lineHeight: '26px',
          maxWidth: '100%',
          margin: '15px 0 26px',
        },
        '& button.signup__btn': {
          margin: '0',
          width: '183px',
          height: '52px',
          borderRadius: '8px',
          fontSize: '20px',
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
        fontSize: '20px',
        lineHeight: '30px',
      },
      '& .sideThumb': {
        clipPath: 'polygon(0 14%, 100% 0, 100% 100%, 0% 100%)',
      },
    },
  },
}));
