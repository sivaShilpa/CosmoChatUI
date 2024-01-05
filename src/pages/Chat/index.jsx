import React, { useEffect, useState } from "react";
import { Button, Grid } from "@mui/material";
import Navigation from "../../components/Navigation";
import Textarea from "@mui/joy/Textarea";
import Images from "../../constants/images";
import ChatStyles from "../../styles/chat";
import ReXMessage from "../../components/ReXMessage";
import OpenAI from "openai";

const OPENAI_API_KEY = "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";

const Chat = () => {
  const [userPompt, setUserPrompt] = useState("");
  const [reXReply, setReXReply] = useState("");
  const [conversation, setConversation] = useState({})
  const [messages, setMessages] = useState([]);
  const openai = new OpenAI({apiKey: OPENAI_API_KEY, dangerouslyAllowBrowser: true});

  useEffect(()=>{
    const fetchMessages = async () => {
    try{
        const response = await api.get('/messages');
        setMessages(response.data);
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
    fetchMessages();
}, [])

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
        }
      ],
      model: "gpt-3.5-turbo",
      max_tokens: 100,
    });

    console.log(completion.choices[0].message.content);
  }

  const reXIntro = [
    "Hello Andrew, I am ReX. 😁",
    "What aspect of your career would you like guidance on?",
  ];
  return (
    <Grid style={{ padding: "24px 24px 48px 24px" }}>
      <Navigation isChat={true} isEndedChats={false} />
      <Grid style={{ ...ChatStyles.textDisplayBackground }}>
        <Grid style={{ padding: "24px 0" }}>
          <img src={Images.HomRex} alt="ReX" style={{ width: "105px" }} />{" "}
        </Grid>
        <Grid>          
          {reXIntro.map((el, i) => (
            <ReXMessage reXMessage={el} key={i} />
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
          <Button style={{ ...ChatStyles.sendButton }} onClick={callOpenAIAPI}>
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
