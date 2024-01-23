import { Grid, Link } from "@mui/material";
import React from "react";
import AllStyles from "../../styles/home";
import Images from "../../constants/images";

function Navigation({ isChat, isEndedChats }) {
  return (
    <Grid { ...AllStyles.navigationBar }>
      {isEndedChats ? (
        <Grid { ...AllStyles.navigationLeft }>
          <Grid style={{ margin: "5px" }}>
            <Link href="/">
              <img src={Images.BackArrow} alt="NavRex" />
            </Link>
          </Grid>
          <Grid { ...AllStyles.navigationName }>Ended Chats</Grid>
        </Grid>
      ) : isChat ? (
        <Grid { ...AllStyles.navigationLeft }>
          <Grid style={{ margin: "5px" }}>
            <Link href="/">
              <img src={Images.BackArrow} alt="NavRex" />
            </Link>
          </Grid>
          <Grid { ...AllStyles.navigationName }>ReX</Grid>
        </Grid>
      ) : (
        <Grid { ...AllStyles.navigationLeft }>
          <Grid>
            <Link href="/">
              <img src={Images.NavRex} alt="NavRex" />
            </Link>
          </Grid>
          <Grid { ...AllStyles.navigationName }>ReX</Grid>
        </Grid>
      )}
      {isChat || isEndedChats ? (
        <Grid { ...AllStyles.navigationRight }>
          <Grid>
            <Link href="/search">
              <img src={Images.Search} alt="Activity" />
            </Link>
          </Grid>
          <Grid>
            <Link href="/options">
              <img src={Images.Options} alt="settings" />
            </Link>
          </Grid>
        </Grid>
      ) : (
        <Grid { ...AllStyles.navigationRight }>
          <Grid>
            <Link href="/activity">
              <img src={Images.ActivityIc} alt="Activity" />
            </Link>
          </Grid>
          <Grid>
            <Link href="/settings">
              <img src={Images.SettingIc} alt="settings" />
            </Link>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default Navigation;
