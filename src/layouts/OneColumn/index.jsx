import { Container, Main } from "./styles";

import Footer from "components/Footer";
import Header from "components/Header";
import PropTypes from "prop-types";
import React from "react";

const Login = ({ children }) => (
  <Container>
    <Header />
    <Main>{children}</Main>
    <Footer />
  </Container>
);

Login.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default Login;
