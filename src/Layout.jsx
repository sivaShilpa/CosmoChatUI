import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "./components/Navigation";
import { useLocation } from "react-router-dom";

const Layout = () => {
    const [isChat, setIsChat] = useState(false);
    const [isEndedChats, setIsEndedChats] = useState(false);
    const location = useLocation();
    useEffect(()=>{
        console.log(location)
        if(location.pathname=='/'){
        setIsChat(false);
        setIsEndedChats(false);
        }else if(location.pathname=='/endedChats'){
        setIsChat(false);
        setIsEndedChats(true);
        }else{
        setIsChat(true);
        setIsEndedChats(false);
        }
    }, [location]);
    return (
        <>
        <Navigation isChat={isChat} isEndedChats={isEndedChats}/> 
        <Outlet />
        </>
    )};

export default Layout;