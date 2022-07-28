import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { IStationTemperatureData } from '../types/StationTemperatureType';
import { IError } from '../types/ErrorType';

import API_URL from '../../constants/API';

interface GetStationTemperatureProps {
  id: string;
  size?: number;
}

export const GetStationTemperature = createAsyncThunk<
  IStationTemperatureData,
  GetStationTemperatureProps,
  {
    rejectValue: IError | undefined;
  }
>('temperature/get', async ({ id, size = 30 }: GetStationTemperatureProps, thunkAPI) => {
  try {
    const response = await axios.get<IStationTemperatureData>(
      `${API_URL}/chronique?code_station=${id}&size=${size}&sort=desc`,
    );
    return response.data;
  } catch (err: any) {
    let error: AxiosError<IError> = err;
    if (!error.response) {
      throw err;
    }
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
