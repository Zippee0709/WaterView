import axios from 'axios';
import API_URL from '../../constants/API';

import { IGetStationsOutput } from '../../types/StationsType';

interface IGetStationInput {
  id: string;
}

export const GetStation = async ({ id }: IGetStationInput) => {
  const response = await axios.get<IGetStationsOutput>(`${API_URL}/station?code_station=${id}`);
  return response.data;
};
