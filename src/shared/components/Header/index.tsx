import React from 'react';

import * as S from './styles';

interface HeaderProps {
  options: any;
}

export function Header({ options }: HeaderProps) {
  return (
    <S.Container>
      <S.TitlePage> {options.title} </S.TitlePage>
    </S.Container>
  );
}
