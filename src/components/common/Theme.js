import styled, { createGlobalStyle } from 'styled-components';

export const theme = {
  black: '#393939',
  maxWidth: '1024px',
}

export const StyledPage = styled.div`
  background-color: #f0f2f5;
  color: ${props => props.theme.black};
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
  .ant-card-body {
    position: relative;
  }
`;

export const InnerOnly = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

export const InnerFooter = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  text-align: center;
`;

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    min-height: 100%;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  a {
    text-decoration: none;
    color: ${theme.green};
  }
  button {  font-family: 'radnika_next'; }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }
`;