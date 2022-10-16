import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  sampleContainer: {
    '& h1': {
      fontWeight: ' 700',
      fontSize: '28px',
      lineHeight: '29px',
    },
    '& .flex__left': {
      '& p.description': {
        fontWeight: ' 600',
        fontSize: '16px',
        lineHeight: '24px',
        margin: '14px 0 34px',
      },
      '& .links': {
        display: 'flex',
        flexDirection: 'column',
        gap: '.7rem',
        '& a': {
          display: 'flex',
          alignItems: 'center',
          fontWeight: ' 800',
          fontSize: '16px',
          lineHeight: '30px',
          textDecoration: 'none',
          color: 'white',
          '& svg': {
            marginRight: '.6rem',
            fontSize: '1.2rem',
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
      padding: '36px 0 86px',
      '& img': {
        width: '100%',
        borderRadius: '12px',
        backgroundColor: 'white',
      },
    },
  },

  '@media (min-width: 600px)': {
    sampleContainer: {
      '& h1': {
        fontWeight: ' 700',
        fontSize: '36px',
        lineHeight: '38px',
      },
      '& .flex__left': {
        flex: '2',
        '& p.description': {
          fontSize: '20px',
          lineHeight: '28px',
        },
        '& .links': {
          '& a': {
            fontSize: '20px',
            lineHeight: '30px',
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
