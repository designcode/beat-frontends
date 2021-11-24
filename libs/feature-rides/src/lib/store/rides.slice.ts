import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RideEntity } from '@beat-frontends/types';

export const fetchRides = createAsyncThunk('rides/fetchRides', async () => {
  return fetch('http://localhost:8080/items').then((res) => res.json());
});

export interface RideListState {
  entities: Array<RideEntity>;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}

export const initialState: RideListState = {
  entities: [],
  status: 'idle',
  error: null,
};

export const ridesSlice = createSlice({
  name: 'rides',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchRides.pending, (state: RideListState, action) => {
        state.status = 'loading';
      })
      .addCase(
        fetchRides.fulfilled,
        (state: RideListState, action: PayloadAction<Array<RideEntity>>) => {
          state.status = 'succeeded';
          state.entities = state.entities.concat(action.payload);
        }
      )
      .addCase(fetchRides.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
