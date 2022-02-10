import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { AplicationState } from '~/shared/@types/Entity/AplicationState';
import { WEATHER } from '~/shared/constants/request';
import type ResponseGeneratorDTO from '~/shared/dtos/ResponseGenerato';
import type { SelectedCityDTO } from '~/shared/dtos/SelectedCity';
import { getTemperature } from '~/shared/services/getTemperature';
import { citySelectInsertAction } from '~/shared/store/ducks/citiesSelected/action';

import { arrayUF } from './utils/arrayUF';

import * as S from './styles';

export function FlatListCards() {
  const dispatch = useDispatch();

  const { citiesSearched } = useSelector(
    (state: AplicationState) => state.citiesSearched,
  );

  const { citiesSelected } = useSelector(
    (state: AplicationState) => state.citiesSelected,
  );

  const handleSelectCity = useCallback(
    async (item: SelectedCityDTO, cityNameFormated: string) => {
      const response: ResponseGeneratorDTO = await getTemperature(
        WEATHER,
        item.lat,
        item.lon,
        'metric',
        'pt',
      );

      const { data } = response;

      const cityChosen: SelectedCityDTO = {
        display_name: cityNameFormated,
        lat: item.lat,
        lon: item.lon,
        temperature: `${parseInt(data.main.temp, 10)}°`,
        temperatureMaxMin: `${parseInt(data.main.temp_min, 10)}°-${parseInt(
          data.main.temp_max,
          10,
        )}°`,
        weather: data.weather[0].description,
        isFavorite: false,
      };

      const arrayCities = [...citiesSelected, cityChosen];

      dispatch(citySelectInsertAction(arrayCities));
    },
    [citiesSelected, dispatch],
  );

  const renderItem = useCallback(
    ({ item }: any) => {
      const addressSplited = item.display_name.split(',');
      const country = arrayUF.find(currentUF =>
        item.display_name.includes(currentUF),
      );

      return (
        <S.ContainerItem>
          <S.ContainerCard>
            <S.TextCity fontSize={26}>
              {addressSplited[0]} - {country}
            </S.TextCity>
            <S.TextCountry fontSize={22}>Brasil</S.TextCountry>

            <S.Button
              onPress={() =>
                handleSelectCity(item, `${addressSplited[0]} - ${country}`)
              }
            >
              <S.TextButton>ADICIONAR</S.TextButton>
            </S.Button>
          </S.ContainerCard>
        </S.ContainerItem>
      );
    },
    [handleSelectCity],
  );

  return (
    <S.FlatList
      data={citiesSearched}
      extraData={citiesSearched}
      keyExtractor={(_, index) => index.toString()}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
    />
  );
}
