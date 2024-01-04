import React from 'react';
import { Route, Routes } from 'react-router';
import Home from './pages/home';
import Navigation from './components/Navigation';
import ChatHistory from './pages/ChatHistory';

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
    </>
  );
}

export default App;
