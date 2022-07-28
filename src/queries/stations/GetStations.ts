import axios from 'axios';
import API_URL from '../../constants/API';

import { IGetStationsOutput } from '../../types/StationsType';

interface IGetStationsInput {
  page: number;
  size?: number;
}

export const GetStations = async ({ page, size = 1 }: IGetStationsInput) => {
  const response = await axios.get<IGetStationsOutput>(`${API_URL}/station?page=${page}&size=${size}`);
  return response.data;
};
