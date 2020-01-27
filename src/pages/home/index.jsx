import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from './styles'

const Home = () => (
  <Container>
    <h1>Home</h1>
    <Link to="user-register">Registrate User</Link>
  </Container>
)

export default Home
