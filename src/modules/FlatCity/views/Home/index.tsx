import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import type { AplicationState } from '~/shared/@types/Entity/AplicationState';

import { Flatlist } from '../../components/Flatlist';

import * as S from './styles';

export function Home() {
  const { citiesSelected } = useSelector(
    (state: AplicationState) => state.citiesSelected,
  );
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: 'Cidades',
    });
  }, [navigation]);

  return (
    <S.Container>
      {citiesSelected.length > 0 ? (
        <Flatlist arrayCities={citiesSelected} />
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
