import React, { useEffect, useState } from 'react';
import { Grid, Link, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Images from '../../constants/images';
import AllStyles from '../../styles';
import api from '../../api/conversations';
import ChatHistory from '../ChatHistory';

function Home() {
  const [conversations, setConversations] = useState([]);

  useEffect(()=>{
      const fetchConversations = async () => {
      try{
          const response = await api.get('/conversations');
          setConversations(response.data);
          console.log("response", response.data);
          console.log("conversations", conversations);
      }catch(err){
          if(err.response){
              console.log(err.response.data);
              console.log(err.response.status);
              console.log(err.response.headers);
          }else{
              console.log(err);
          }        
      }
      }
      fetchConversations();
  }, [])

  return (
    conversations.length===0 ? 
     <Grid style={{ ...AllStyles.homeBody }}>
      <Grid style={{ ...AllStyles.homeRex }}>
        <img src={Images.HomRex} alt="homeRex" />
      </Grid>
      <Grid className="greetings">
        <Typography style={{ ...AllStyles.greetings }}>
          Welcome, Andrew!
          <motion.div
            animate={{ rotate: [0, 30, 30, 0] }}
            transition={{
              repeat: 5,
              type: 'tween',
              repeatType: 'mirror',
              ease: 'linear',
            }}
          >
          👋
          </motion.div>
        </Typography>
      </Grid>
      <Grid>
        <Typography style={{ ...AllStyles.message }}> Receive Career Help From ReX! </Typography>
      </Grid>
      <Grid>
        <Typography style={{ ...AllStyles.message2 }}>
          Start a conversation with ReX right now!
        </Typography>
      </Grid>
      <Grid>
        <Link style={{ ...AllStyles.startChatButton }} href="/chatHistory">
          <Typography style={{ ...AllStyles.startChatButtonText }}>
            Start Chat With ReX
          </Typography>
        </Link>
      </Grid>
    </Grid>
    :
    <Grid>Here are your previous chats: 
        {conversations.map(el=>
            <ChatHistory key={el.id} id={el.id} date={el.date} lasttext={el.lasttext} />
        )}
    </Grid>
    
  );
}

export default Home;
