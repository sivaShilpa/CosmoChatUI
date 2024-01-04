import React from 'react'
import { Grid } from '@mui/material';
import Navigation from '../../components/Navigation';

const EndedChats = () => {
  return (
    <>
        <Navigation isChat={false} isEndedChats={true} />
        <Grid>

        </Grid>
    </>
  )
}

export default EndedChats;