import React, { useState, useContext } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import AppContext from './context'
// routes
import Routes from './routes/index'
// theme
import { theme } from './theme/theme'
// styles
import { GlobalStyles } from './theme/styles.App'

function App() {
  const [signed, setSigned] = useState(false) // true or false

  return (
    <AppContext.Provider
      value={{ signed, setSigned }}
    >
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </AppContext.Provider>
  )
}

export default App
