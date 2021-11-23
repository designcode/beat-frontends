import styled from '@emotion/styled';
import { Route } from 'react-router-dom';

import { Container, Header } from '@beat-frontends/ui';
import { FeatureLanding } from '@beat-frontends/feature-landing';

export function App() {
  return (
    <Container>
      <Header></Header>



      <Route path="/" exact component={FeatureLanding} />
    </Container>
  );
}

export default App;
