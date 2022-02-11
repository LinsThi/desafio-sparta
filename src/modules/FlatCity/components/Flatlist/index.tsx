import { useNavigation } from '@react-navigation/native';
import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { CITY_WEATHER } from '~/shared/constants/routes';
import type { SelectedCityDTO } from '~/shared/dtos/SelectedCity';
import { citySelectInsertAction } from '~/shared/store/ducks/citiesSelected/action';

import { IconLottie } from '../IconLottie';
import { removeCitySelected } from './utils';

import * as S from './styles';

interface FlatListProps {
  arrayCities: SelectedCityDTO[];
}

export function Flatlist({ arrayCities }: FlatListProps) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleRemoveCitySelected = useCallback(
    (item: SelectedCityDTO) => {
      const newArrayCities = removeCitySelected(arrayCities, item);

      dispatch(citySelectInsertAction(newArrayCities));
    },
    [arrayCities, dispatch],
  );

  const renderItem = useCallback(
    ({ item }: any) => {
      return (
        <S.ContainerItem>
          <S.ContainerCity>
            <S.ButtonContainer
              onPress={() =>
                navigation.navigate(CITY_WEATHER, {
                  citySelected: {
                    lat: item.lat,
                    lon: item.lon,
                    nameCity: item.display_name,
                  },
                })
              }
            >
              <S.City>{item.display_name}</S.City>
              <S.Country>Brasil</S.Country>
              <S.Weather>{item.weather}</S.Weather>
              <S.TemperaturePredicted>
                {item.temperatureMaxMin}
              </S.TemperaturePredicted>
            </S.ButtonContainer>
          </S.ContainerCity>

          <S.ContainerInfo>
            <S.Temperature>{item.temperature}</S.Temperature>

            <IconLottie
              favoriteIcon={item.isFavorite}
              cityIdentificator={item.display_name}
            />

            <S.Button onPress={() => handleRemoveCitySelected(item)}>
              <S.IconDelete name="trash-o" iconType="font" />
            </S.Button>
          </S.ContainerInfo>
        </S.ContainerItem>
      );
    },
    [navigation, handleRemoveCitySelected],
  );

  return (
    <S.Container>
      <S.FlatList
        data={arrayCities}
        extraData={arrayCities}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </S.Container>
  );
}
