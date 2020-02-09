import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
  }
  html, body, #root {
    min-height: 100%;
    background-color: #101019;
  }
  ::-webkit-scrollbar {
    display: none
  }
`;

export default GlobalStyle;
