import React from 'react'
import { Switch } from 'react-router-dom'
import Route from './Route';

import Login from '../pages/login'
import ForgotPass from '../pages/forgot-pass'
import SentPass from '../pages/sent-pass'


const Routes = () => (
  <Switch>

    {/* Login Routes */}

    <Route
      exact
      path="/"
      component={Login}
    />
    <Route
      exact
      path="/esqueci-minha-senha"
      component={ForgotPass}
    />
    <Route
      exact
      path="/senha-enviada"
      component={SentPass}
    />

    {/* Dash Routes */}

    <Route
      exact
      path="/dash"
      component={() => <h1>Dashboard</h1>}
      isPrivate
    />
  </Switch>
)

export default Routes
