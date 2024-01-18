import React, { useState } from "react";
import { Grid, Button} from "@mui/material";
import Images from "../../constants/images";
import chatHistoryStyles from "../../styles/chatHistory";
import { useNavigate } from "react-router";
import api from '../../api/sessions';

const ChatHistory = ({ id, date, lasttext, sessionEnded, handleDelete }) => {
  const [dragged, setDragged] = useState(false);
  const navigator = useNavigate();
  const [sessions, setSessions] = useState([]);

  const handleDrag = () => {
    setDragged((prev) => !prev);
  }; 
  const handleLink = () => {
    navigator(`/sessions/${id}`)
  };
  
  return (
    <Grid container justifyContent="flex-start" alignItems="center">
      <Grid item xs={sessionEnded ? 0 : 4 } sx={{display: !dragged && 'none' }}>        
         <Button style={{ ...chatHistoryStyles.deleteButton }} onClick={handleDelete}>
            <img src={Images.Trash} alt="Delete" />
          </Button>       
      </Grid>
      <Grid
        item
        style={
          sessionEnded
            ? { ...chatHistoryStyles.draggable, ...chatHistoryStyles.outLine }
            : { ...chatHistoryStyles.outLine }
        }
        xs={dragged ? 10 : 12}
        onDoubleClick={handleLink}
        onClick={handleDrag}        
      >
        <Grid>
          <img src={Images.HomRex} alt="ReX" style={{ width: "80px" }} />
        </Grid>
        <Grid style={{ ...chatHistoryStyles.text }}>
          {sessionEnded == true ? (
            <Grid style={{ ...chatHistoryStyles.title }}>ReX - {date}</Grid>
          ) : (
            <Grid style={{ ...chatHistoryStyles.title }}>ReX</Grid>
          )}
          <Grid style={{ ...chatHistoryStyles.body }}>{lasttext}</Grid>
        </Grid>
        {sessionEnded == false ? (
          <Grid>
            <img src={Images.Typing} alt="typing" />
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default ChatHistory;
