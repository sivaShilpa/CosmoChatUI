import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import EndedChats from './pages/EndedChats';

function App() {
    return (
    <>
      <Routes>
        <Route
          path="/"
          index
          element={<Home />}
        >
        </Route>
        
        <Route
          path="/chats/:id"
          element={<Chat />}
        >
        </Route>
        <Route
          path="/endedChats"
          element={<EndedChats />}
        >
        </Route>
      </Routes>      
    </>
  );
}

export default App;
