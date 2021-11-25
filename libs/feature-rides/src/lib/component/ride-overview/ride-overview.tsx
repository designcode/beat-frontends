import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
import { fetchRideById } from '../../store/rides.slice';
import { RideState } from '../../store/store';
import { RideDetails } from './../ride-details/ride-details';
import { Ratings } from './../ratings/ratings';

interface MatchParams {
  rideId: string;
}
/* eslint-disable-next-line */
export interface RideOverviewProps extends RouteComponentProps<MatchParams> {}

const StyledRideList = styled.div`
  .header {
    display: flex;
    justify-content: space-between;
  }
`;

export function RideOverview(props: RideOverviewProps) {
  const rideId = Number(props.match.params.rideId);
  const dispatch = useDispatch();
  const ride = useSelector((state: RideState) => state.rides.selected);

  useEffect(() => {
    dispatch(fetchRideById({ rideId }));
  }, [dispatch, rideId]);

  return (
    <StyledRideList>
      <div className="header">
        <h1>Ride Details</h1>
        <Link to="/rides">Back</Link>
      </div>
      {
        ride && <RideDetails ride={ride} showMap={true} />
      }

      <Ratings rideId={rideId} />
    </StyledRideList>
  );
}

export default RideOverview;
