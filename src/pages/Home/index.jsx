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

  useEffect(() => {
    const controller = new AbortController();
    const fetchSessions = async () => {
      try {
        const response = await api.get("/sessions", {
          signal: controller.signal,
        });
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
      return () => controller?.abort();
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
    const chat = [{ ReX: reXIntro }];
    const isSessionEnded = false;

    const newSessions = sessions.map((session) =>
      session.isSessionEnded == false
        ? {
            id: session.id,
            date: session.date,
            chats: session.chats,
            isSessionEnded: true,
          }
        : {}
    );
    setSessions(newSessions);
    
    // newSessions.map((session) => {
    //   if(session.id)
    //   try {
    //     const response = api.put(`/sessions/${session.id}`, session);
    //     const allSessions = [...sessions, response.data];
    //     setSessions(allSessions);
    //   } catch (err) {
    //     console.log(`Error: ${err.message}`);
    //   }
    // });

    const newSession = {
      id: id,
      date: formattedDate,
      chats: chat,
      isSessionEnded: isSessionEnded,
    };

    try {
      const response = await api.post("/sessions", newSession);
      const allSessions = [...sessions, response.data];
      setSessions(allSessions);
      console.log(allSessions);
      navigator(`/chats/${id}`);
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  return (
    <Grid style={{ padding: "24px" }}>
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
              Receive Career Help From ReX!
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
        <Grid style={{ paddingTop: "50px" }}>
          <Grid style={{ ...AllStyles.endedChatsTitle }}>
            <Grid style={{ ...AllStyles.endedChats }}>Active Chats </Grid>
          </Grid>
          <Grid style={{ ...AllStyles.endedChatsBody }}>
            {sessions.map((session) =>
              !session.isSessionEnded ? (
                <ChatHistory
                  key={session.id}
                  id={session.id}
                  date={session.date}
                  lasttext={
                    session.chats
                      ? session.chats[session.chats.length - 1].ReX[
                          session.chats[session.chats.length - 1].ReX.length - 1
                        ]
                      : ""
                  }
                  ended={session.isSessionEnded}
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
            {sessions.map((session, i) =>
              session.isSessionEnded && i<4? (
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
                />
              ) : null
            )}
          </Grid>
          <Grid style={{ ...AllStyles.startAnotherChatButtonGrid }}>
            <Button
              style={{ ...AllStyles.startChatButton }}
              onClick={handleSubmit}
            >
              <Typography style={{ ...AllStyles.startChatButtonText }}>
                Start Another Chat With ReX
              </Typography>
            </Button>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}

export default Home;
