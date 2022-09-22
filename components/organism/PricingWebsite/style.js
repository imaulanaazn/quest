import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  PricingBuildContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '6rem',
    paddingBottom: '4rem',
  },
  PricingBuildContent: {
    '& .title': {
      fontSize: '2.5rem',
      fontWeight: '700',
      lineHeight: '1',
      marginTop: '2rem',
    },
    '& .description': {
      fontSize: '1.5rem',
      maxWidth: '400px',
      fontWeight: '500',
      margin: '1rem 0 2rem',
    },
    '& .learn__more': {
      fontSize: '1.5rem',
      fontWeight: '500',
      '& span': {
        fontSize: '1.5rem',
        fontWeight: '500',
        color: '#FE8888',
      },
    },
    '& .freeChip': {
      fontSize: '1rem',
      fontWeight: '600',
      margin: '5rem 0 1rem',

      '& span': {
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      },
    },
    '& .freePrice': {
      fontSize: '5rem',
      fontWeight: '600',
    },
    '& .freeDesc': {
      fontSize: '1.5rem',
      maxWidth: '20rem',
    },
    '& .freeSignup': {
      margin: '2rem 0',
      fontSize: '1.5rem',
      padding: '.5rem 6rem',
      fontWeight: '600',
      borderRadius: '10px',
      color: 'white',
      border: '2px solid #01FC84',
      textTransform: 'initial',
    },
    '& .noCredit': {
      marginBottom: '5rem',
    },

  },
  cardContainer: {
    display: 'block',
  },

  '@media (min-width: 600px)': {
    PricingBuildContent: {
      '& .title': {
        fontSize: '2.5rem',
      },
      '& .description': {
        fontSize: '1.4rem',
        maxWidth: '100%',
      },
      '& .freeDesc': {
        maxWidth: '100%',
      },
    },
    cardContainer: {
      display: 'flex',
      gap: '1rem',
    },
  },

  '@media (min-width: 900px)': {
    PricingBuildContainer: {
      paddingTop: '3rem',
    },
    PricingBuildContent: {
      paddingTop: '0rem',
      '& .title': {
        fontSize: '2.5rem',
      },
      '& .description': {
        fontSize: '1.4rem',
        maxWidth: '100%',
      },
      '& .freePrice': {
        fontSize: '3rem',
      },
      '& .freeDesc': {
        fontSize: '1.4rem',
      },
      '& .freeSignup': {
        fontSize: '1.3rem',
        padding: '.3rem 3rem',
      },
    },
  },
}));
