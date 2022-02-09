import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

import { Flatlist } from '../../components/Flatlist';

import * as S from './styles';

const citiesSelected = [];

export function Home() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Cidades',
    });
  }, [navigation]);

  return (
    <S.Container>
      {citiesSelected.length >= 0 ? (
        <Flatlist />
      ) : (
        <S.ContainerInfo>
          <S.TextTitle>
            Poxa, que pena. Parece que você ainda não selecionou nenhuma cidade
          </S.TextTitle>

          <S.SubText>
            Tente inserir uma cidade clicando no ícone de adicionar
          </S.SubText>
        </S.ContainerInfo>
      )}
    </S.Container>
  );
}
