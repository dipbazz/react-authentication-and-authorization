import React from 'react'
import Fallback from './Fallback';
import { useAuth } from '../contexts/AuthProvider';

const IsAuthorized = ({
  permissions,
  fallback=<Fallback />,
  children
}) => {
  const { user } = useAuth();
  const userPermissions = user?.permissions;
  const isAuthorized = userPermissions?.some((permission) => permissions?.includes(permission));

  if (isAuthorized) {
    return <>{children}</>;
  }

  return <>{fallback}</>;
}

export default IsAuthorized;
