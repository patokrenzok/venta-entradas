import { createContext, useContext, useState } from 'react';
import AuthApi from '@/api/AuthApi';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);

  const checkAuth = () => {
    return AuthApi.me().then(res => setAuth(res.data));
  };

  const login = data => {
    return AuthApi.login(data).then(res => {
      setAuth(res.data.user);
      localStorage.setItem('app-token', res.data.token);
    });
  };

  return (
    <AuthContext.Provider value={{ auth, login, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}
