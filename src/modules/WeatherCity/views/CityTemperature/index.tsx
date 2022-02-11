import type { RouteProp } from '@react-navigation/native';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import type { AplicationState } from '~/shared/@types/Entity/AplicationState';
import { ONE_CALL } from '~/shared/constants/request';
import type { CitySelectedNavigationDTO } from '~/shared/dtos/CityNavigation';
import type { WeatherForecast } from '~/shared/dtos/WeatherForecast';
import { getTemperature } from '~/shared/services/getTemperature';
import { verifyUnits } from '~/shared/utils';

import { CardsWeather } from '../../components/CardsWeather';

import * as S from './styles';

type ParamList = {
  citySelected: CitySelectedNavigationDTO;
};

export function CityTemperature() {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<ParamList, 'citySelected'>>();

  const { units } = useSelector(
    (state: AplicationState) => state.citiesSelected,
  );

  const [infoWeather, setInfoWeather] = useState<WeatherForecast[]>([]);
  const [loading, setLoading] = useState(true);
  const [unityChosen, setUnityChosen] = useState('');

  const { citySelected } = route.params;

  useEffect(() => {
    const city = citySelected.nameCity.split('-');

    navigation.setOptions({
      title: `${city[0]}`,
    });
  }, [navigation, citySelected.nameCity, citySelected.lat, citySelected.lon]);

  useEffect(() => {
    async function requestTemperature() {
      const response = await getTemperature(
        ONE_CALL,
        citySelected.lat,
        citySelected.lon,
        units,
        'pt',
      );

      const dataCity = response?.data;
      setInfoWeather(dataCity.daily.splice(0, 5));
      setLoading(false);
    }

    requestTemperature();
  }, [units, citySelected.lat, citySelected.lon]);

  useEffect(() => {
    const unity = verifyUnits(units);
    setUnityChosen(unity);
  }, [units]);

  return (
    <S.Container>
      <S.TextInfo>Previsão para os próximos 5 dias</S.TextInfo>
      <S.ContainerInfo showsVerticalScrollIndicator={false}>
        {loading ? (
          <S.LoadingCards size="large" color="#000" />
        ) : (
          infoWeather.map(current => (
            <CardsWeather
              key={current.dt}
              day={current.dt}
              weather={current.weather[0].description}
              weatherIcon={current.weather[0].icon}
              temperaturePredicted={`${Math.floor(
                current.temp.min,
              )}°${unityChosen} / ${Math.floor(
                current.temp.max,
              )}°${unityChosen}`}
              temperature={`${Math.floor(current.temp.day)}°${unityChosen}`}
            />
          ))
        )}
      </S.ContainerInfo>
    </S.Container>
  );
}
