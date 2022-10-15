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
      '& .text': {
        '& .title': {
          fontWeight: ' 700',
          fontSize: '30px',
          lineHeight: '30px',
          margin: '22px 0 16px',
          '& span': {
            fontWeight: ' 700',
            fontSize: '30px',
            lineHeight: '30px',
            color: '#FE8888',
          },
        },
        '& .subtitle': {
          display: 'flex',
          alignItems: 'center',
          '& img': {
            width: '14px',
            height: '14px',
          },
          '& h2': {
            fontSize: '1rem',
            marginLeft: '.9rem',
          },
        },
        '& .description': {
          fontWeight: ' 600',
          fontSize: '16px',
          lineHeight: '26px',
        },
      },
      '& .thumb__container': {
        width: '106%',
        transform: 'translateX(-3%)',
        height: '363px',
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
          '& .title': {
            fontSize: '52px',
            lineHeight: '52px',
            '& span': {
              fontSize: '52px',
              lineHeight: '52px',
            },
          },
          '& .description': {
            maxWidth: '100%',
            fontSize: '16px',
            lineHeight: '26px',
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
            fontSize: '52px',
            lineHeight: '52px',
            marginTop: '1.5rem',
            '& span': {
              fontSize: '52px',
              lineHeight: '52px',
            },
            '& .description': {
              fontSize: '20px',
              lineHeight: '30px',
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
