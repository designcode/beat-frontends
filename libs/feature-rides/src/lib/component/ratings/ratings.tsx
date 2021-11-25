import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '@beat-frontends/ui';
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

  if (rating) {
    return (
      <StyledRideList>
        <h2>Ratings</h2>
        <Card>{rating?.message}</Card>
      </StyledRideList>
    );
  } else {
    return (
      <StyledRideList>
        <Card>
          <h2>Rate your ride</h2>
        </Card>
      </StyledRideList>
    );
  }
}

export default Ratings;
