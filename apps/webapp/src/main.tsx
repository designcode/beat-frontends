import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import styled from '@emotion/styled';

import App from './app/app';

const StyledApp = styled.body`
  font-family: Arial;
  font-size: 1rem;

  * {
    margin: 0;
    padding: 0;
    color: #333;
  }

  a {
    text-decoration: none;
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
