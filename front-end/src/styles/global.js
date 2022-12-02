import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    background-color: #f0f2f5;
    font-family: Arial, Helvetica, sans-serif;
    height: 100vh;
    width: 100vw;
  }
`;

export default GlobalStyle;
