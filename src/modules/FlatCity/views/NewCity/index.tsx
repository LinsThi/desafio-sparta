import React from 'react';

import { NewText } from '~/shared/components/Text';

import * as S from './styles';

export function NewCity() {
  return (
    <S.Container>
      <NewText>Adicionar novas cidades</NewText>
    </S.Container>
  );
}
