import { Grid, Link, Typography } from "@mui/material";
import React from "react";
import AllStyles from "../../styles/home";
import Images from "../../constants/images";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";

function Navigation({ isChat, isEndedChats }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Grid {...AllStyles.navigationBar}>
      {isEndedChats ? (
        <Grid {...AllStyles.navigationLeft}>
          <Grid style={{ margin: "5px" }}>
            <Link href="/">
              <img src={Images.BackArrow} alt="NavRex" />
            </Link>
          </Grid>
          <Grid {...AllStyles.navigationName}>Ended Chats</Grid>
        </Grid>
      ) : isChat ? (
        <Grid {...AllStyles.navigationLeft}>
          <Grid style={{ margin: "5px" }}>
            <Link href="/">
              <img src={Images.BackArrow} alt="NavRex" />
            </Link>
          </Grid>
          <Grid {...AllStyles.navigationName}>ReX</Grid>
        </Grid>
      ) : (
        <Grid {...AllStyles.navigationLeft}>
          <Grid>
            <Link href="/">
              <img src={Images.NavRex} alt="NavRex" />
            </Link>
          </Grid>
          <Grid {...AllStyles.navigationName}>ReX</Grid>
        </Grid>
      )}
      {isChat || isEndedChats ? (
        <Grid {...AllStyles.navigationRight}>
          <Grid>
            <Link href="/search">
              <img src={Images.Search} alt="Activity" />
            </Link>
          </Grid>
          <Grid>
            <Link onClick={handleClick}>
              <img src={Images.Options} alt="settings" />
            </Link>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              {...AllStyles.optionsMenu}
            >
              <MenuItem onClick={handleClose} {...AllStyles.optonsMenuItem}>
                <Link underline="none" {...AllStyles.optonsMenuItem}>
                  <img src={Images.Clear} alt="clear" />{" "}
                  <Typography>&nbsp; Clear Chat</Typography>
                </Link>
              </MenuItem>
              <Divider variant="middle" />
              <MenuItem onClick={handleClose} {...AllStyles.optonsMenuItem}>
                <Link underline="none">
                  <img src={Images.Export} alt="export" />{" "}
                  <Typography>&nbsp; Export Chat</Typography>
                </Link>
              </MenuItem>
              <Divider variant="middle" />
              <MenuItem onClick={handleClose} {...AllStyles.optonsMenuItem}>
                <Link underline="none">
                  <img src={Images.End} alt="end" />{" "}
                  <Typography>&nbsp; End Chat</Typography>
                </Link>
              </MenuItem>
            </Menu>
          </Grid>
        </Grid>
      ) : (
        <Grid {...AllStyles.navigationRight}>
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
