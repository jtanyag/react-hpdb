import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Cinzel', serif;

    animation: animate 1s;

    @keyframes animate {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
  }

  body {
    margin: 0;
    padding: 0;
  }
`;