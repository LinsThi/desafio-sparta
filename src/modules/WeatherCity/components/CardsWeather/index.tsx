import React from 'react';

import * as S from './styles';

export function CardsWeather() {
  return (
    <S.Container>
      <S.ContainerInfo>
        <S.DayWeek>Hoje</S.DayWeek>
        <S.Date>08/02</S.Date>

        <S.ContainerWeather>
          <S.Weather>Chuva</S.Weather>
          <S.ImageWeather
            source={{ uri: 'http://openweathermap.org/img/wn/10d@2x.png' }}
          />
        </S.ContainerWeather>

        <S.TemperaturePredicted>20°-25°</S.TemperaturePredicted>
      </S.ContainerInfo>

      <S.Temperature>23°</S.Temperature>
    </S.Container>
  );
}
