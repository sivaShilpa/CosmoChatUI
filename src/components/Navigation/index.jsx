import { Grid } from '@mui/material';
import React from 'react';

function Navigation() {
  return (
    <Grid display='flex' height='48px' padding='12px 0'>
      <Grid>RexLogo</Grid>
      <Grid>ReX</Grid>
      <Grid>Graph</Grid>
      <Grid>Setting</Grid>
    </Grid>
  );
}

export default Navigation;
