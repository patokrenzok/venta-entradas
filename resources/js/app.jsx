import './bootstrap';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from '@/context/AuthProvider';
import { RequireAuth } from '@/routes/RequireAuth';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { LoginPage } from '@/pages/Login';
import { Index as AuthenticatedLayout } from '@/layouts/Authenticated';
import { Dashboard } from '@/pages/Dashboard';
import { SellTickets } from '@/pages/SellTicket';
import { UsersList } from '@/pages/Users/List';
import { UserForm } from '@/pages/Users/Form';

const element = document.getElementById('app');
const root = createRoot(element);

const queryClient = new QueryClient();

function App() {
  return (
    <StrictMode>
      <CssBaseline />
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <ToastContainer />
          <Router>
            <Routes>
              {/*Public routes*/}
              <Route exact path="login" element={<LoginPage />} />

              {/*Protected routes*/}
              <Route element={<RequireAuth />}>
                <Route element={<AuthenticatedLayout />}>
                  <Route exact path="dashboard" element={<Dashboard />} />
                  <Route exact path="sell-tickets" element={<SellTickets />} />

                  <Route path="users">
                    <Route path="" element={<UsersList />}></Route>
                    <Route path="add" element={<UserForm />}></Route>
                  </Route>
                </Route>
              </Route>
            </Routes>
          </Router>
        </QueryClientProvider>
      </AuthProvider>
    </StrictMode>
  );
}

root.render(<App />);
