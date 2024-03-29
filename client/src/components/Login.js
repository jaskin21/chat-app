import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import UseToken from '../utils/UseToken';
import '../styles/components/login.css';
import { ToastContainer } from 'react-toastify';

import { loginUser } from '../utils/UseData';
import { showErrorMessage } from './ToastifyNotification';

const Login = () => {
  const navigate = useNavigate();
  const { setToken } = UseToken();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleClickRegister = (e) => {
    e.preventDefault();
    navigate('/signup');
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    const handleSubmitToken = await loginUser({
      email: email.toString(),
      password: password.toString(),
    });
    const status = handleSubmitToken.status;
    if (status.toString() === 'Success') {
      setToken(handleSubmitToken);
      console.log('success');
      window.location.reload();
    }
    if (status.toString() !== 'Success') {
      showErrorMessage('Invalid email or password');
    }
  };

  return (
    <div className='login-form'>
      <form onSubmit={handleSubmitLogin}>
        <h1>Login</h1>
        <div className='content'>
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
          <ToastContainer />
          <Link to='/notfound' className='link'>
            Forgot Your Password?
          </Link>
        </div>
        <div className='action'>
          <button type='submit'>Sign in</button>
          <button onClick={handleClickRegister}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
