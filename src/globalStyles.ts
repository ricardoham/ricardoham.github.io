import { createGlobalStyle } from 'styled-components';

const StyledGlobal = createGlobalStyle`
  html, body {
    font-family: 'Amatic SC', sans-serif;
    font-size: 62.5%;
    line-height: 1.7;
    height: 100%;
    background-color: #181818;
    color: #fff;
    margin: 0;
  }

  ul {
    list-style: none;
  }

  a {
  text-decoration: none;
}

  h1 {
    font-size: 4rem;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 2rem;
  }

  @mixin clearfix {
  &::after {
    content: "";
    display: table;
    clear: both;
  }
}`;

export default StyledGlobal;
