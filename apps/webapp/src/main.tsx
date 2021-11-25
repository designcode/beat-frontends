import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import styled from '@emotion/styled';
import App from './app/app';
import './main.scss';

const StyledApp = styled.div`
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
