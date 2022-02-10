import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';

import favorite from '~/shared/assets/favorite.json';

import { Cards } from '../Cards';

import * as S from './styles';

interface FlatListProps {
  arrayCities: [];
}

export function Flatlist({ arrayCities }: FlatListProps) {
  const navigation = useNavigation();
  const animation = useRef({} as any);
  const [favoriteCity, setFavoriteCity] = useState(false);

  const renderItem = useCallback((item: any) => {
    // useEffect(() => {
    //   if (!favoriteCity) {
    //     animation.current.play(60, 75);
    //   } else {
    //     animation.current.play(0, 40);
    //   }
    // }, [favoriteCity]);

    return (
      <S.Button onPress={() => navigation.navigate(CITY_WEATHER)}>
        <S.ContainerItem>
          <S.ContainerCity>
            <S.City fontSize={24}>{item.item.display_name}</S.City>
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
        </S.ContainerItem>
      </S.Button>
    );
  }, []);

  return (
    <S.Container>
      <S.FlatList
        data={arrayCities}
        extraData={arrayCities}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </S.Container>
  );
}
