import { Container, Main } from "./styles";

import Footer from "components/Footer";
import Header from "components/Header";
import PropTypes from "prop-types";
import React from "react";

const TwoColumnLayout = ({ firstColumn, secondColumn }) => (
  <Container>
    <Header />
    <Main>
      <div>{firstColumn}</div>
      <div>{secondColumn}</div>
    </Main>
    <Footer />
  </Container>
);

TwoColumnLayout.propTypes = {
  firstColumn: PropTypes.elementType.isRequired,
  secondColumn: PropTypes.elementType.isRequired,
};

export default TwoColumnLayout;
