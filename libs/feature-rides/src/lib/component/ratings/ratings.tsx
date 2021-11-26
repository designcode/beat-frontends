import styled from '@emotion/styled';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Card } from '@beat-frontends/ui';
import { fetchRatingsById } from '../../store/rating.slice';
import { RideState } from '../../store/store';
import RatingForm from './rating-form';

export interface RatingsProps {
  rideId: number;
}

const StyledRatings = styled.div`
  color: pink;
`;

export function Ratings(props: RatingsProps) {
  const rideId = props.rideId;
  const dispatch = useDispatch();
  const rating = useSelector(
    (state: RideState) => state.ratings.entities[props.rideId]
  );

  useEffect(() => {
    if (!rating) {
      dispatch(fetchRatingsById({
        rideId,
      }));
    }
  }, [dispatch, rideId, rating]);

  if (rating) {
    return (
      <StyledRatings>
        <h2>Ratings</h2>
        <Card>
          <h2>{rating?.rate} out of 5</h2>
          {
            rating?.message && <p>{rating?.message}</p>
          }
        </Card>
      </StyledRatings>
    );
  } else {
    return (
      <StyledRatings>
      <h2>Ratings</h2>
        <RatingForm rideId={rideId} />
      </StyledRatings>
    );
  }
}

export default Ratings;
