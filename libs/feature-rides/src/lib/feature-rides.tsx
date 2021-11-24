import styled from '@emotion/styled';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { store } from './store/store';
import { RideList } from './component/ride-list/ride-list';
import { RideOverview } from './component/ride-overview/ride-overview';

/* eslint-disable-next-line */
export interface FeatureRidesProps {}

const StyledFeatureRides = styled.div`
  color: pink;
`;

export function FeatureRides(props: FeatureRidesProps) {
  return (
    <StyledFeatureRides>
      <Provider store={store}>
        <h1>Rides!</h1>

        <Route exact path="/rides" component={RideList} />
        <Route path="/rides/:rideId" component={RideOverview} />
      </Provider>
    </StyledFeatureRides>
  );
}

export default FeatureRides;
