import React from 'react';

import { NewText } from '~/shared/components/Text';

import * as S from './styles';

export function CardCity() {
  return (
    <S.Container>
      <S.ContainerCard>
        <NewText fontSize={26}>São Paulo</NewText>
        <NewText fontSize={22}>Brasil</NewText>

        <S.Button>
          <S.TextButton>ADICIONAR</S.TextButton>
        </S.Button>
      </S.ContainerCard>
    </S.Container>
  );
}
