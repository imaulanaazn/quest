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
      maxWidth: '14rem',
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
    '& .switch': {
      margin: '5rem 0 2rem',
    },
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
        maxWidth: '100%',
      },
      '& .description': {
        fontSize: '1.4rem',
        maxWidth: '100%',
      },
    },
  },
}));
