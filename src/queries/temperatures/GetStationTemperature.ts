import axios from 'axios';
import API_URL from '../../constants/API';

import { IGetStationTemperatureOutput } from '../../types/StationTemperatureType';

interface IGetStationTemperatureInput {
  id: string;
  page: number;
  size?: number;
}

export const GetStationTemperature = async ({ id, page, size = 30 }: IGetStationTemperatureInput) => {
  const response = await axios.get<IGetStationTemperatureOutput>(
    `${API_URL}/chronique?code_station=${id}&page=${page}&size=${size}&sort=desc`,
  );
  return response.data;
};
