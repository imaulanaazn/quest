import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import Chip from '@mui/material/Chip';
import useStyles from './style';

interface PricingCardProps{
  label: string,
  price: string | number,
  userPerMonth: string,
  buttonText: string,
  color: string,
  description: string,
  moto: string
}
export default function PricingCard(props:PricingCardProps) {
  const {
    label, price, userPerMonth, buttonText, color, description, moto,
  } = props;
  const classes = useStyles();
  return (
    <Box className={classes.card}>
      <Chip sx={{ backgroundColor: color }} label={label} />
      <Typography className="title" variant="h2">
        {typeof price === 'string' ? price : `$${price}` }
      </Typography>
      <Typography className="perMonth">{userPerMonth}</Typography>
      <Button variant="outlined" sx={{ border: `3px solid ${color}` }}>{buttonText}</Button>
      <Typography className="forPerson">{description}</Typography>
      <Typography className="moto">{moto}</Typography>
    </Box>
  );
}
