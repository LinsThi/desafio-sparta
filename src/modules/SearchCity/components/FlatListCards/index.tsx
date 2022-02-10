import React from 'react';
import { useSelector } from 'react-redux';

import type { AplicationState } from '~/shared/@types/Entity/AplicationState';

import { CardCity } from '../CardCity';

import * as S from './styles';

export function FlatListCards() {
  const { citiesSearched } = useSelector(
    (state: AplicationState) => state.citiesSearched,
  );

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
