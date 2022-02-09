import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useEffect, useRef, useState } from 'react';

import favorite from '~/shared/assets/favorite.json';
import { NewText } from '~/shared/components/Text';
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
          <NewText fontSize={24}>Fortaleza</NewText>
          <NewText fontSize={22}>Brasil</NewText>
          <NewText fontColor="#EEA22D">Chuva</NewText>
          <NewText fontColor="#ff8c00">14°-22°</NewText>
        </S.ContainerCity>

        <S.ContainerInfo>
          <NewText fontSize={30} fontColor="#EEA22D">
            12°
          </NewText>
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
