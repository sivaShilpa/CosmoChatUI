import React, {useState, useEffect} from 'react'
import { Grid } from '@mui/material';
import Navigation from '../../components/Navigation';
import ChatHistory from '../../components/ChatHistory';
import AllStyles from '../../styles/home';
import api from '../../api/sessions'

const EndedChats = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await api.get("/sessions");

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        if (response && response.data) {
          setSessions(response.data);
        }
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(err);
        }
      }
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    };
    fetchSessions();
  }, []);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
  };

  const handleDelete = async (id) => {
    try{
      const ID = id.toString();
      // const response = await api.get("/sessions");
      // setSessions(response.data.reverse());
      await api.delete(`/sessions/${ID}`);
      setSessions(sessions.filter(session => session.id !== ID))
    }catch(err){
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <>
        <Navigation isChat={false} isEndedChats={true} />
        <Grid container style={{ padding:"70px 20px" }}>
            {sessions.map((session) =>
              session.isSessionEnded ? (
                <ChatHistory
                  key={session.id}
                  id={session.id}
                  date={session.date}
                  session
                  lasttext={
                    session.chats
                      ? session.chats[session.chats.length - 1].ReX[
                          session.chats[session.chats.length - 1].ReX.length - 1
                        ]
                      : ""
                  }
                  ended={session.isSessionEnded}
                  handleDelete={() => handleDelete(session.id)}
                />
              ) : null
            )}
          </Grid>
    </>
  )
}

export default EndedChats;