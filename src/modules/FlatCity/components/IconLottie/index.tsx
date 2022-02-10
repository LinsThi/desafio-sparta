import LottieView from 'lottie-react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { AplicationState } from '~/shared/@types/Entity/AplicationState';
import favorite from '~/shared/assets/favorite.json';
import { citySelectInsertAction } from '~/shared/store/ducks/citiesSelected/action';

import { updateArrayCitiesSelected } from './utils';

import * as S from './styles';

interface IconLottieProps {
  favoriteIcon: boolean;
  cityIdentificator: string;
}

export function IconLottie({
  favoriteIcon,
  cityIdentificator,
}: IconLottieProps) {
  const dispatch = useDispatch();
  const { citiesSelected } = useSelector(
    (state: AplicationState) => state.citiesSelected,
  );
  const animation = useRef({} as any);
  const [favoriteCity, setFavoriteCity] = useState(favoriteIcon);

  const handleChangeFavorite = useCallback(() => {
    const newArrayCity = updateArrayCitiesSelected(
      citiesSelected,
      cityIdentificator,
    );
    setFavoriteCity(!favoriteCity);
    dispatch(citySelectInsertAction(newArrayCity));
  }, [citiesSelected, favoriteCity, cityIdentificator, dispatch]);

  useEffect(() => {
    if (!favoriteCity) {
      animation.current.play(60, 75);
    } else {
      animation.current.play(0, 40);
    }
  }, [favoriteCity]);

  return (
    <S.Button onPress={handleChangeFavorite}>
      <LottieView
        source={favorite}
        autoPlay
        loop={false}
        style={{ width: 60, height: 60 }}
        ref={animation}
      />
    </S.Button>
  );
}
