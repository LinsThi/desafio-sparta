import { action } from 'typesafe-actions';

import type { CitySearchInsertProps, CitySearchRestoreProps } from './types';
import { CitySearchTypes } from './types';

export const citySearchInsertAction = (
  citiesSearched: [],
): CitySearchInsertProps =>
  action(CitySearchTypes.CITY_SEARCH_INSERT, { citiesSearched });

export const citySearchRestoreAction = (): CitySearchRestoreProps =>
  action(CitySearchTypes.CITY_SEARCH_RESTORE);
