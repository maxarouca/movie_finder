import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html {
    --light-blue: #03d3d8;
    --dark-blue: #116193;
    --bg-grey: #ebebeb;
    --font-color: #555555;
    --max-width: 910px;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background-color: #FFF;
    font-family: 'Lato', sans-serif;
  }

  body, input, button {
    font-size: 14px;
  }

  button{
    cursor: pointer;
  }


  h1, h2, h3, h4, h5, h6{
    font-family: 'Abel', sans-serif
  }
`;

export default GlobalStyle;
