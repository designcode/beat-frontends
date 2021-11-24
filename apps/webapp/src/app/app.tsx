import { Route } from 'react-router-dom';

import { Container, Header } from '@beat-frontends/ui';
import { FeatureLanding } from '@beat-frontends/feature-landing';

import { FeatureRides } from '@beat-frontends/feature-rides';

export function App() {
  return (
    <Container>
      <Header></Header>

      <Route path="/" exact component={FeatureLanding} />
      <Route path="/rides" component={FeatureRides} />
    </Container>
  );
}

export default App;
