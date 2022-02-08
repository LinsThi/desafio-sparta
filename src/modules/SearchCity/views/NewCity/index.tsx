import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

import { FlatListCards } from '../../components/FlatListCards';
import { SearchBar } from '../../components/SearchBar';

import * as S from './styles';

export function NewCity() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Adicionar cidades',
    });
  }, [navigation]);

  return (
    <S.Container>
      <SearchBar />
      <FlatListCards />
    </S.Container>
  );
}
