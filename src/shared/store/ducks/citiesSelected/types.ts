import type { Action } from 'typesafe-actions';

import type { SelectedCityDTO } from '~/shared/dtos/SelectedCity';

export enum CitySelectTypes {
  CITY_SELECT_INSERT = '@city/CITY_SELECT_INSERT',
  CITY_SELECT_RESTORE = '@city/CITY_SELECT_RESTORE',
}

export interface CitySelectState {
  citiesSelected: SelectedCityDTO[];
}

export interface CitySelectInsertProps extends Action {
  type: CitySelectTypes.CITY_SELECT_INSERT;
  payload: { citiesSelected: SelectedCityDTO[] };
}

export interface CitySelectRestoreProps extends Action {
  type: CitySelectTypes.CITY_SELECT_RESTORE;
}
