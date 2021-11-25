import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RideEntity } from '@beat-frontends/shared/types';

export interface RideOverviewRequestPayload {
  rideId: number;
}

export const fetchRides = createAsyncThunk('rides/fetchRides', async () => {
  return fetch('http://localhost:8080/items').then((res) => res.json());
});

export const fetchRideById = createAsyncThunk(
  'rides/fetchRideById',
  async ({ rideId }: RideOverviewRequestPayload) => {
    return fetch(`http://localhost:8080/items?id=${rideId}`).then((res) =>
      res.json()
    );
  }
);

export interface RideListState {
  entities: Array<RideEntity>;
  selected?: RideEntity;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}

export const initialState: RideListState = {
  entities: [],
  selected: undefined,
  status: 'idle',
  error: null,
};

export const ridesSlice = createSlice({
  name: 'rides',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      // fetchRides
      .addCase(fetchRides.pending, (state: RideListState) => {
        state.status = 'loading';
      })
      .addCase(
        fetchRides.fulfilled,
        (state: RideListState, action: PayloadAction<Array<RideEntity>>) => {
          state.status = 'succeeded';
          state.entities = [...state.entities].concat(action.payload);
        }
      )
      .addCase(fetchRides.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // fetchRideById
      .addCase(fetchRideById.pending, (state: RideListState) => {
        state.status = 'loading';
      })
      .addCase(
        fetchRideById.fulfilled,
        (state: RideListState, action: PayloadAction<Array<RideEntity>>) => {
          state.status = 'succeeded';
          state.selected = action.payload[0];
        }
      )
      .addCase(fetchRideById.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});
