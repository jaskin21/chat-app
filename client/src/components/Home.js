import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import UseToken from '../utils/UseToken';

import '../styles/components/home.css';

const Home = ({ socket }) => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const { setToken } = UseToken();

  const handleClickStartChat = () => {
    //sends the username and socket ID to the Node.js server
    socket.emit('newUser', { userName, socketID: socket.id });
    navigate('/chat');
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
        setUserName(response.data.user.username);
        localStorage.setItem('userName', response.data.user.username);
        localStorage.setItem('email', response.data.user.email);
      } catch (error) {
        // handle error: failed to fetch user data
        console.log(error);
      }
    };

    fetchUser();
  }, []);

  // function to handle logout
  const handleLogout = (e) => {
    // remove the token from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('email');
    // update token value
    setToken();
    navigate('/login');
  };

  return (
    <>
      <div className='home__container'>
        <div className='home-input-text'>
          <p className='message'>
            Welcome to Chat App<span></span>
          </p>
        </div>
        <button className='home__cta-button' onClick={handleClickStartChat}>
          ENTER
        </button>
        <Link className='home__cta' onClick={() => handleLogout()}>
          LOGOUT
        </Link>
      </div>
    </>
  );
};

export default Home;
