import React, { useEffect } from 'react';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';

const socket = io('http://localhost:5000');

const Conversation = ({ setCurrentRoom, currentRoom }) => {
  useEffect(() => {
    socket.on('message', (data) => {
      console.log(data);
    });
  }, []);

  const exitChatClick = () => {
    setCurrentRoom('');
  };
  console.log(currentRoom);
  return (
    <div className='main-container'>
      <h1>Conversation Component</h1>
      <Link onClick={exitChatClick} to='/chat'>
        Exit
      </Link>
    </div>
  );
};

export default Conversation;
