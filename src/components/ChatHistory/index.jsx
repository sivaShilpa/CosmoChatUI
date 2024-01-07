import React from "react";
import { Grid, Link } from "@mui/material";
import Images from "../../constants/images";
import chatHistoryStyles from "../../styles/chatHistory";
import { generatePath } from "react-router";

const ChatHistory = ({ id, date, lasttext, ended }) => {
  const path = `/chats/${id}`
  return (   
    <Link href={path} underline="none"> 
      <Grid style={{ ...chatHistoryStyles.outLine }}>
        <Grid>
          <img src={Images.HomRex} alt="ReX" style={{ width: "80px" }} />
        </Grid>
        <Grid style={{ ...chatHistoryStyles.text }}>
          {ended == true ? (
            <Grid style={{ ...chatHistoryStyles.title }}>ReX - {date}</Grid>
          ) : (
            <Grid style={{ ...chatHistoryStyles.title }}>ReX</Grid>
          )}
          <Grid style={{ ...chatHistoryStyles.body }}>{lasttext}</Grid>
        </Grid>
        {ended == false ? (
          <Grid>
            <img src={Images.Typing} alt="typing" />
          </Grid>
        ) : null}
      </Grid>
    </Link>    
  );
};

export default ChatHistory;
