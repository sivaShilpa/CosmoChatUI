import { Typography, Grid } from '@mui/material';
import React from 'react';
import ChatStyles from '../../styles/chat';

const ReXMessage = ({reXMessage}) => {
  return (
    <Grid style={{ ...ChatStyles.reXMessage }}>
      <Typography style={{ ...ChatStyles.reXMessageText }}>{reXMessage}</Typography>
    </Grid>
  )
}

export default ReXMessage