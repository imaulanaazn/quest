import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  sampleContainer: {
    '& h1': {
      fontSize: '3.3rem',
      fontWeight: '600',
    },
    '& .flex__left': {
      '& p.description': {
        fontSize: '1.8rem',
        margin: '1.2rem 0 3rem',
      },
      '& .links': {
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        '& a': {
          display: 'flex',
          alignItems: 'center',
          fontSize: '1.6rem',
          fontWeight: '600',
          textDecoration: 'none',
          color: 'white',
          '& svg': {
            marginRight: '.6rem',
            fontSize: '1.8rem',
          },
        },
        '& a.underscored': {
          paddingBottom: '1rem',
          borderBottom: '1px solid white',
          maxWidth: '20rem',
        },
      },
    },

    '& div.flex__right': {
      width: '100%',
      padding: '3rem 0 6rem',
      '& img': {
        width: '100%',
        borderRadius: '1.25rem',
        backgroundColor: 'white',
      },
    },
  },

  '@media (min-width: 600px)': {
    sampleContainer: {
      '& .flex__left': {
        flex: '2',
        '& p.description': {
          fontSize: '1.4rem',
          margin: '1.2rem 0',
        },
        '& .links': {
          '& a': {
            fontSize: '1.3rem',
            '& svg': {
              marginRight: '.6rem',
              fontSize: '1.6rem',
            },
          },
          '& a:underscored': {
            maxWidth: '12.5rem',
          },
        },
      },

    },

    '@media (min-width: 900px)': {
      sampleContainer: {
        paddingTop: '5rem',
        display: 'flex',
        alignItems: 'flex-start',
        gap: '3rem',

        '& .flex__left': {
          flex: '2',
          '& h1': {
            fontSize: '2.4rem',
          },
          '& p.description': {
            fontSize: '1.2rem',
          },
          '& .links': {
            '& a': {
              fontSize: '1.2rem',
              '& svg': {
                fontSize: '1.4rem',
              },
            },
          },
        },
        '& div.flex__right': {
          flex: '3',
          margin: '0',
        },
      },
    },
  },
}));
