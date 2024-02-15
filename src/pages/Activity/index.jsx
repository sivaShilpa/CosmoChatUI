import React, { useEffect, useState } from "react";
import api from "../../api/sessions";
import { Grid, CircularProgress } from "@mui/material";
import { BarChart } from "@mui/x-charts/BarChart";

const Activity = () => {
  const [loading, setLoading] = useState(true);
  const [sessionDates, setSessionDates] = useState([]);
  const [sessionChatLengths, setSessionChatLengths] = useState([]);

  useEffect(() => {
    const fetchSessions = async () => {
      try {
        const response = await api.get("/sessions");
        console.log(response.data);

        // response.data.map(data => {
        //   sessionDates.push(data.date);
        //   sessionChatLengths.push(data.chats.length)
        // })
        setSessionDates([
          ...Array.from(response.data, (data) => data.date.split(",")[0]),
        ]);
        setSessionChatLengths([
          ...Array.from(response.data, (data) => data.chats.length),
        ]);
        setLoading(false);
        // sessionDates.map(date => console.log(date))
        console.log(sessionDates);
        console.log(sessionChatLengths);
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

  return (
    <>
      {loading ? (
        <CircularProgress />
      ) : (
        <BarChart
          xAxis={[{ scaleType: "band", data: [...sessionDates] }]}
          series={[{ data: [...sessionChatLengths] }]}
          width={500}
          height={300}
        />
      )}
    </>
  );
};

export default Activity;
