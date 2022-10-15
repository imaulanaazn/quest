import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  faqContainer: {
    backgroundColor: '#171717',
    color: 'white',
  },
  faqContent: {
    '& .title': {
      fontWeight: ' 700',
      fontSize: '44px',
      lineHeight: '62px',
      margin: '0 0 1.5rem',
    },
    '& div': {
      padding: '30px 0',
      '& p': {
        fontWeight: ' 600',
        fontSize: '16px',
        lineHeight: '24px',
      },
    },
    '& div:nth-child(3)': {
      borderTop: '1px solid white',
      borderBottom: '1px solid white',
    },
    '& div h2': {
      fontWeight: ' 700',
      fontSize: '20px',
      lineHeight: '26px',
      marginBottom: '.4rem',
    },
  },

  '@media (min-width: 600px)': {
    faqContent: {
      '& div h2': {
        fontSize: '28px',
        lineHeight: '32px',
      },
      '& div': {
        '& p': {
          fontSize: '18px',
          lineHeight: '30px',
        },
      },
    },
  },

  '@media (min-width: 900px)': {
    faqContent: {
      '& .title': {
        fontSize: '56px',
        lineHeight: '62px',
      },
      '& div h2': {
        fontSize: '30px',
        lineHeight: '34px',
      },
      '& div': {
        '& p': {
          fontSize: '20px',
        },
      },
    },

  },
}));
