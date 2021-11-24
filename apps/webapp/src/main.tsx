import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import styled from '@emotion/styled';

import App from './app/app';

const StyledApp = styled.div`
  font-family: Arial;
  font-size: 1rem;

  * {
    margin: 0;
    padding: 0;
    color: #333;
    line-height: 1.5rem;
  }

  a {
    text-decoration: none;
  }

  h1 {
    font-size: 2rem;
  }

  h1, h2, h3, h4, h5 {
    margin: 0 0 2rem 0;
  }
`;

ReactDOM.render(
  <StrictMode>
    <StyledApp>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StyledApp>
  </StrictMode>,
  document.getElementById('root')
);
