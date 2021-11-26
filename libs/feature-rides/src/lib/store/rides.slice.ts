import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
  ENTITY_LIMIT_PER_PAGE,
  PaginatedEntitiesRequestPayload,
  PaginatedEntitiesResponsePayload,
  RideEntity,
} from '@beat-frontends/shared/types';

export interface RideOverviewRequestPayload {
  rideId: number;
}

export const fetchRides = createAsyncThunk(
  'rides/fetchRides',
  async ({ page = 1, limit = ENTITY_LIMIT_PER_PAGE }: PaginatedEntitiesRequestPayload) => {
    const response = await fetch(
      `http://localhost:8080/items?_limit=${limit}&_page=${page}`
    );
    return (await response.json().then(entities => ({
      entities,
      limit,
      currentPage: page,
    }))) as PaginatedEntitiesResponsePayload<RideEntity>;
  }
);

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
  currentPage: number;
  limit: number;
  hasMoreEntities: boolean;
  selected?: RideEntity;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null | undefined;
}

export const initialState: RideListState = {
  entities: [],
  currentPage: 0,
  limit: 0,
  hasMoreEntities: true,
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
        (state: RideListState, action: PayloadAction<PaginatedEntitiesResponsePayload<RideEntity>>) => {
          state.status = 'succeeded';
          state.entities = [...state.entities].concat(action.payload.entities);
          state.currentPage = action.payload.currentPage;
          state.limit = action.payload.limit;
          state.hasMoreEntities =
            action.payload.entities.length >= action.payload.limit;
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
