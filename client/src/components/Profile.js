import React from 'react';
import { Link } from 'react-router-dom';
import UseToken from '../utils/UseToken';

const Profile = () => {
  const { setToken } = UseToken();

  // function to handle logout
  const handleLogout = () => {
    // remove the token from localStorage
    localStorage.removeItem('token');
    // update token value
    setToken();
  };

  return (
    <main className='main-container'>
      <section className='forms-section'>
        <h1>Hi! Jaskin</h1>
        <div>
          <Link onClick={handleLogout}>Logout</Link>
          <Link to='/chat'>Chat</Link>
        </div>
      </section>
    </main>
  );
};

export default Profile;
