import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  faqContainer: {
    backgroundColor: '#171717',
    color: 'white',
    paddingTop: '6rem',
    paddingBottom: '6rem',
  },
  faqContent: {
    '& .title': {
      fontSize: '3.5rem',
      fontWeight: '700',
      lineHeight: '1',
      margin: '2rem 0 1.5rem',
    },
    '& div': {
      padding: '1.8rem 0',
    },
    '& div:nth-child(3)': {
      borderTop: '1px solid white',
      borderBottom: '1px solid white',
    },
    '& div h2': {
      fontSize: '1.6rem',
      fontWeight: '600',
      marginBottom: '.4rem',
    },
  },
}));
