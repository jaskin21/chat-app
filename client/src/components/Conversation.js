import React, { useEffect } from 'react';
import io from 'socket.io-client';
import { Link } from 'react-router-dom';
import '../styles/components/conversation.css';

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
      <div className='chat-container'>
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
            <h2 id='room-name'>JavaScript</h2>
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
            />
            <button className='btn'>
              <i className='fas fa-paper-plane'></i> Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
