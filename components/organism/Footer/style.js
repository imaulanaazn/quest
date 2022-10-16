import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  footerContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '150px',
    paddingBottom: '110px',
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
        fontWeight: ' 700',
        fontSize: '16px',
        lineHeight: '24px',
      },
      '& li.list__title a': {
        fontWeight: ' 900',
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
      display: 'flex',
      gap: '2rem',
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
      gap: '0rem',
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
