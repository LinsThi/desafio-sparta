import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

import { Flatlist } from '../../components/Flatlist';

import * as S from './styles';

export function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Cidades',
    });
  }, [navigation]);

  return (
    <S.Container>
      <Flatlist />
    </S.Container>
  );
}
