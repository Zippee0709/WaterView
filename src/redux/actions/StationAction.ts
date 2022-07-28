import axios, { AxiosError } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

import { IStationData } from '../types/StationType';
import { IError } from '../types/ErrorType';

import API_URL from '../../constants/API';

interface GetStationProps {
  page: number;
}

export const GetStation = createAsyncThunk<
  IStationData,
  GetStationProps,
  {
    rejectValue: IError | undefined;
  }
>('station/get', async ({ page }: GetStationProps, thunkAPI) => {
  try {
    const response = await axios.get<IStationData>(`${API_URL}/station?size=1&page=${page}`);
    return response.data;
  } catch (err: any) {
    let error: AxiosError<IError> = err;
    if (!error.response) {
      throw err;
    }
    return thunkAPI.rejectWithValue(error.response.data);
  }
});
