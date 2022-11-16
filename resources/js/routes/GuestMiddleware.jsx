import { useAuth } from '@/hooks/useAuth';
import { Navigate, Outlet } from 'react-router-dom';

export function GuestMiddleware() {
  const { auth } = useAuth();

  if (auth) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
}
