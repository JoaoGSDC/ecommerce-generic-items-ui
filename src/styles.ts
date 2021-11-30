import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
  }

  body {
    background-color: #FFFFFF;
    font-family: 'Inter', sans-serif;
  }

  #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    transition: 0.2s;

    @media only screen and (min-width: 600px) {
      &:hover {
        background-color: #efefef;
      }
    }
  }
 `;
