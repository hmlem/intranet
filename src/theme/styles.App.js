import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Raleway:400,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Arvo:400,700&display=swap');

  *{
    margin: 0;
    padding: 0;
    font-family: 'Raleway', sans-serif;
  }
  html, body, #root{
    height: 100%;
    background: ${(props) => props.theme.white};
  }

  h1{
    color: ${(props) => props.theme.black};
  }
`
