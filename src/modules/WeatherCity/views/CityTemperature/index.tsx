import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';

import { CardsWeather } from '../../components/CardsWeather';

import * as S from './styles';

export function CityTemperature() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: `Fortaleza`,
    });
  }, [navigation]);

  return (
    <S.Container>
      <S.TextInfo>Previsão para os próximos 5 dias</S.TextInfo>

      <S.ContainerInfo showsVerticalScrollIndicator={false}>
        <CardsWeather />
        <CardsWeather />
        <CardsWeather />
        <CardsWeather />
        <CardsWeather />
      </S.ContainerInfo>
    </S.Container>
  );
}
