import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import Navigation from "../../components/Navigation";
import Textarea from "@mui/joy/Textarea";
import Images from "../../constants/images";
import ChatStyles from "../../styles/chat";
import ReXMessage from "../../components/ReXMessage";
import api from "../../api/sessions";
import OpenAI from "openai";
import { useParams } from "react-router-dom";
import UserMessage from "../../components/UserMessage";
import useMediaQuery from "@mui/material/useMediaQuery";

const Chat = () => {
  const { id } = useParams();
  const [userPrompt, setUserPrompt] = useState("");
  const [reXReply, setReXReply] = useState("");
  const [sessions, setSessions] = useState([]);
  const [thisSession, setThisSession] = useState([]);
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
  const API_KEY = process.env.REACT_APP_OPENAI_API_KEY;
  const openai = new OpenAI({ apiKey: API_KEY, dangerouslyAllowBrowser: true });
  const matches = useMediaQuery("(min-width:600px)");

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await api.get("/sessions");

        handleScroll();
        window.addEventListener("scroll", handleScroll);
        if (response && response.data) {
          setSessions(response.data);
          setThisSession(sessions.filter((session) => session["id"] == id));
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
  }, [thisSession]);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let updatedSession = {};
    callOpenAIAPI();
    setTimeout(async function () {
      const date = new Date();
      const month = date.getMonth();
      const day = date.getDate();
      const year = date.getFullYear();
      const formattedDate = months[month] + " " + day + ", " + year;

      thisSession[0]["chats"].push({ user: userPrompt, ReX: reXReply });

      updatedSession = {
        id: id,
        date: formattedDate,
        chats: thisSession[0]["chats"],
        isSessionEnded: thisSession[0]["isSessionEnded"],
      };

      try {
        const response = await api.patch(`sessions/${id}/`, updatedSession);
        setSessions(
          sessions.map((session) =>
            session.id == id ? response.data : session
          )
        );
        setUserPrompt("");
      } catch (err) {
        console.log(`Error: ${err.message}`);
      }
    }, 2000);
  };

  async function callOpenAIAPI() {
    const completion = await openai.chat.completions.create({
      messages: [
        {
          role: "system",
          content:
            "Your name is ReX. You are a career advice assistant. You give advice to the user about his career. Limit your response to 100 words.",
        },
      ],
      model: "gpt-3.5-turbo",
      max_tokens: 100,
    });

    setReXReply(completion.choices[0].message.content);
  }

  return (
    <Grid container style={{ display: matches ? "none" : "block" }}>
      <Navigation isChat={true} isEndedChats={false} />
      <Grid style={{ padding: "60px 24px", position: "fixed" }}>
        <img src={Images.HomRex} alt="ReX" style={{ width: "105px" }} />
      </Grid>
      <Grid {...ChatStyles.textDisplayBackground}>
        <Grid>
          {thisSession.length === 0 ? (
            <ReXMessage reXMessage="..." key="loading" />
          ) : (
            thisSession[0] &&
            thisSession[0].chats.map((chat, i) =>
              i === 0 ? (
                <ReXMessage reXMessage={chat.ReX} key={"rex" + i} />
              ) : (
                <Grid key={i}>
                  <UserMessage userMessage={chat.user} key={"user" + i} />
                  <ReXMessage reXMessage={chat.ReX} key={"rex" + i} />
                </Grid>
              )
            )
          )}
        </Grid>
        {thisSession[0] && !thisSession[0].isSessionEnded ? (
          <Grid {...ChatStyles.toSendArea}>
            <Textarea
              {...ChatStyles.textArea}
              name="Soft"
              placeholder="Type a message to ReX ..."
              variant="soft"
              onChange={(e) => setUserPrompt(e.target.value)}
              onFocus={(e) => e.preventDefault()}
              value={userPrompt}
            />
            <Button {...ChatStyles.sendButton} onClick={handleSubmit}>
              <img
                src={Images.SendButton}
                alt="send"
                {...ChatStyles.sendButtonImage}
              />
            </Button>
          </Grid>
        ) : null}
      </Grid>
    </Grid>
  );
};

export default Chat;
