import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: 0;

    &:focus {
      outline: 0;
    }
  }

  html, body, #root{
    height: 100%; 
  }

  #root{
    max-width: 330px;
    width: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    background-color: ${props => props.theme.colors.white1};
    display: flex;
    justify-content: center;
  }

  body, input, button {
    font-size: 14px;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
  
  button {
    cursor: pointer;
  }
`;
