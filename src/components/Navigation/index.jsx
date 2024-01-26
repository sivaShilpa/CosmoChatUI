import { Grid, Link, Typography } from "@mui/material";
import React, { useState } from "react";
import AllStyles from "../../styles/home";
import Images from "../../constants/images";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import { useParams } from "react-router-dom";
import api from "../../api/sessions";
import { useNavigate } from "react-router";
import PREVLOC from '../../constants/global';

function Navigation({ isChat, isEndedChats }) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const [sessions, setSessions] = useState([]);
  const [thisSession, setThisSession] = useState();
  const id = useParams();
  const navigator = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = async (element) => {
    setAnchorEl(null);
    console.log(element)
    if(element === 'clear'){      
      try{
        const ID = id.id
        const response = await api.get("/sessions");
        setSessions(response.data);
        setThisSession(...sessions.filter((session) => session.id == id.id));
        thisSession.chats = [];
        const res = await api.put(`/sessions/${ID}`, thisSession)
        setSessions(
          sessions.map((session) =>
            session.id == id ? res.data : session
          )
        );
      }catch(err){
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(err);
        }
      }
    } else if(element == 'End'){
      try{
        const ID = id.id
        const response = await api.get("/sessions");
        setSessions(response.data);
        setThisSession(...sessions.filter((session) => session.id == id.id));
        thisSession.isSessionEnded = true;
        const res = await api.put(`/sessions/${ID}`, thisSession)
        setSessions(
          sessions.map((session) =>
            session.id == id ? res.data : session
          )
        );
      }catch(err){
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(err);
        }
      }

    }
  };
  const handlePrevious = () => {
    console.log("hello")
    navigator(PREVLOC)
  }
  return (
    <Grid {...AllStyles.navigationBar}>
      {isEndedChats ? (        
        <Grid {...AllStyles.navigationLeft}>
          <Grid style={{ margin: "5px" }}>
            <Link href="/">            
              <img src={Images.BackArrow} alt="NavRex"/>            
            </Link>
          </Grid>
          <Grid {...AllStyles.navigationName}>Ended Chats</Grid>
        </Grid>
      ) : isChat ? (
        <Grid {...AllStyles.navigationLeft}>
          <Grid style={{ margin: "5px" }} >
            <Link href="/">            
              <img src={Images.BackArrow} alt="NavRex"/>            
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
              onClose={()=>handleClose('close')}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
              {...AllStyles.optionsMenu}
            >
              <MenuItem onClick={()=>handleClose('clear')} {...AllStyles.optonsMenuItem}>                
                <img src={Images.Clear} alt="clear" />{" "}
                <Typography>&nbsp; Clear Chat</Typography>
              </MenuItem>
              <Divider variant="middle" />
              <MenuItem onClick={()=>handleClose('export')} {...AllStyles.optonsMenuItem}>
                <img src={Images.Export} alt="export" />{" "}
                <Typography>&nbsp; Export Chat</Typography>              
              </MenuItem>
              <Divider variant="middle" />
              <MenuItem onClick={()=>handleClose('End')} {...AllStyles.optonsMenuItem}>                
                <img src={Images.End} alt="end" />{" "}
                <Typography>&nbsp; End Chat</Typography>                
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
