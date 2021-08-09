import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --maxWidth: 1280px;
    --white: #fff;
    --lightYellow: #FEE39A;
    --medYellow: #FDD35D;
    --darkYellow: #FCBA04;
    --superBigFont: 3.5rem;
    --bgFont: 2.5rem;
    --mdFont: 1.8rem;
    --smFont: 1.5rem;
  }

  * {
    margin: 0;
    padding: 0;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%;
    
  }

  body {
    font-family: 'Abel', sans-serif;

    h1 {
      font-size: 3.5rem;
      font-weight: 600;
      color: var(--white);
    }

    h3 {
      font-size: 2rem;
      font-weight: 600;
    }

    p {
      font-size: 1.8rem;
      color: var(--white);
    }
  }
`