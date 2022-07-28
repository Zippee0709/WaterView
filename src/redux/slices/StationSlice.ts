import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { GetStation } from '../actions/StationAction';

import { IStation } from '../types/StationType';

import { LoadingEnum } from '../../enums/LoadingEnum';

const initialState: IStation = {
  isLoading: LoadingEnum.IDLE,
  page: 1,
  station: undefined,
  error: undefined,
};

const StationSlice = createSlice({
  name: 'Station',
  initialState,
  reducers: {
    SetPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(GetStation.pending, state => {
        state.isLoading = LoadingEnum.LOADING;
      })
      .addCase(GetStation.fulfilled, (state, action) => {
        state.isLoading = LoadingEnum.SUCCEED;
        state.station = action.payload;
      })
      .addCase(GetStation.rejected, (state, action) => {
        state.isLoading = LoadingEnum.FAILED;
        state.error = action.payload;
      });
  },
});

export const { SetPage } = StationSlice.actions;

export default StationSlice;
