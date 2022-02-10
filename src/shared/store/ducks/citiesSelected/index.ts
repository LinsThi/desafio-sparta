import type { Reducer } from 'redux';

import type { CitySelectState } from './types';
import { CitySelectTypes } from './types';

const INITIAL_STATE: CitySelectState = {
  citiesSelected: [],
};

const reducer: Reducer<CitySelectState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case CitySelectTypes.CITY_SELECT_INSERT:
      return { citiesSelected: payload.citiesSelected };
    case CitySelectTypes.CITY_SELECT_RESTORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
