import React from 'react';
import { Link } from 'react-router-dom';

const Chat = () => {
  return (
    <main className='main-container'>
      <section className='forms-section'>
        <h1>Chat</h1>
        <Link to='/'>Profile</Link>
      </section>
    </main>
  );
};

export default Chat;
