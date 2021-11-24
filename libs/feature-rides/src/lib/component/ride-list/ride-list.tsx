import { fetchRides } from '@beat-frontends/feature-rides';
import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { RideListState, selectRidesState } from '../../feature-rides.slice';

/* eslint-disable-next-line */
export interface RideListProps {}

const StyledRideList = styled.div`
  color: pink;
`;

export function RideList(props: RideListProps) {
  const dispatch = useDispatch();
  const { entities, status } = useSelector(selectRidesState);

  useEffect(() => {
    dispatch(fetchRides())
  }, [dispatch]);


  if (status === 'succeeded') {
    return (
      <StyledRideList>
        <h1>Welcome to RideList!</h1>
        {(entities).map(ride => (
          <p key={ride.id}>{ride.ride.total}</p>
        ))}
      </StyledRideList>
    );
  }

  return (
    <StyledRideList>
    <h1>{status}!</h1>
  </StyledRideList>
  );

}

export default RideList;
