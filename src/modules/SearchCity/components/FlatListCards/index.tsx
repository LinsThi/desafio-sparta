import React from 'react';

import { useCities } from '~/shared/hooks/useCities';

import { CardCity } from '../CardCity';

import * as S from './styles';

export function FlatListCards() {
  const { citiesSearched } = useCities();

  return (
    <S.FlatList
      data={citiesSearched}
      extraData={citiesSearched}
      keyExtractor={(_, index) => index.toString()}
      renderItem={CardCity}
      showsVerticalScrollIndicator={false}
    />
  );
}
