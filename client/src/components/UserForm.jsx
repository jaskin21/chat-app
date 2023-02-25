import React, { useState } from 'react';

import '../styles/components/userForm.css';

const UserForm = () => {
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
            <form className='form form-login'>
              <fieldset>
                <legend>
                  Please, enter your email and password for login.
                </legend>
                <div className='input-block'>
                  <label htmlFor='login-email'>E-mail</label>
                  <input id='login-email' type='email' required />
                </div>
                <div className='input-block'>
                  <label htmlFor='login-password'>Password</label>
                  <input id='login-password' type='password' required />
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
                  <input id='signup-email' type='text' required />
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
