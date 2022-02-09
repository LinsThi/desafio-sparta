import { useNavigation } from '@react-navigation/native';
import React from 'react';

import * as S from './styles';

interface HeaderProps {
  options: any;
  enableNavigation?: boolean;
}

export function Header({ options, enableNavigation }: HeaderProps) {
  const navigation = useNavigation();

  return (
    <S.Container>
      {enableNavigation && (
        <S.ContainerBack>
          <S.Button onPress={() => navigation.goBack()}>
            <S.IconButton name="arrow-back-ios" iconType="material" />
          </S.Button>
        </S.ContainerBack>
      )}
      <S.TitlePage> {options.title} </S.TitlePage>
    </S.Container>
  );
}
