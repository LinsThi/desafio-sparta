import React from 'react';

import * as S from './styles';

export function CardCity() {
  return (
    <S.Container>
      <S.ContainerCard>
        <S.TextCity fontSize={26}>São Paulo</S.TextCity>
        <S.TextCountry fontSize={22}>Brasil</S.TextCountry>

        <S.Button>
          <S.TextButton>ADICIONAR</S.TextButton>
        </S.Button>
      </S.ContainerCard>
    </S.Container>
  );
}
