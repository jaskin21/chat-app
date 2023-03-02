import React from 'react';

import Login from '../components/Login';

const withAuth = (Component) => {
  const isAuthenticated = localStorage.getItem('token');

  return isAuthenticated ? Component : <Login />;
};

export default withAuth;
