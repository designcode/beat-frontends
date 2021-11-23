import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import styled from '@emotion/styled';

import App from './app/app';

const StyledApp = styled.body`
    margin: 0;
    padding: 0;
    font-family: Arial;
    font-size: 1rem;
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
