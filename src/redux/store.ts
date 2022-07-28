import { configureStore } from '@reduxjs/toolkit';

// import RootReducer from './RootReducer'

import StationSlice from './slices/StationSlice';
import StationTemperatureSlice from './slices/StationTemperatureSlice';

export const store = configureStore({
  reducer: {
    station: StationSlice.reducer,
    stationTemperature: StationTemperatureSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
