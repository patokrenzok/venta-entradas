import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthProvider';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import CircularProgress from '@mui/material/CircularProgress';

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
    return (
      <Container
        style={{
          width: '100%',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <CircularProgress />
      </Container>
    );
  }

  return <Outlet />;
}
