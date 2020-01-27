import React from 'react'
import {
  Route, Switch, Link,
} from 'react-router-dom'
// components
import Login from './pages/login'
import ForgetPass from './pages/forget-pass'
import RecoveryPass from './pages/recovery-pass'
import UserRegister from './pages/user-register'
import Home from './pages/home'

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/forget-pass" component={ForgetPass} />
    <Route exact path="/recovery-pass" component={RecoveryPass} />
    <Route exact path="/user-register" component={UserRegister} />
  </Switch>
)

export default Routes
