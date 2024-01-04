import { Grid, Link } from '@mui/material';
import React from 'react';
import AllStyles from '../../styles/home';
import Images from '../../constants/images';

function Navigation() {
  return (
    <Grid style={{ ...AllStyles.navigationBar }}>
      <Grid style={{ ...AllStyles.navigationLeft }}>
        <Grid><Link href="/"><img src={Images.NavRex} alt="NavRex" /></Link></Grid>
        <Grid style={{ ...AllStyles.navigationName }}>ReX</Grid>
      </Grid>
      <Grid style={{ ...AllStyles.navigationRight }}>
        <Grid><Link href="/activity"><img src={Images.ActivityIc} alt="Activity" /></Link></Grid>
        <Grid><Link href="/settings"><img src={Images.SettingIc} alt="settings" /></Link></Grid>
      </Grid>
    </Grid>
  );
}

export default Navigation;
