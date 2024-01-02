import React from 'react';
import { Grid } from '@mui/material';
// import Images from '../../constants/images';
// import AllStyles from '../../styles';
import HomeBackground from '../../components/homeBackground';
// import Ellipse from '../../components/Ellipse';

function Home() {
  return (
    <Grid>
      <HomeBackground />
      {/* <Grid style={{ ...AllStyles.homeRex }}>
        <img src={Images.HomRex} alt="homeRex" />
      </Grid> */}
    </Grid>
  );
}

export default Home;
