import React from 'react'
import Fallback from './Fallback';

const IsAuthorized = ({
  permissions,
  fallback=<Fallback />,
  children
}) => {
  const { user } = { user: { permissions: ["authorized"] }, isAuthenticated: true };
  const userPermissions = user?.permissions;
  const isAuthorized = userPermissions?.some((permission) => permissions?.includes(permission));

  if (isAuthorized) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
}

export default IsAuthorized;
