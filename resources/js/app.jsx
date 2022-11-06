import './bootstrap'
import { createRoot } from 'react-dom/client'
import { Switch, Router, Route } from 'wouter'

import { LoginPage } from '@/pages/Login'

const element = document.getElementById('app')
const root = createRoot(element)

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={LoginPage} />
      </Switch>
    </Router>
  )
}

root.render(<App />)
