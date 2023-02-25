import React from 'react';
import { Navigate } from 'react-router-dom';

const withAuth = (Component) => {
  const isAuthenticated = localStorage.getItem('token');

  return isAuthenticated ? <Component /> : <Navigate to='/login' />;
};

export default withAuth;
