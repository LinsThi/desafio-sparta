import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import type { AplicationState } from '~/shared/@types/Entity/AplicationState';

import { FlatListCards } from '../../components/FlatListCards';
import { SearchBar } from '../../components/SearchBar';

import * as S from './styles';

export function NewCity() {
  const navigation = useNavigation();

  const { citiesSearched } = useSelector(
    (state: AplicationState) => state.citiesSearched,
  );

  useEffect(() => {
    navigation.setOptions({
      title: 'Adicionar cidades',
    });
  }, [navigation]);

  return (
    <S.Container>
      <SearchBar />
      {citiesSearched.length > 0 && <FlatListCards />}
    </S.Container>
  );
}
