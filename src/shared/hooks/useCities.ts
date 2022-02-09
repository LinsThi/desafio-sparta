import { useContext } from 'react';

import { CityContext } from '../context/CityContext';

export function useCities() {
  const context = useContext(CityContext);

  return context;
}
