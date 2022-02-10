import type { Action } from 'typesafe-actions';

export enum CitySearchTypes {
  CITY_SEARCH_INSERT = '@city/CITY_SEARCH_INSERT',
  CITY_SEARCH_RESTORE = '@city/CITY_SEARCH_RESTORE',
}

export interface CitySearchState {
  citiesSearched: [];
}

export interface CitySearchInsertProps extends Action {
  type: CitySearchTypes.CITY_SEARCH_INSERT;
  payload: { citiesSearched: [] };
}

export interface CitySearchRestoreProps extends Action {
  type: CitySearchTypes.CITY_SEARCH_RESTORE;
}
