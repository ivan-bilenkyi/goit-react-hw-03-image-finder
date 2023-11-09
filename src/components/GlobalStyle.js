import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  ul {
  list-style: none;
  margin: 0;
  padding: 0;
  }
  
  h1, h2 {
    margin: 0 0 14px;
  }

  img {
    display: block;
    width: 100%;
    object-fit: cover;
    /* max-height: 280px; */
    height:100%
  }

  p{
    max-width: 320px;
  }
`;