import type { Reducer } from 'redux';

import { UNITS_CELCIUS, UNITS_FAHRENHEIT } from '~/shared/constants/request';

import type { CitySelectState } from './types';
import { CitySelectTypes } from './types';

const INITIAL_STATE: CitySelectState = {
  citiesSelected: [],
  units: UNITS_CELCIUS,
};

const reducer: Reducer<CitySelectState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  const { units } = state;
  switch (type) {
    case CitySelectTypes.CITY_SELECT_INSERT:
      return { ...state, citiesSelected: payload.citiesSelected };
    case CitySelectTypes.CITY_SELECT_RESTORE:
      return INITIAL_STATE;
    case CitySelectTypes.TOGGLE_UNITS:
      return {
        ...state,
        units: units === UNITS_CELCIUS ? UNITS_FAHRENHEIT : UNITS_CELCIUS,
      };
    default:
      return state;
  }
};

export default reducer;
