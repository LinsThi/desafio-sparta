import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useEffect, useRef, useState } from 'react';

import favorite from '~/shared/assets/favorite.json';
import { CITY_WEATHER } from '~/shared/constants/routes';

import * as S from './styles';

export function Cards() {
  const navigation = useNavigation();
  const animation = useRef({} as any);
  const [favoriteCity, setFavoriteCity] = useState(false);

  useEffect(() => {
    if (!favoriteCity) {
      animation.current.play(60, 75);
    } else {
      animation.current.play(0, 40);
    }
  }, [favoriteCity]);

  return (
    <S.Button onPress={() => navigation.navigate(CITY_WEATHER)}>
      <S.Container>
        <S.ContainerCity>
          <S.City fontSize={24}>Fortaleza</S.City>
          <S.Country fontSize={22}>Brasil</S.Country>
          <S.Weather fontColor="#EEA22D">Chuva</S.Weather>
          <S.TemperaturePredicted fontColor="#ff8c00">
            14°-22°
          </S.TemperaturePredicted>
        </S.ContainerCity>

        <S.ContainerInfo>
          <S.Temperature fontSize={30} fontColor="#EEA22D">
            12°
          </S.Temperature>

          <S.Button onPress={() => setFavoriteCity(!favoriteCity)}>
            <LottieView
              source={favorite}
              autoPlay
              loop={false}
              style={{ width: 60, height: 60 }}
              ref={animation}
            />
          </S.Button>
        </S.ContainerInfo>
      </S.Container>
    </S.Button>
  );
}
