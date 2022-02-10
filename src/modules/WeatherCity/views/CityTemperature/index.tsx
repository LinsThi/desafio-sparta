import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';

import { ONE_CALL } from '~/shared/constants/request';
import type { WeatherForecast } from '~/shared/dtos/WeatherForecast';
import { getTemperature } from '~/shared/services/getTemperature';

import { CardsWeather } from '../../components/CardsWeather';

import * as S from './styles';

export function CityTemperature() {
  const navigation = useNavigation();
  const route = useRoute();

  const [infoWeather, setInfoWeather] = useState<WeatherForecast[]>([]);
  const [loading, setLoading] = useState(true);

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
        'metric',
        'pt',
      );
      const dataCity = response?.data;
      setInfoWeather(dataCity.daily);
      setLoading(false);
    }

    requestTemperature();
  }, [citySelected.lat, citySelected.lon]);

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
              )}° / ${Math.floor(current.temp.max)}°`}
              temperature={`${Math.floor(current.temp.day)}°`}
            />
          ))
        )}
      </S.ContainerInfo>
    </S.Container>
  );
}
