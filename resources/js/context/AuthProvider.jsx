import { createContext, useEffect, useState } from 'react';
import AuthApi from '@/api/AuthApi';
import { Loader } from '@/components/common/Loader';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('app-token');

  useEffect(() => {
    if (!auth || !token) {
      setLoading(true);
      AuthApi.me()
        .then(res => setAuth(res.data))
        .catch(() => {
          setAuth(null);
          localStorage.removeItem('app-token');
        })
        .finally(() => setLoading(false));
    }
  }, []);

  const login = data => {
    return AuthApi.login(data).then(res => {
      setAuth(res.data.user);
      localStorage.setItem('app-token', res.data.token);
    });
  };

  return (
    <AuthContext.Provider value={{ auth, login }}>
      {loading ? <Loader /> : children}
    </AuthContext.Provider>
  );
};
