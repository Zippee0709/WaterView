import { IBase } from './BaseType';

interface IStation {
  code_station: string;
  libelle_station: string;
  uri_station: string;
  localisation: string;
  coordonnee_x: number;
  coordonnee_y: number;
  code_type_projection: number;
  libelle_type_projection: string;
  premier_mois_etiage: number;
  longitude: number;
  latitude: number;
  code_commune: string;
  libelle_commune: string;
  code_departement: string;
  libelle_departement: string;
  code_region: string;
  libelle_region: string;
  code_troncon_hydro: string;
  code_cours_eau: string;
  libelle_cours_eau: string;
  uri_cours_eau: string;
  code_masse_eau: string;
  libelle_masse_eau: string;
  uri_masse_eau: string;
  code_sous_bassin: string;
  libelle_sous_bassin: string;
  code_bassin: string;
  code_eu_bassin: string;
  code_eu_masse_eau: string;
  commentaire: string;
  libelle_bassin: string;
  nature_station: string;
  type_entite_hydro: string;
  uri_sous_bassin: string;
  uri_bassin: string;
  pk: number;
  altitude: number;
  superficie_reelle: number;
  superficie_topo: number;
  date_maj_infos: string;
  date_mise_en_service: string;
  date_mise_hors_service: string;
}

export interface IGetStationsOutput extends IBase {
  data: IStation[];
}
