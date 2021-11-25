import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteComponentProps } from 'react-router';
import { Card } from '@beat-frontends/ui';
import { fetchRideById, fetchRides } from '../../store/rides.slice';
import { RideState } from '../../store/store';
import { Ratings } from './../ratings/ratings';

interface MatchParams {
  rideId: string;
}
/* eslint-disable-next-line */
export interface RideOverviewProps extends RouteComponentProps<MatchParams> {}

const StyledRideList = styled.div``;

export function RideOverview(props: RideOverviewProps) {
  const rideId = Number(props.match.params.rideId);
  const dispatch = useDispatch();
  const ride = useSelector((state: RideState) => state.rides.selected);

  useEffect(() => {
    dispatch(fetchRideById({ rideId }));
  }, [dispatch, rideId]);

  return (
    <StyledRideList>
      <h1>Ride Details</h1>
      <Card>{ride?.ride.pickup}</Card>

      <Ratings rideId={rideId} />
    </StyledRideList>
  );
}

export default RideOverview;
