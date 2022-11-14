import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthProvider';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { Loader } from '@/components/common/Loader';

export function RequireAuth() {
  const [loading, setLoading] = useState(false);
  const { auth, checkAuth } = useAuth();
  const location = useLocation();
  const token = localStorage.getItem('app-token');

  useEffect(() => {
    if (token) {
      setLoading(true);
      checkAuth();
      setLoading(false);
    }
  }, [location]);

  if (!auth && !token) {
    return <Navigate to="/login" replace state={{ path: location.pathname }} />;
  }

  if (loading) {
    return <Loader />;
  }

  return <Outlet />;
}
