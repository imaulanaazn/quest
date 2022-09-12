import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  readyForContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '6rem',
    paddingBottom: '6rem',
  },
  readyForContent: {
    '& .dashboard__preview': {
      borderBottom: '3px solid #2E2E2E',
      '& .text': {
        '& .title': {
          fontSize: '3.5rem',
          fontWeight: '700',
          lineHeight: '1',
          margin: '2rem 0 1.5rem',
          '& span': {
            fontSize: '3.5rem',
            fontWeight: '700',
            lineHeight: '1',
            color: '#FE8888',
          },
        },
        '& .subtitle': {
          display: 'flex',
          alignItems: 'center',
          '& img': {
            width: '1.4rem',

          },
          '& h2': {
            fontSize: '1rem',
            marginLeft: '.9rem',
          },
        },
        '& .description': {
          fontSize: '1.5rem',
          maxWidth: '400px',
          fontWeight: '500',
        },
      },
      '& .thumb__container': {
        width: '106%',
        transform: 'translateX(-3%)',
        height: '35.5rem',
        backgroundImage: 'url("images/code img.png")',
        backgroundSize: 'cover',
        marginTop: '2.5rem',
        backgroundPosition: 'center',
      },
    },
  },

  '@media (min-width:600px)': {
    readyForContent: {
      '& .dashboard__preview': {
        '& .text': {
          '& .description': {
            maxWidth: '100%',
            fontSize: '1.4rem',
          },
        },
        '& .thumb__container': {
          width: '100%',
          height: '25rem',
          transform: 'translateX(0%)',
        },
      },
    },
  },

  '@media (min-width:900px)': {
    readyForContent: {

      '& .dashboard__preview': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '3.5rem',
        '& .text': {
          width: '50%',
          '& .title': {
            fontSize: '2.5rem',
            marginTop: '1.5rem',
            '& span': {
              fontSize: '2.5rem',
            },
          },
          '& .subtitle': {
            '& img': {
              width: '1rem',
            },
          },
        },
        '& .thumb__container': {
          width: '50%',
          minHeight: '25rem',
        },
      },
    },
  },
}));
