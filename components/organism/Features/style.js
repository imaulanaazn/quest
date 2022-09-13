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
      fontSize: '3rem',
      fontWeight: '600',
      textAlign: 'center',
    },
    '& .features__list': {
      '& ul': {
        margin: '0',
        listStyle: 'none',
        padding: '0',
        '& li': {
          borderBottom: '1px solid white',
          fontSize: '1.5rem',
          padding: '1.5rem 0',
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
      '& .features__list': {
        display: 'flex',
        gap: '3rem',
        '& ul': {
          '& li': {
            fontSize: '1rem',
          },
        },
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
      },
    },
  },
}));
