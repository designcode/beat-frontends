import styled from '@emotion/styled';
import { Provider } from 'react-redux';
import { store } from './feature-rides.slice';
import { RideList } from './component/ride-list/ride-list';

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

        <RideList />
      </Provider>
    </StyledFeatureRides>
  );
}

export default FeatureRides;
