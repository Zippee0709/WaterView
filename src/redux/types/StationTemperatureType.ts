import { IBase } from './BaseType';
import { IError } from './ErrorType';
import { LoadingEnum } from '../../enums/LoadingEnum';

interface IStationTemperatureType {
  code_station: string;
  libelle_station: string;
  localisation: string;
  uri_station: string;
  longitude: number;
  latitude: number;
  code_commune: string;
  libelle_commune: string;
  code_cours_eau: string;
  libelle_cours_eau: string;
  uri_cours_eau: string;
  code_parametre: string;
  libelle_parametre: string;
  date_mesure_temp: string;
  heure_mesure_temp: string;
  resultat: number;
  code_unite: string;
  symbole_unite: string;
  code_qualification: string;
  libelle_qualification: string;
}

export interface IStationTemperatureData extends IBase {
  count: number;
  first: string;
  last: string;
  prev: string | null;
  next: string | null;
  data: IStationTemperatureType[];
}

export interface IStationTemperature {
  isLoading: LoadingEnum;
  stationTemperature: IStationTemperatureData | undefined;
  error: IError | undefined;
}
