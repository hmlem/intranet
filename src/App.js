import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Routes from './routes'
// theme
import { theme } from './theme/theme'
// styles
import { GlobalStyles } from './theme/styles.App'

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Router>
          <Routes />
        </Router>
      </ThemeProvider>
    </div>
  )
}

export default App
