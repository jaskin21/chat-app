import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Profile from './components/Profile';
import UserForm from './components/UserForm';
import Chat from './components/Chat';
import NotFound from './pages/NotFound';
import withAuth from './utils/withAuth';

import './styles/index.css';
// import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Routes>
          <Route index element={<UserForm />} path='/' />
          <Route element={withAuth(<Profile />)} path='/profile' />
          <Route element={withAuth(<Chat />)} path='/chat' />
          <Route element={<NotFound />} path='*' />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
