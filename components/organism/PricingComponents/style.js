import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  cardWrapper: {
    display: 'block',
  },
  PricingBuildContainer: {
    backgroundColor: '#171717',
    color: 'white',
    padding: '50px 32px',
  },
  PricingBuildContent: {
    '& .title': {
      fontWeight: ' 700',
      fontSize: '30px',
      lineHeight: '32px',
      maxWidth: '14rem',
    },
    '& .description': {
      fontWeight: ' 400',
      fontSize: '16px',
      lineHeight: '24px',
      margin: '10px 0 20px',
    },
    '& .learn__more': {
      fontWeight: ' 600',
      fontSize: '16px',
      lineHeight: '30px',
      '& span': {
        fontWeight: ' 600',
        fontSize: '16px',
        lineHeight: '30px',
        color: '#FE8888',
      },
    },
    '& .switch': {
      margin: '70px 0 30px',
    },
  },

  '@media (min-width: 600px)': {
    cardWrapper: {
      display: 'flex',
      gap: '36px',
    },
    PricingBuildContainer: {
      padding: '68px 40px',
    },
    PricingBuildContent: {
      '& .title': {
        fontSize: '40px',
        lineHeight: '36px',
      },
      '& .description': {
        fontSize: '18px',
        lineHeight: '26px',
        maxWidth: '100%',
      },
      '& .learn__more': {
        fontSize: '16px',
        '& span': {
          fontSize: '16px',
        },
      },
    },
    cardContainer: {
      display: 'flex',
      gap: '1rem',
    },
  },

  '@media (min-width: 900px)': {
    PricingBuildContainer: {
      padding: '68px 180px',
    },
    PricingBuildContent: {
      paddingTop: '0rem',
      '& .title': {
        maxWidth: '100%',
      },
    },
  },
}));
