import React from 'react';
import UserForm from '../components/UserForm';
import UseToken from './UseToken';

const withAuth = (Component) => {
  const { setToken } = UseToken();
  const isAuthenticated = localStorage.getItem('token');

  return isAuthenticated ? Component : <UserForm setToken={setToken} />;
};

export default withAuth;
