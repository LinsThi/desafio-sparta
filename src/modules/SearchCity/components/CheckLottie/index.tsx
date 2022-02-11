import LottieView from 'lottie-react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { AplicationState } from '~/shared/@types/Entity/AplicationState';
import checkIcon from '~/shared/assets/check.json';
import { WEATHER } from '~/shared/constants/request';
import type { SelectedCityDTO } from '~/shared/dtos/SelectedCity';
import { getTemperature } from '~/shared/services/getTemperature';
import { citySelectInsertAction } from '~/shared/store/ducks/citiesSelected/action';
import { verifyUnits } from '~/shared/utils';

import * as S from './styles';

interface CheckLottieProps {
  addedIcon: boolean;
  item: SelectedCityDTO;
  cityName: string;
}

export function CheckLottie({ addedIcon, item, cityName }: CheckLottieProps) {
  const dispatch = useDispatch();
  const { citiesSelected, units } = useSelector(
    (state: AplicationState) => state.citiesSelected,
  );
  const animation = useRef({} as any);
  const [addedCity, setAddedCity] = useState(addedIcon);
  const [unityChosen, setUnityChosen] = useState('');

  useEffect(() => {
    const unity = verifyUnits(units);
    setUnityChosen(unity);
  }, [units]);

  const handleSelectCity = useCallback(async () => {
    const response = await getTemperature(
      WEATHER,
      item.lat,
      item.lon,
      units,
      'pt',
    );

    setAddedCity(!addedCity);
    const { data } = response;

    const cityChosen: SelectedCityDTO = {
      display_name: cityName,
      lat: item.lat,
      lon: item.lon,
      temperature: `${Math.floor(data.main.temp)}°${unityChosen}`,
      temperatureMaxMin: `${Math.floor(
        data.main.temp_min,
      )}°${unityChosen} / ${Math.floor(data.main.temp_max)}°${unityChosen}`,
      weather: data.weather[0].description,
      isFavorite: false,
    };

    const arrayCities = [...citiesSelected, cityChosen];

    dispatch(citySelectInsertAction(arrayCities));
  }, [
    unityChosen,
    units,
    cityName,
    item.lat,
    item.lon,
    citiesSelected,
    dispatch,
    addedCity,
  ]);

  useEffect(() => {
    setAddedCity(addedIcon);
  }, [addedIcon]);

  useEffect(() => {
    if (addedCity) {
      animation.current.play(41, 130);
    } else {
      animation.current.play(0, 40);
    }
  }, [addedCity]);

  return (
    <S.Button onPress={handleSelectCity} disabled={addedCity}>
      <LottieView
        source={checkIcon}
        autoPlay
        loop={false}
        style={{ width: 60, height: 60 }}
        ref={animation}
      />

      <S.TextCheck fontColor={addedCity ? '#38c172' : '#3490dc'}>
        {addedCity ? 'Adicionada' : 'Adicionar'}
      </S.TextCheck>
    </S.Button>
  );
}
