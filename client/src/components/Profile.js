import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UseToken from '../utils/UseToken';
import axios from 'axios';

import '../styles/components/profile.css';

const Profile = () => {
  const { setToken } = UseToken();
  const [user, setUser] = useState({});

  // function to handle logout
  const handleLogout = () => {
    // remove the token from localStorage
    localStorage.removeItem('token');
    // update token value
    setToken();
  };

  useEffect(() => {
    const fetchUser = async () => {
      const tokenString = localStorage.getItem('token');
      const userToken = JSON.parse(tokenString);
      try {
        const response = await axios.get('http://localhost:5000/users/me', {
          headers: {
            'x-access-token': userToken,
          },
        });
        setUser(response.data.user);
      } catch (error) {
        // handle error: failed to fetch user data
      }
    };

    fetchUser();
  }, []);

  return (
    <main className='main-container'>
      <div className='card'>
        <div className='card-border-top'></div>
        <p className='job'> ID: {user.id}</p>
        <div className='user-details'>
          <img
            alt='team'
            className='img'
            src={`https://github.com/identicons/${user.username}.png`}
          />
          <span> {user.username} </span>
          <p className='job'> {user.email}</p>
          <div className='click'>
            <Link className='chat' to='/chat'>
              Chat
            </Link>
            <Link className='logout' onClick={handleLogout}>
              Logout
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Profile;
