import React from 'react';

import { arrayUF } from './utils/arrayUF';

import * as S from './styles';

export function CardCity({ item }: any) {
  const addressSplited = item.display_name.split(',');
  const country = arrayUF.find(currentUF =>
    item.display_name.includes(currentUF),
  );

  return (
    <S.Container>
      <S.ContainerCard>
        <S.TextCity fontSize={26}>
          {addressSplited[0]} - {country}
        </S.TextCity>
        <S.TextCountry fontSize={22}>Brasil</S.TextCountry>

        <S.Button>
          <S.TextButton>ADICIONAR</S.TextButton>
        </S.Button>
      </S.ContainerCard>
    </S.Container>
  );
}
