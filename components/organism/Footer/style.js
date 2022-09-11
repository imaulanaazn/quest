import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  footerContainer: {
    backgroundColor: '#171717',
    color: 'white',
    padding: '4rem 6rem 10rem',
  },
  footerContent: {
    marginTop: '1rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '1rem',
    width: '100%',
    justifyContent: 'space-between',
    '& ul': {
      listStyle: 'none',
      padding: '0',
      '& li a': {
        textDecoration: 'none',
        color: '#979797',
        fontSize: '1.2rem',
        lineHeight: '1.8',
      },
      '& li.list__title a': {
        color: 'white',
      },
    },
    '& .listContainer:first-child': {
      width: '100%',
      flex: 'none',
      justifyContent: 'flex-start',
    },
    '& .listContainer': {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      flex: '1',
      '& div': {
        flex: '1',
      },
    },
  },

  '@media (min-width: 600px)': {
    footerContainer: {
      padding: '4rem 3rem 10rem',
      display: 'flex',
      '& :first-child': {
        flex: '1',
      },
    },
    footerContent: {
      flex: '4',
      margin: '0',
      '& ul': {
        margin: '0',
        '& li a': {
          fontSize: '1rem',
        },
      },
      '& .listContainer:first-child': {
        width: 'initial',
      },
      '& .listContainer': {
        flexDirection: 'column',
        justifyContent: 'start',
        '& div': {
          flex: 'initial',
        },
      },
    },
  },

  '@media (min-width: 900px)': {
    footerContainer: {
      padding: '4rem 6rem 10rem',
    },
    footerContent: {
      flex: 'initial',
      justifyContent: 'space-evenly',
      '& .listContainer': {
        flex: 'initial',
      },
    },
  },

}));
