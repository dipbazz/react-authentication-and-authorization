import React from 'react'
import Fallback from './Fallback';
import { useAuth } from '../contexts/AuthProvider';

const IsAuthenticated = ({
  fallback=<Fallback />,
  children
}) => {
  const { token } = useAuth();
  const isAuthenticated = !!token

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
}

export default IsAuthenticated;
