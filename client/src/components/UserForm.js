import React, { useState } from 'react';
import axios from 'axios';

import '../styles/components/userForm.css';

async function loginUser(credentials) {
  try {
    console.log();
    const response = await axios.post(
      'http://localhost:5000/auth/login',
      credentials
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

const UserForm = ({ setToken }) => {
  const [active, setActive] = useState({
    login: 'is-active',
    register: '',
  });

  const loginOnClick = () => {
    setActive({
      login: 'is-active',
      register: '',
    });
  };
  const registerOnClick = () => {
    setActive({
      login: '',
      register: 'is-active',
    });
  };

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const handleSubmitToken = await loginUser({
      email: email.toString(),
      password: password.toString(),
    });
    setToken(handleSubmitToken);
  };

  return (
    <main className='main-container'>
      <section className='forms-section'>
        <h1 className='section-title'>Login & Signup Forms</h1>
        <div className='forms'>
          <div className={`form-wrapper ${active.login}`}>
            <button
              type='button'
              className='switcher switcher-login'
              onClick={loginOnClick}
            >
              Login
              <span className='underline'></span>
            </button>
            <form className='form form-login' onSubmit={handleSubmit}>
              <fieldset>
                <legend>
                  Please, enter your email and password for login.
                </legend>
                <div className='input-block'>
                  <label htmlFor='login-email'>E-mail</label>
                  <input
                    id='login-email'
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className='input-block'>
                  <label htmlFor='login-password'>Password</label>
                  <input
                    id='login-password'
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </fieldset>
              <button type='submit' className='btn-login'>
                Login
              </button>
            </form>
          </div>
          <div className={`form-wrapper ${active.register}`}>
            <button
              type='button'
              className='switcher switcher-signup'
              onClick={registerOnClick}
            >
              Sign Up
              <span className='underline'></span>
            </button>
            <form className='form form-signup'>
              <fieldset>
                <legend>
                  Please, enter your email, password and password confirmation
                  for sign up.
                </legend>
                <div className='input-block'>
                  <label htmlFor='signup-username'>Username</label>
                  <input id='signup-username' type='text' required />
                </div>
                <div className='input-block'>
                  <label htmlFor='signup-email'>E-mail</label>
                  <input id='signup-email' type='email' required />
                </div>
                <div className='input-block'>
                  <label htmlFor='signup-password'>Password</label>
                  <input id='signup-password' type='password' required />
                </div>
              </fieldset>
              <button type='submit' className='btn-signup'>
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default UserForm;
