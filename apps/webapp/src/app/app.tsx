import styled from '@emotion/styled';
import { Container, Header } from '@beat-frontends/ui';

const StyledApp = styled.div`
    font-family: Arial;
    font-size: 1rem;

    .some {
      height: 400px;
      background: #f00;
    }
`;

export function App() {
  return (
    <StyledApp>
      <Container>
        <Header></Header>
      </Container>
    </StyledApp>
  );
}

export default App;
