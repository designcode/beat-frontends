import styled from '@emotion/styled';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RatingEntity } from '@beat-frontends/shared/types';
import { Card } from '@beat-frontends/ui';
import { postRating } from '../../store/rating.slice';

export interface RatingFormProps {
  rideId: number;
}

const StyledRatingForm = styled.div`
  .rating-form-element {
    margin: 1rem 0;
    width: 100%;
  }
`;

export function RatingForm(props: RatingFormProps) {
  const rideId = props.rideId;
  const dispatch = useDispatch();
  const ratingValues = [1, 2, 3, 4, 5];

  const initialRatingState: RatingEntity = {
    id: rideId,
    rate: 5,
    message: undefined,
  };

  const [rating, setRating] = useState(initialRatingState);

  const submitRating = () => {
    dispatch(postRating(rating));
  };

  return (
    <StyledRatingForm>
      <Card>
        <h4>Rate your Ride</h4>
        <select
          className="rating-form-element"
          onChange={(event) =>
            setRating({
              ...rating,
              rate: Number(event.target.value),
            })
          }
          value={rating.rate}
        >
          {ratingValues.map((value) => (
            <option key={value} value={value}>
              {value}
            </option>
          ))}
        </select>
        {rating.rate < 3 && (
          <textarea
            className="rating-form-element"
            placeholder="Leave a comment"
            onChange={(event) => setRating({
              ...rating,
              message: event.target.value,
            })}
          ></textarea>
        )}
        <button onClick={submitRating}>Submit</button>
      </Card>
    </StyledRatingForm>
  );
}

export default RatingForm;
