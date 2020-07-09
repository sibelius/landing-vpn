import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Rubik, sans-serif;
    --webkit-font-smoothing: antialiased !important;
  }

  button, textarea, input {
    cursor: pointer;
  }

  html, body, #root {
    min-height: 100%;
    min-width: 100%;
  }
`;
