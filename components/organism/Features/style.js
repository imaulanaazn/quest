import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  featuresContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '6rem',
    paddingBottom: '6rem',
  },
  feautresContent: {
    '& .title': {
      fontWeight: ' 700',
      fontSize: '30px',
      lineHeight: '56px',
    },
    '& .features__list': {
      '& ul': {
        margin: '0',
        listStyle: 'none',
        padding: '0',
        '& li': {
          borderBottom: '1px solid white',
          fontWeight: ' 600',
          fontSize: '16px',
          lineHeight: '26px',
          padding: '15px 0',
        },
      },
      '& > div:last-child ul': {
        '& li:last-child': {
          borderBottom: 'none',
        },
      },
    },
  },

  '@media (min-width: 600px)': {
    feautresContent: {
      '& .title': {
        textAlign: 'center',
      },
      '& .features__list': {
        display: 'flex',
        gap: '3rem',
        '& > div': {
          flex: '1',
        },
        '& > div:first-child ul': {
          '& li:last-child': {
            borderBottom: 'none',
          },
        },
      },
    },
  },

  '@media (min-width: 900px)': {
    feautresContent: {
      '& .features__list': {
        gap: '3rem',
        '& ul': {
          '& li': {
            fontSize: '20px',
            lineHeight: '26px',
          },
        },
      },
    },
  },
}));
