import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/pages/chat.css';

const Chat = ({ setCurrentRoom, currentRoom }) => {
  const devGroupClick = (groupName) => {
    setCurrentRoom(`${groupName}`);
  };

  return (
    <main className='main-container'>
      <h1 className='banner-chat'>PLEASE SELECT A ROOM TO JOIN.</h1>

      <div className='container-chat'>
        <Link
          className='link'
          onClick={() => devGroupClick('Designers')}
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
          onClick={() => devGroupClick('Developers')}
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
