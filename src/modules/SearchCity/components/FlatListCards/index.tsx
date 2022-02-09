import React from 'react';

import { CardCity } from '../CardCity';
import { arrayCities } from './mock';

import * as S from './styles';

export function FlatListCards() {
  return (
    <S.FlatList
      data={arrayCities}
      extraData={arrayCities}
      keyExtractor={(_, index) => index.toString()}
      renderItem={CardCity}
      showsVerticalScrollIndicator={false}
    />
  );
}
