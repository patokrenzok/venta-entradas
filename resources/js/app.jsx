import './bootstrap';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { AuthProvider } from '@/context/AuthProvider';
import { RequireAuth } from '@/routes/RequireAuth';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';
import { createTheme, ThemeProvider } from '@mui/material';
import 'react-toastify/dist/ReactToastify.css';

import { LoginPage } from '@/pages/Login';
import { Index as AuthenticatedLayout } from '@/layouts/Authenticated';
import { Dashboard } from '@/pages/Dashboard';
import { SellTickets } from '@/pages/Tickets/Sell';
import { UsersList } from '@/pages/Users/List';
import { UserForm } from '@/pages/Users/Form';
import { TicketsPage } from '@/pages/Tickets/TicketsPage';

const element = document.getElementById('app');
const root = createRoot(element);

const queryClient = new QueryClient();

const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: '#db3131',
          '&$error': {
            color: '#db3131',
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        type: 'submit',
      },
    },
  },
});

function App() {
  return (
    <StrictMode>
      <CssBaseline />
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <ToastContainer autoClose={3000} />
          <ThemeProvider theme={theme}>
            <Router>
              <Routes>
                {/*Public routes*/}
                <Route exact path="login" element={<LoginPage />} />

                {/*Protected routes*/}
                <Route element={<RequireAuth />}>
                  <Route element={<AuthenticatedLayout />}>
                    <Route exact path="dashboard" element={<Dashboard />} />
                    <Route path="tickets">
                      <Route exact path="sell" element={<SellTickets />} />
                      <Route path="types">
                        <Route exact path="add" element={<TicketsPage />} />
                      </Route>
                    </Route>

                    <Route path="users">
                      <Route path="" element={<UsersList />} />
                      <Route path="add" element={<UserForm />}>
                        <Route path=":userId" element={<UserForm />} />
                      </Route>
                    </Route>
                  </Route>
                </Route>
              </Routes>
            </Router>
          </ThemeProvider>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </AuthProvider>
    </StrictMode>
  );
}

root.render(<App />);
