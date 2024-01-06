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
import { useLocation } from "react-router-dom";

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
  
  // const openai = new OpenAI({apiKey: OPENAI_API_KEY, dangerouslyAllowBrowser: true});

  useEffect(() => {
    const controller = new AbortController();
    const fetchSessions = async () => {
      try {
        const response = await api.get("/sessions", {
          signal: controller.signal
        });
        if (response && response.data) {setSessions(response.data);
          setThisSession(sessions.filter((session) => session["id"] == id));
          console.log(thisSession);
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
      return () => controller?.abort();
    };
    fetchSessions();
  }, [thisSession]);

  // const thisSession = sessions.find((session) => session.id === thisSessionId);
  // console.log(thisSession);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // callOpenAIAPI();

    const date = new Date();
    const month = date.getMonth();
    const day = date.getDate();
    const year = date.getFullYear();
    const formattedDate = months[month] + " " + day + ", " + year;

   thisSession[0]["chats"] = [
      ...thisSession[0].chats,
      { user: userPrompt, ReX: reXReply },
    ];

    const updatedSession = {
      id: id, 
      date: formattedDate,
      chats: thisSession[0]["chats"],
      isSessionEnded: thisSession[0]["isSessionEnded"]
    }

    try {
      const response = await api.put(`/sessions/${id}`, updatedSession);
      const allSessions = [...sessions, response.data];
      setSessions(allSessions);
      setUserPrompt("");
    } catch (err) {
      console.log(`Error: ${err.message}`);
    }
  };

  async function callOpenAIAPI() {
    const completion = await openai.chat.completions.create({
      messages: [
        { role: "system", content: "You are a career advice assistant." },
        {
          role: "user",
          content:
            "I am thinking about changing my job but I am not sure where to start.",
        },
        {
          role: "assistant",
          content:
            "Changing jobs can be a big step. Let's start by identifying what you are looking for in a new job. What's important to you? Company culture, job role, salary, location, or growth opportunities?",
        },
      ],
      model: "gpt-3.5-turbo",
      max_tokens: 100,
    });

    // console.log(completion.choices[0].message.content);
    setReXReply(completion.choices[0].message.content);
  }

  return (
    <Grid style={{ padding: "24px 24px 48px 24px" }}>
      <Navigation isChat={true} isEndedChats={false} />
      <Grid style={{ ...ChatStyles.textDisplayBackground }}>
        <Grid style={{ padding: "24px 0" }}>
          <img src={Images.HomRex} alt="ReX" style={{ width: "105px" }} />
        </Grid>
        <Grid>
          { thisSession.length === 0 ? <ReXMessage reXMessage="..." key="loading" /> : 
            thisSession[0] && thisSession[0].chats.map((chat, i) => (
              <ReXMessage reXMessage={chat.ReX} key={i} />
            ))}
        </Grid>
        <Grid style={{ ...ChatStyles.toSendArea }}>
          <Textarea
            style={{ ...ChatStyles.textArea }}
            name="Soft"
            placeholder="Type a message to ReX ..."
            variant="soft"
            onChange={(e) => setUserPrompt(e.target.value)}
          />
          <Button style={{ ...ChatStyles.sendButton }} onClick={handleSubmit}>
            <img
              src={Images.SendButton}
              alt="send"
              style={{ ...ChatStyles.sendButtonImage }}
            />
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Chat;
