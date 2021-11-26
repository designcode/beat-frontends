import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RatingEntity } from '@beat-frontends/shared/types';

export interface RideRatingRequesyPayload {
  rideId: number;
}

export const fetchRatings = createAsyncThunk('ratings/fetchRating', async () => {
  return fetch('http://localhost:8080/comments').then((res) => res.json());
});

export const fetchRatingsById = createAsyncThunk('ratings/fetchRatingById', async ({ rideId }: RideRatingRequesyPayload) => {
  return fetch(`http://localhost:8080/comments?rideId=${rideId}`).then((res) => res.json());
});

export interface RideRatingState {
  entities: { [id: string]: RatingEntity };
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}

export const initialState: RideRatingState = {
  entities: {},
  status: 'idle',
  error: null,
};

export const ratingSlice = createSlice({
  name: 'rating',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // fetchRatings
      .addCase(fetchRatings.pending, (state: RideRatingState) => {
        state.status = 'loading';
      })
      .addCase(
        fetchRatings.fulfilled,
        (
          state: RideRatingState,
          action: PayloadAction<Array<RatingEntity>>
        ) => {
          state.status = 'succeeded';
          state.entities = action.payload.reduce(
            (c, v) => ({ ...c, [v.id]: v }),
            {}
          );
        }
      )
      .addCase(fetchRatings.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // fetchRatingsById
      .addCase(fetchRatingsById.pending, (state: RideRatingState) => {
        state.status = 'loading';
      })
      .addCase(
        fetchRatingsById.fulfilled,
        (
          state: RideRatingState,
          action: PayloadAction<Array<RatingEntity>>
        ) => {
          state.status = 'succeeded';
          state.entities = action.payload.reduce(
            (c, v) => ({ ...c, [v.id]: v }),
            {}
          );
        }
      )
      .addCase(fetchRatingsById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
