import './bootstrap';
import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
  Outlet,
} from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import CircularProgress from '@mui/material/CircularProgress';
import { AuthProvider } from '@/context/AuthProvider';
import { useAuth } from '@/context/AuthProvider';

import { LoginPage } from '@/pages/Login';
import { Dashboard } from '@/pages/Dashboard';
import { SellTickets } from '@/pages/SellTicket';
import Container from '@mui/material/Container';

const element = document.getElementById('app');
const root = createRoot(element);

function RequireAuth() {
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

function App() {
  return (
    <StrictMode>
      <AuthProvider>
        <CssBaseline />
        <Router>
          <Routes>
            {/*Public routes*/}
            <Route exact path="/login" element={<LoginPage />} />

            {/*Protected routes*/}
            <Route element={<RequireAuth />}>
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route exact path="/sell-tickets" element={<SellTickets />} />
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </StrictMode>
  );
}

root.render(<App />);
