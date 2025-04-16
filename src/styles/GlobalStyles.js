import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
    background-color: #000;
    color: #fff;
    font-family: Arial, sans-serif;
    overflow-x: hidden;
  }

  #root {
    width: 100%;
    height: 100%;
  }

  body > div {
    width: 100% !important;
  }
`;

export default GlobalStyles;
