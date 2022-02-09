import React, { useCallback, useState } from 'react';

import type ResponseGeneratorDTO from '~/shared/dtos/ResponseGenerato';
import { useCities } from '~/shared/hooks/useCities';
import { getCities } from '~/shared/services/getCities';

import { filterRepeatCities } from './utils';

import * as S from './styles';

export function SearchBar() {
  const { setSearchData } = useCities();
  const [searchCity, setSearchCity] = useState('');

  const handleSearchCities = useCallback(async () => {
    const response: ResponseGeneratorDTO = await getCities(searchCity);
    const arrayCities = response.data;

    const uniqueCities = filterRepeatCities(arrayCities);

    setSearchData(uniqueCities);
  }, [searchCity, setSearchData]);

  return (
    <S.Container>
      <S.Button name="search1" iconType="antDesign" />

      <S.InputSearch
        placeholder="Digite o nome de uma cidade"
        value={searchCity}
        onChangeText={setSearchCity}
        onSubmitEditing={handleSearchCities}
        placeholderTextColor="#fff"
      />
    </S.Container>
  );
}
