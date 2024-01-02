import React from 'react';
import { Grid } from '@mui/material';
import Ellipse from '../Ellipse';
import AllStyles from '../../styles';

function HomeBackground() {
  return (
    <Grid>
      <Ellipse style={AllStyles.el1} />
      <Ellipse style={AllStyles.el2} />
      <Ellipse style={AllStyles.el3} />
      {/* <Ellipse /> */}
      {/* <Ellipse />
      <Ellipse />
      <Ellipse />
      <Ellipse />
      <Ellipse />
      <Ellipse />
      <Ellipse />
      <Ellipse />
      <Ellipse />
      <Ellipse />
      <Ellipse />
      <Ellipse /> */}
    </Grid>
  );
}

export default HomeBackground;
