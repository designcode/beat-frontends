import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import { store } from './store/store';
import { RideList } from './component/ride-list/ride-list';
import { RideOverview } from './component/ride-overview/ride-overview';

export function FeatureRides() {
  return (
    <Provider store={store}>
      <Route exact path="/rides" component={RideList} />
      <Route path="/rides/:rideId" component={RideOverview} />
    </Provider>
  );
}

export default FeatureRides;
