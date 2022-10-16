import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  PricingBuildContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '112px',
    paddingBottom: '4rem',
  },
  PricingBuildContent: {
    '& .title': {
      fontWeight: ' 700',
      fontSize: '30px',
      lineHeight: '32px',
      marginTop: '2rem',
    },
    '& .description': {
      maxWidth: '400px',
      fontWeight: ' 400',
      fontSize: '16px',
      lineHeight: '26px',
      margin: '8px 0',
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
    '& .freeChip': {
      fontWeight: ' 600',
      fontSize: '12px',
      lineHeight: '19px',
      margin: '60px 0 32px',

      '& span': {
        paddingLeft: '1.5rem',
        paddingRight: '1.5rem',
      },
    },
    '& .freePrice': {
      fontWeight: ' 800',
      fontSize: '54px',
      lineHeight: '38px',
    },
    '& .freeDesc': {
      marginTop: '10px',
      fontWeight: ' 400',
      fontSize: '16px',
      lineHeight: '26px',
    },
    '& .freeSignup': {
      margin: '18px 0 20px',
      width: '208px',
      height: '52px',
      fontWeight: ' 700',
      fontSize: '20px',
      lineHeight: '20px',
      borderRadius: '8px',
      color: 'white',
      border: '3px solid #01FC84',
      textTransform: 'initial',
    },
    '& .noCredit': {
      fontWeight: ' 400',
      fontSize: '16px',
      lineHeight: '26px',
      marginBottom: '58px',
    },

  },
  cardContainer: {
    display: 'block',
  },

  '@media (min-width: 600px)': {
    PricingBuildContent: {
      '& .title': {
        fontSize: '40px',
        lineHeight: '36px',
      },
      '& .description': {
        fontSize: '18px',
        maxWidth: '484px',
      },
      '& .freeDesc': {
        fontSize: '18px',
        maxWidth: '100%',
      },
      '& .freeSignup': {
        fontWeight: '400',
        width: '160px',
        height: '42px',
        fontSize: '15px',
        lineHeight: '22px',
      },
    },
    cardContainer: {
      display: 'flex',
      gap: '1rem',
    },
  },

  '@media (min-width: 900px)': {
    PricingBuildContent: {
      '& .title': {
        fontSize: '42px',
      },
      '& .freeSignup': {
        fontWeight: ' 700',
        fontSize: '16px',
        width: '157px',
        height: '44px',
      },
    },
    // PricingBuildContainer: {
    //   paddingTop: '3rem',
    // },
    // PricingBuildContent: {
    //   paddingTop: '0rem',
    //   '& .title': {
    //     fontSize: '2.5rem',
    //   },
    //   '& .description': {
    //     fontSize: '1.4rem',
    //     maxWidth: '100%',
    //   },
    //   '& .freePrice': {
    //     fontSize: '3rem',
    //   },
    //   '& .freeDesc': {
    //     fontSize: '1.4rem',
    //   },
    //   '& .freeSignup': {
    //     fontSize: '1.3rem',
    //     padding: '.3rem 3rem',
    //   },
    // },
  },
}));
