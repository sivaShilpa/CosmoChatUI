import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import EndedChats from "./pages/EndedChats";
import Layout from "./Layout";
import Navigation from "./components/Navigation";


function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" index element={<Home />} ></Route>
          <Route path="/sessions/:id" element={<Chat />}></Route>
          <Route path="/endedChats" element={<EndedChats />}></Route>      
        </Route>  
      </Routes>
    </>
  );
}

export default App;
