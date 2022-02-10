import type { CitySearchState } from '~/shared/store/ducks/citiesSearched/types';
import type { CitySelectState } from '~/shared/store/ducks/citiesSelected/types';

export interface AplicationState {
  citiesSearched: CitySearchState;
  citiesSelected: CitySelectState;
}
