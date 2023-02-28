import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UseToken from '../utils/UseToken';
import axios from 'axios';

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
      <section className='forms-section'>
        <h1>Hi! {user.username}</h1>
        <div>
          <Link onClick={handleLogout}>Logout</Link>
          <Link to='/chat'>Chat</Link>
        </div>
      </section>
    </main>
  );
};

export default Profile;
