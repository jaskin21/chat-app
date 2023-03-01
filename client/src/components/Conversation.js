import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';
import '../styles/components/conversation.css';

const Conversation = ({ setCurrentRoom, currentRoom }) => {
  const socket = io.connect('http://localhost:5000');
  //Room State
  const [room, setRoom] = useState('');

  // Messages States
  const [message, setMessage] = useState('');
  const [messageReceived, setMessageReceived] = useState('');

  const joinRoom = () => {
    if (room !== '') {
      socket.emit('join_room', room);
    }
  };

  const sendMessage = () => {
    socket.emit('send_message', { message, room });
  };

  useEffect(() => {
    socket.on('receive_message', (data) => {
      setMessageReceived(data.message);
    });
  }, [socket]);

  const exitChatClick = () => {
    setCurrentRoom('');
  };

  return (
    <div className='main-container'>
      <div className='chat-container'>
        <input
          placeholder='Room Number...'
          onChange={(event) => {
            setRoom(event.target.value);
          }}
        />
        <button onClick={joinRoom}> Join Room</button>

        <h1> Message:</h1>
        {messageReceived}
        <header className='chat-header'>
          <Link onClick={exitChatClick} to='/' className='btn'>
            Leave Room
          </Link>
        </header>
        <main className='chat-main'>
          <div className='chat-sidebar'>
            <h3>
              <i className='fas fa-comments'></i> Room Name:
            </h3>
            <h2 id='room-name'>{currentRoom}</h2>
            <h3>
              <i className='fas fa-users'></i> Users
            </h3>
            <ul id='users'>
              <li>Brad</li>
              <li>John</li>
              <li>Mary</li>
              <li>Paul</li>
              <li>Mike</li>
            </ul>
          </div>
          <div className='chat-messages'>
            <div className='message'>
              <p className='meta'>
                Brad <span>9:12pm</span>
              </p>
              <p className='text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, repudiandae.
              </p>
            </div>
            <div className='message'>
              <p className='meta'>
                Mary <span>9:15pm</span>
              </p>
              <p className='text'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi, repudiandae.
              </p>
            </div>
          </div>
        </main>
        <div className='chat-form-container'>
          <form id='chat-form'>
            <input
              id='msg'
              type='text'
              placeholder='Enter Message'
              required
              autoComplete='off'
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
            <button className='btn' onClick={sendMessage}>
              <i className='fas fa-paper-plane'></i> Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
