import React from 'react'
import Fallback from './Fallback';

const CanAccess = ({
  permissions,
  fallback=<Fallback />,
  children
}) => {
  const { user, isAuthenticated } = { user: { permissions: ["authorized"] }, isAuthenticated: true };
  const userPermissions = user?.permissions;
  const isAuthorized = userPermissions?.some((permission) => permissions?.includes(permission));

  if (isAuthenticated && isAuthorized) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
}

export default CanAccess;
