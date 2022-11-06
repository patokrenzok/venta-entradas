import './bootstrap';
import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {Switch, Router, Route} from 'wouter';
import CssBaseline from '@mui/material/CssBaseline';

import {AuthProvider} from '@/context/AuthProvider';
import {LoginPage} from '@/pages/Login';
import {Dashboard} from '@/pages/Dashboard';
import {SellTickets} from '@/pages/SellTicket';

const element = document.getElementById('app');
const root = createRoot(element);

function App() {
  return (
    <StrictMode>
      <AuthProvider>
        <CssBaseline/>
        <Router>
          <Switch>
            <Route path="/login" component={LoginPage}/>

            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/sell-tickets" component={SellTickets}/>
          </Switch>
        </Router>
      </AuthProvider>
    </StrictMode>
  );
}

root.render(<App/>);
