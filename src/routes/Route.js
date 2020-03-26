/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

import LoginLayout from '../layouts/login'
import DashLayout from '../layouts/dash'

import AppContext from '../context'

export default function RouteWrapper({
  component: Component,
  isPrivate,
  ...rest
}) {
  const { signed } = useContext(AppContext)

  /**
   * Redirect user to Login page if he tries to
   * access a private route without authentication.
   */
  if (isPrivate && !signed) {
    return <Redirect to="/" />;
  }

  /**
   * Redirect user to Dash page if he tries to access
   * a non private route (Login) after being
   * authenticated.
   */
  if (!isPrivate && signed) {
    return <Redirect to="/dash" />;
  }

  const Layout = signed ? DashLayout : LoginLayout

  /**
   * If not included on both previous cases, redirect
   * user to the desired route.
   */

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
