import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  card: {
    width: '100%',
    height: '35rem',
    borderRadius: '1.2rem',
    backgroundColor: 'white',
    padding: '4rem 2.5rem',
    marginBottom: '3rem',

    '& > div.MuiChip-root': {
      color: 'white',
      padding: '.5rem .6rem',

      '& span': {
        fontSize: '1.1rem',
      },
    },

    '& h2.title': {
      color: '#282727',
      fontSize: '2.5rem',
    },

    '& p.perMonth': {
      color: '#858585',
      fontSize: '1.5rem',
      margin: '.4rem 0 1.6rem',
    },

    '& button': {
      width: '100%',
      color: 'black',
      height: '4rem',
      borderRadius: '1rem',
      fontSize: '1.5rem',
      fontWeight: '600',
      textTransform: 'initial',
    },

    '& p.forPerson': {
      color: '#505050',
      fontSize: '1.5rem',
      margin: '1.8rem 0 1rem',
    },

    '& p.moto': {
      color: '#282727',
      fontWeight: '700',
      fontSize: '1.5rem',
    },
  },

  '@media (min-width: 600px)': {
    card: {
      padding: '2rem 1rem',
      '& > div.MuiChip-root': {
        color: 'white',
        padding: '.4rem .4rem',

        '& span': {
          fontSize: '.9rem',
        },
      },
      '& h2.title': {
        fontSize: '2.3rem',
      },
      '& p.perMonth': {
        fontSize: '1.2rem',
      },
      '& button': {
        padding: '0',
        fontSize: '1.2rem',
      },
      '& p.forPerson, p.moto': {
        fontSize: '1.2rem',
      },
    },
  },

  '@media (min-width: 900px)': {
    card: {
      padding: '4rem 2.5rem',
      '& > div.MuiChip-root': {
        '& span': {
          fontSize: '1rem',
        },
      },
      '& h2.title': {
        fontSize: '2.5rem',
      },
      '& p.perMonth': {
        fontSize: '1.1rem',
      },
      '& button': {
        padding: '0',
        height: '3rem',
        borderRadius: '8px',
      },
      '& p.forPerson, p.moto': {
        fontSize: '1.1rem',
      },
    },

  },

}));
