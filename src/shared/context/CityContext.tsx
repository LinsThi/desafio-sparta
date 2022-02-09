import React, { useCallback, useState, createContext, useMemo } from 'react';

import type { SearchCityDTO } from '../dtos/SearchCity';

type CityContextType = {
  citiesSearched: SearchCityDTO[];
  setSearchData: (data: SearchCityDTO[]) => void;
};

export const CityContext = createContext({} as CityContextType);

export function CityProvider({ children }) {
  const [citiesSearched, setCitiesSearched] = useState<SearchCityDTO[]>([]);

  const setSearchData = useCallback((data: SearchCityDTO[]) => {
    setCitiesSearched(data);
  }, []);

  const valueProvider = useMemo(
    () => ({
      citiesSearched,
      setSearchData,
    }),
    [citiesSearched, setSearchData],
  );

  return (
    <CityContext.Provider value={valueProvider}>
      {children}
    </CityContext.Provider>
  );
}
