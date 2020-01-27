import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
// components
import Login from './pages/login'
import ForgetPass from './pages/forget-pass'
import RecoveryPass from './pages/recovery-pass'

const Routes = () => (
  <Switch>
    <Redirect exact from="/" to="/login" />
    <Route exact path="/" component={() => <h1>Home</h1>} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/forget-pass" component={ForgetPass} />
    <Route exact path="/recovery-pass" component={RecoveryPass} />
  </Switch>
)

export default Routes
