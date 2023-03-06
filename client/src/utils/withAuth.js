import React from 'react';

import Login from '../components/Login';

/**
 *
 * @param {tag} Component
 * @returns component or login if authenticated
 */
const withAuth = (Component) => {
  const isAuthenticated = localStorage.getItem('token');

  return isAuthenticated ? Component : <Login />;
};

export default withAuth;
