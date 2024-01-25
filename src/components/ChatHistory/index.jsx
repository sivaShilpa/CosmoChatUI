import React, { useState } from "react";
import { Grid, Button} from "@mui/material";
import Images from "../../constants/images";
import chatHistoryStyles from "../../styles/chatHistory";
import { useNavigate } from "react-router";

const ChatHistory = ({ id, date, lasttext, sessionEnded, handleDelete }) => {
  const [dragged, setDragged] = useState(false);
  const navigator = useNavigate();
  
  const handleDrag = () => {
    setDragged((prev) => !prev);
  }; 
  const handleLink = () => {
    navigator(`/sessions/${id}`)
  };
  
  return (
    <Grid container flexDirection="row-reverse" justifyContent="flex-end" alignItems="start">
      <Grid item xs={sessionEnded ? 4 : 0 } sx={{display: !dragged && 'none' }}>        
         <Button { ...chatHistoryStyles.deleteButton } onClick={handleDelete}>
            <img src={Images.Trash} alt="Delete" />
          </Button>       
      </Grid>
      <Grid
        item
        { ...chatHistoryStyles.outLine }
        xs={dragged ? 10 : 12}
        onDoubleClick={handleLink}
        onClick={sessionEnded ? handleDrag : handleLink}        
      >
        <Grid>
          <img src={Images.HomRex} alt="ReX" style={{ width: "80px" }} />
        </Grid>
        <Grid { ...chatHistoryStyles.text }>
          {sessionEnded == true ? (
            <Grid { ...chatHistoryStyles.title }>ReX - {date}</Grid>
          ) : (
            <Grid { ...chatHistoryStyles.title }>ReX</Grid>
          )}
          <Grid { ...chatHistoryStyles.body }>{lasttext}</Grid>
        </Grid>
        {sessionEnded == false ? (
          <Grid paddingTop='25px'>
            <img src={Images.Typing} alt="typing" />
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default ChatHistory;
