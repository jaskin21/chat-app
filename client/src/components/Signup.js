import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import UseToken from '../utils/UseToken';
import { registerUser } from '../utils/UseData';

const Signup = () => {
  const { setToken } = UseToken();
  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/');
    }
  });

  const handleClickLogin = (e) => {
    e.preventDefault();
    navigate('/');
  };

  const handleSubmitRegister = async (e) => {
    const handleSubmitToken = await registerUser({
      username: username.toString(),
      email: email.toString(),
      password: password.toString(),
    });
    setToken(handleSubmitToken);
  };

  return (
    <div className='login-form'>
      <form onSubmit={handleSubmitRegister}>
        <h1>Login</h1>
        <div className='content'>
          <div className='input-field'>
            <input
              type='username'
              placeholder='Username'
              autoComplete='off'
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className='input-field'>
            <input
              type='email'
              placeholder='Email'
              autoComplete='off'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='input-field'>
            <input
              type='password'
              placeholder='Password'
              autoComplete='off'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>
        <div className='action'>
          <button type='submit'>Register</button>
          <button onClick={handleClickLogin}>Sign in</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
