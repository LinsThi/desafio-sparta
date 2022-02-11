import LottieView from 'lottie-react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { AplicationState } from '~/shared/@types/Entity/AplicationState';
import checkIcon from '~/shared/assets/check.json';
import { WEATHER } from '~/shared/constants/request';
import type ResponseGeneratorDTO from '~/shared/dtos/ResponseGenerato';
import type { SelectedCityDTO } from '~/shared/dtos/SelectedCity';
import { getTemperature } from '~/shared/services/getTemperature';
import { citySelectInsertAction } from '~/shared/store/ducks/citiesSelected/action';

import * as S from './styles';

interface CheckLottieProps {
  addedIcon: boolean;
  item: SelectedCityDTO;
  cityName: string;
}

export function CheckLottie({ addedIcon, item, cityName }: CheckLottieProps) {
  const dispatch = useDispatch();
  const { citiesSelected } = useSelector(
    (state: AplicationState) => state.citiesSelected,
  );
  const animation = useRef({} as any);
  const [addedCity, setAddedCity] = useState(addedIcon);

  const handleSelectCity = useCallback(async () => {
    const response: ResponseGeneratorDTO = await getTemperature(
      WEATHER,
      item.lat,
      item.lon,
      'metric',
      'pt',
    );

    setAddedCity(!addedCity);
    const { data } = response;

    const cityChosen: SelectedCityDTO = {
      display_name: cityName,
      lat: item.lat,
      lon: item.lon,
      temperature: `${parseInt(data.main.temp, 10)}°`,
      temperatureMaxMin: `${parseInt(data.main.temp_min, 10)}° / ${parseInt(
        data.main.temp_max,
        10,
      )}°`,
      weather: data.weather[0].description,
      isFavorite: false,
    };

    const arrayCities = [...citiesSelected, cityChosen];

    dispatch(citySelectInsertAction(arrayCities));
  }, [cityName, item.lat, item.lon, citiesSelected, dispatch, addedCity]);

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
