import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './styles'

const Btn = ({ children, onClick, type }) => (
  <Button type={type} onClick={onClick}>
    {children}
  </Button>
)

Btn.propTypes = {
  children: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string.isRequired,
}

Btn.defaultProps = {
  onClick: () => {},
}

export default Btn
