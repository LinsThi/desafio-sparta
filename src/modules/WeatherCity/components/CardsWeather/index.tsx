import { format, isToday, isTomorrow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import React, { useEffect, useState } from 'react';

import { URL_GET_ICON, GET_ICON_CONFIG } from '~/shared/constants/request';

import * as S from './styles';

interface CardsWeatherProps {
  day: number;
  weather: string;
  weatherIcon: string;
  temperaturePredicted: string;
  temperature: string;
}

export function CardsWeather({
  day,
  weather,
  weatherIcon,
  temperaturePredicted,
  temperature,
}: CardsWeatherProps) {
  const data = format(new Date(day * 1000), 'dd/LL');
  const [dayWeek, setDayWeek] = useState('');

  useEffect(() => {
    if (isToday(new Date(day * 1000))) {
      setDayWeek('Hoje');
    } else if (isTomorrow(new Date(day * 1000))) {
      setDayWeek('Amanhã');
    } else {
      setDayWeek(format(new Date(day * 1000), 'EEEE', { locale: ptBR }));
    }
  }, [day]);

  return (
    <S.Container>
      <S.ContainerInfo>
        <S.DayWeek>{dayWeek}</S.DayWeek>
        <S.Date>{data}</S.Date>

        <S.ContainerWeather>
          <S.Weather>{weather}</S.Weather>
          <S.ImageWeather
            source={{
              uri: `${URL_GET_ICON}/${weatherIcon}${GET_ICON_CONFIG}`,
            }}
          />
        </S.ContainerWeather>

        <S.TemperaturePredicted>{temperaturePredicted}</S.TemperaturePredicted>
      </S.ContainerInfo>

      <S.Temperature>{temperature}</S.Temperature>
    </S.Container>
  );
}
