import React from 'react';

import { Cards } from '../Cards';

import * as S from './styles';

const array = [0, 1, 2, 3, 4, 5, 6];

export function Flatlist() {
  return (
    <S.Container>
      <S.FlatList
        data={array}
        extraData={array}
        keyExtractor={(_, index) => index.toString()}
        renderItem={() => <Cards />}
      />
    </S.Container>
  );
}
