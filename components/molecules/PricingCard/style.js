import { makeStyles } from '@mui/styles';

export default makeStyles(() => ({
  card: {
    width: '100%',
    borderRadius: '12px',
    backgroundColor: 'white',
    marginBottom: '36px',
    padding: '32px 30px 56px',

    '& > div.MuiChip-root': {
      color: 'white',
      padding: '5px .5rem',

      '& span': {
        fontWeight: ' 600',
        fontSize: '12px',
        lineHeight: '19px',
      },
    },

    '& h2.title': {
      color: '#282727',
      margin: '25px 0 0px',
      fontWeight: ' 800',
      fontSize: '42px',
      lineHeight: '38px',
    },

    '& p.perMonth': {
      color: '#858585',
      fontWeight: ' 600',
      fontSize: '14px',
      lineHeight: '30px',
    },

    '& button': {
      width: '100%',
      color: 'black',
      padding: '12px 0',
      borderRadius: '8px',
      fontWeight: ' 700',
      fontSize: '16px',
      lineHeight: '20px',
      textTransform: 'initial',
      margin: '12px 0 22px',
    },

    '& p.forPerson': {
      color: '#505050',
      fontWeight: ' 400',
      fontSize: '14px',
      lineHeight: '20px',
      marginBottom: '10px',
    },

    '& p.moto': {
      fontWeight: '500',
      fontSize: '14px',
      lineHeight: '20px',
      color: '#282727',
    },
  },

  '@media (min-width: 600px)': {
    card: {
      flex: '1',
      padding: '32px 30px 111px',
      '& p.perMonth': {
        fontWeight: '400',
      },
      '& p.moto': {
        fontWeight: '700',
      },
      '& button': {
        fontWeight: '700',
        fontSize: '15px',
      },
    },
  },

  '@media (min-width: 900px)': {
    card: {
      padding: '41px 40px  95px',
      '& h2.title': {
        fontSize: '38px',
        lineHeight: '48px',
      },
      '& p.perMonth': {
        fontSize: '18px',
      },
      '& button': {
        fontWeight: ' 700',
        fontSize: '16px',
      },
      '& p.forPerson': {
        fontWeight: '400',
        fontSize: '18px',
        lineHeight: '22px',
      },
      '& p.moto': {
        fontSize: '18px',
        lineHeight: '22px',
      },
    },

  },

}));
