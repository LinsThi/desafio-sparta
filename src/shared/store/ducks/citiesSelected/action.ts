import { action } from 'typesafe-actions';

import type { SelectedCityDTO } from '~/shared/dtos/SelectedCity';

import type { CitySelectInsertProps, CitySelectRestoreProps } from './types';
import { CitySelectTypes } from './types';

export const citySelectInsertAction = (
  citiesSelected: SelectedCityDTO[],
): CitySelectInsertProps =>
  action(CitySelectTypes.CITY_SELECT_INSERT, { citiesSelected });

export const citySelectRestoreAction = (): CitySelectRestoreProps =>
  action(CitySelectTypes.CITY_SELECT_RESTORE);
