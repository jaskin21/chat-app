import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import Chat from './pages/Chat';
import NotFound from './pages/NotFound';
import withAuth from './utils/withAuth';

import './styles/index.css';
import Conversation from './components/Conversation';
// import Home from './pages/Home';

function App() {
  const [currentRoom, setCurrentRoom] = useState('');

  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route index element={withAuth(<Profile />)} path='/' />
          <Route
            element={withAuth(
              <Chat setCurrentRoom={setCurrentRoom} currentRoom={currentRoom} />
            )}
            path='/chat'
          />
          <Route
            element={withAuth(
              <Conversation
                setCurrentRoom={setCurrentRoom}
                currentRoom={currentRoom}
              />
            )}
            path='/conversation'
          />
          <Route element={<NotFound />} path='*' />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
