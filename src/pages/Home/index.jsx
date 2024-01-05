import React, { useEffect, useState } from "react";
import { Button, Grid, Link, Typography } from "@mui/material";
import { motion } from "framer-motion";
import Images from "../../constants/images";
import AllStyles from "../../styles/home";
import api from "../../api/sessions";
import ChatHistory from "../../components/ChatHistory";
import Navigation from "../../components/Navigation";
import { useNavigate } from "react-router";

function Home() {
  const [sessions, setSessions] = useState([]);
  const navigator = useNavigate();

  const reXIntro = [
    "Hello Andrew, I am ReX. 😁",
    "What aspect of your career would you like guidance on?",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let session = { id: 0, date: "", chat: [], isChatEnded: false };

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await api.get("/sessions");
        setSessions(response.data.reverse());
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(err);
        }
      }
    };
    fetchSessions();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const id = sessions.length ? sessions[0].id + 1 : 1;
    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    const formattedDate = months[month] + " " + day + ", " + year;
    const conv = [{ ReX: reXIntro }];
    const isSessionEnded = false;
    
    session = {
      id: id,
      date: formattedDate,
      chat: conv,
      isSessionEnded: isSessionEnded,
    };
    try {
      const response = await api.post("/sessions", session);
      const allSessions = [...sessions, response.data];
      setSessions(allSessions);
      navigator(`/chat/${id}`)
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
    
  };

  return (
    <>
      <Navigation isChat={false} isEndedChats={false} />
      {sessions.length === 0 ? (
        <Grid style={{ ...AllStyles.homeBody }}>
          <Grid style={{ ...AllStyles.homeRex }}>
            <img src={Images.HomRex} alt="homeRex" />
          </Grid>
          <Grid className="greetings">
            <Typography style={{ ...AllStyles.greetings }}>
              Welcome, Andrew!
              <motion.span
                animate={{ rotate: [0, 30, 30, 0] }}
                transition={{
                  repeat: 5,
                  type: "tween",
                  repeatType: "mirror",
                  ease: "linear",
                }}
              >
                👋
              </motion.span>
            </Typography>
          </Grid>
          <Grid>
            <Typography style={{ ...AllStyles.message }}>
              {" "}
              Receive Career Help From ReX!{" "}
            </Typography>
          </Grid>
          <Grid>
            <Typography style={{ ...AllStyles.message2 }}>
              Start a conversation with ReX right now!
            </Typography>
          </Grid>
          <Grid style={{ textAlign: "center" }}>
            <Button
              style={{ ...AllStyles.startChatButton }}
              onClick={handleSubmit}
            >
              <Typography style={{ ...AllStyles.startChatButtonText }}>
                Start Chat With ReX
              </Typography>
            </Button>
          </Grid>
        </Grid>
      ) : (
        <Grid>
          <Grid style={{ ...AllStyles.endedChatsTitle }}>
            <Grid style={{ ...AllStyles.endedChats }}>Active Chats </Grid>
          </Grid>
          <Grid style={{ ...AllStyles.endedChatsBody }}>
            {sessions.map((el) =>
              !el.isSessionEnded ? (
                <ChatHistory
                  key={el.id}
                  id={el.id}
                  date={el.date}
                  lasttext={
                    el.chat[el.chat.length - 1].ReX[
                      el.chat[el.chat.length - 1].ReX.length - 1
                    ]
                  }
                  ended={el.isSessionEnded}
                />
              ) : null
            )}
          </Grid>
          <Grid style={{ ...AllStyles.endedChatsTitle }}>
            <Grid style={{ ...AllStyles.endedChats }}>Ended Chats </Grid>
            <Grid>
              <Link style={{ ...AllStyles.seeAllLink }} href="/endedChats">
                See All
              </Link>
            </Grid>
          </Grid>
          <Grid style={{ ...AllStyles.endedChatsBody }}>
            {sessions.map((el) => el.isSessionEnded ? (
                <ChatHistory
                  key={el.id}
                  id={el.id}
                  date={el.date}
                  lasttext={
                    el.chat[el.chat.length - 1].ReX[
                      el.chat[el.chat.length - 1].ReX.length - 1
                    ]
                  }
                  ended={el.isSessionEnded}
                />
              ) : null)}
          </Grid>
          <Grid style={{ ...AllStyles.startAnotherChatButtonGrid }}>
            <Link
              style={{ ...AllStyles.startChatButton }}
              href="/chat"
              onClick={handleSubmit}
            >
              <Typography style={{ ...AllStyles.startChatButtonText }}>
                Start Another Chat With ReX
              </Typography>
            </Link>
          </Grid>
        </Grid>
      )}
    </>
  );
}

export default Home;
