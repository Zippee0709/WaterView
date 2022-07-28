import { createSlice } from '@reduxjs/toolkit';

import { GetStationTemperature } from '../actions/StationTemperatureAction';

import { IStationTemperature } from '../types/StationTemperatureType';

import { LoadingEnum } from '../../enums/LoadingEnum';

const initialState: IStationTemperature = {
  isLoading: LoadingEnum.IDLE,
  stationTemperature: undefined,
  error: undefined,
};

const StationTemperatureSlice = createSlice({
  name: 'StationTemperature',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(GetStationTemperature.pending, state => {
        state.isLoading = LoadingEnum.LOADING;
      })
      .addCase(GetStationTemperature.fulfilled, (state, action) => {
        state.isLoading = LoadingEnum.SUCCEED;
        state.stationTemperature = action.payload;
      })
      .addCase(GetStationTemperature.rejected, (state, action) => {
        state.isLoading = LoadingEnum.FAILED;
        state.error = action.payload;
      });
  },
});

export default StationTemperatureSlice;
