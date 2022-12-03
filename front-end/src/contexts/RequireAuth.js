import { useContext } from 'react';
import { AuthContext } from './AuthContext';
import { Login } from '../pages/Login';

export const RequireAuth = ({ children }) => {
  const auth = useContext(AuthContext);

  if (!auth.user) {
    return <Login />
  }

  return children;
};
