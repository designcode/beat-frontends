import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RatingEntity } from '@beat-frontends/shared/types';

export const fetchRating = createAsyncThunk('ratings/fetchRating', async () => {
  return fetch('http://localhost:8080/comments').then((res) => res.json());
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
      .addCase(fetchRating.pending, (state: RideRatingState) => {
        state.status = 'loading';
      })
      .addCase(
        fetchRating.fulfilled,
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
      .addCase(fetchRating.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
