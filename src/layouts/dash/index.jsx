import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

const Login = ({ children }) => (
  <Container>
    {children}
  </Container>
)

Login.propTypes = {
  children: PropTypes.elementType.isRequired,
}

export default Login
