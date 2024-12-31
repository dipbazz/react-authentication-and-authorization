import React from 'react'
import Fallback from './Fallback';

const IsAuthenticated = ({
  fallback=<Fallback />,
  children
}) => {
  const { isAuthenticated } = { user: { permissions: ["authorized"] }, isAuthenticated: true };

  if (isAuthenticated) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
}

export default IsAuthenticated;
