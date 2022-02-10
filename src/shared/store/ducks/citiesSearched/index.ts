import type { Reducer } from 'redux';

import type { CitySearchState } from './types';
import { CitySearchTypes } from './types';

const INITIAL_STATE: CitySearchState = {
  citiesSearched: [],
};

const reducer: Reducer<CitySearchState> = (
  state = INITIAL_STATE,
  { type, payload },
) => {
  switch (type) {
    case CitySearchTypes.CITY_SEARCH_INSERT:
      return { citiesSearched: payload.citiesSearched };
    case CitySearchTypes.CITY_SEARCH_RESTORE:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default reducer;
