import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

import { useCities } from '~/shared/hooks/useCities';

import { FlatListCards } from '../../components/FlatListCards';
import { SearchBar } from '../../components/SearchBar';

import * as S from './styles';

export function NewCity() {
  const navigation = useNavigation();
  const { citiesSearched } = useCities();

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
