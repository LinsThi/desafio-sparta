import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import type ResponseGeneratorDTO from '~/shared/dtos/ResponseGenerato';
import { getCities } from '~/shared/services/getCities';
import {
  citySearchInsertAction,
  citySearchRestoreAction,
} from '~/shared/store/ducks/citiesSearched/action';

import { filterRepeatCities } from './utils';

import * as S from './styles';

export function SearchBar() {
  const dispatch = useDispatch();
  const [searchCity, setSearchCity] = useState('');

  const handleSearchCities = useCallback(async () => {
    const response = await getCities(searchCity);
    const arrayCities = response.data;

    const uniqueCities = filterRepeatCities(arrayCities);

    dispatch(citySearchInsertAction(uniqueCities));
  }, [searchCity, dispatch]);

  useEffect(() => {
    if (searchCity === '') {
      dispatch(citySearchRestoreAction());
    }
  }, [searchCity, dispatch]);

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
