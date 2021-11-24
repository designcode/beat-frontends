import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRating } from '../../store/rating.slice';
import { RideState } from '../../store/store';

export interface RatingsProps {
  rideId: number;
}

const StyledRideList = styled.div`
  color: pink;
`;

export function Ratings(props: RatingsProps) {
  const dispatch = useDispatch();
  const rating = useSelector(
    (state: RideState) => state.ratings.entities[props.rideId]
  );

  useEffect(() => {
    dispatch(fetchRating());
  }, [dispatch]);

  return (
    <StyledRideList>
      <h1>Ratings!</h1>
      {rating?.message}
    </StyledRideList>
  );
}

export default Ratings;
