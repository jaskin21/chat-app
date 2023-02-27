import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <main className='main-container'>
      <section className='forms-section'>
        <h1>Hi! Jaskin</h1>
        <div>
          <Link>Logout</Link>
          <Link to='/chat'>Chat</Link>
        </div>
      </section>
    </main>
  );
};

export default Profile;
