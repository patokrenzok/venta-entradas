import './bootstrap';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from '@/context/AuthProvider';
import { RequireAuth } from '@/routes/RequireAuth';

import { LoginPage } from '@/pages/Login';
import { Index as AuthenticatedLayout } from '@/layouts/Authenticated';
import { Dashboard } from '@/pages/Dashboard';
import { SellTickets } from '@/pages/SellTicket';
import { UsersList } from '@/pages/Users/List';

const element = document.getElementById('app');
const root = createRoot(element);

function App() {
  return (
    <StrictMode>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <Routes>
            {/*Public routes*/}
            <Route exact path="login" element={<LoginPage />} />

            {/*Protected routes*/}
            <Route element={<RequireAuth />}>
              <Route element={<AuthenticatedLayout />}>
                <Route exact path="dashboard" element={<Dashboard />} />
                <Route exact path="sell-tickets" element={<SellTickets />} />

                <Route path="users" element={<UsersList />} />
              </Route>
            </Route>
          </Routes>
        </Router>
      </AuthProvider>
    </StrictMode>
  );
}

root.render(<App />);
