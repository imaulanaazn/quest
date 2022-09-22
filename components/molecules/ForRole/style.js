import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  banner: {
    width: '100%',

    '& > img': {
      width: '100%',
    },
  },
  forRoleContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '2rem',
    paddingBottom: '4rem',
    '& ul': {
      listStyle: 'none',
      margin: '0',
      padding: '0',

      '& li': {
        padding: '1.2rem 0',
        fontSize: '1rem',

        '& h2': {
          fontWeight: '600',
          fontSize: '1.2rem',
        },
      },
    },
  },
  listContainer: {
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },

  '@media (min-width: 600px)': {
    listContainer: {
      display: 'flex',
      gap: '2rem',

      '& > div': {
        flex: '1',
      },
    },
  },

  '@media (min-width: 900px)': {
    banner: {
      textAlign: 'center',
      '& > img': {
        width: '82%',
      },
    },
  },
}));
