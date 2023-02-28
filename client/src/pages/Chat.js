import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/chat.css';

const Chat = ({ setCurrentRoom, currentRoom }) => {
  const devGroupClick = (groupName) => {
    setCurrentRoom(`${groupName}`);
  };

  return (
    <main className='main-container'>
      <h1 className='banner-chat'>
        SHARE IDEA, CREATE AND ONNOVATE, JOIN US NOW!
      </h1>
      <Link className='card-chat' id='project-1' to='/'>
        Profile
      </Link>

      <div className='container-chat'>
        <Link
          className='link'
          onClick={() => devGroupClick('Managers')}
          to='/conversation'
        >
          <div className='items'>
            <div className='icon-wrapper'>
              <i className='fa fa-th-list'></i>
            </div>
            <div className='project-name'>
              <p>DESIGNERS</p>
            </div>
          </div>
        </Link>
        <Link
          className='link'
          onClick={() => devGroupClick('Managers')}
          to='/conversation'
        >
          <div className='items'>
            <div className='icon-wrapper'>
              <i className='fa fa-th-list'></i>
            </div>
            <div className='project-name'>
              <p>MANAGERS</p>
            </div>
          </div>
        </Link>

        <Link
          className='link'
          onClick={() => devGroupClick('Managers')}
          to='/conversation'
        >
          <div className='items'>
            <div className='icon-wrapper'>
              <i className='fa fa-th-list'></i>
            </div>
            <div className='project-name'>
              <p>DEVELOPERS</p>
            </div>
          </div>
        </Link>
      </div>
    </main>
  );
};

export default Chat;
