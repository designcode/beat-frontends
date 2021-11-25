import { configureStore } from '@reduxjs/toolkit';
import { ratingSlice } from './rating.slice';
import { ridesSlice } from './rides.slice';

export const store = configureStore({
  reducer: {
    rides: ridesSlice.reducer,
    ratings: ratingSlice.reducer,
  },
});

export type RideState = ReturnType<typeof store.getState>;
