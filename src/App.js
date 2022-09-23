import AppContext from "services/context";

import theme from "theme";
import { GlobalStyles } from "theme/styles.App";

import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "services/Routes";
import { ThemeProvider } from "styled-components";

function App() {
  const [signed, setSigned] = useState(false); // true or false

  return (
    <AppContext.Provider value={{ signed, setSigned }}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </AppContext.Provider>
  );
}

export default App;
