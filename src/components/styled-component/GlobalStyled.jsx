import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    color: #fff;
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 500px) {
    html {
      font-size: 72%;
      width: 450px;
      height: 100%;
      margin: 0 auto;
      border: 1px solid lightgray;
    }
  }

  @media (max-width: 500px) {
    html {
      font-size: 65%;
      margin: 0 auto;
      height: 100%;
    }
  }

#root {
  text-align: center;
  min-height: 100vh;
  height: 100%;
  background: #181924;
  padding: 2.4rem;
}
`;
