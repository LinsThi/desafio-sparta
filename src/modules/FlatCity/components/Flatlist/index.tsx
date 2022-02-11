import { useNavigation } from '@react-navigation/native';
import React, { useCallback, useEffect } from 'react';
import { Root, Popup } from 'react-native-popup-confirm-toast';
import { useDispatch } from 'react-redux';

import { UNITS_CELCIUS, WEATHER } from '~/shared/constants/request';
import { CITY_WEATHER } from '~/shared/constants/routes';
import type ResponseGeneratorDTO from '~/shared/dtos/ResponseGenerato';
import type { SelectedCityDTO } from '~/shared/dtos/SelectedCity';
import { getTemperature } from '~/shared/services/getTemperature';
import { citySelectInsertAction } from '~/shared/store/ducks/citiesSelected/action';

import { IconLottie } from '../IconLottie';
import { removeCitySelected } from './utils';

import * as S from './styles';

interface FlatListProps {
  arrayCities: SelectedCityDTO[];
  units: string;
}

export function Flatlist({ arrayCities, units }: FlatListProps) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleRemoveCitySelected = useCallback(
    (item: SelectedCityDTO) => {
      const newArrayCities = removeCitySelected(arrayCities, item);

      dispatch(citySelectInsertAction(newArrayCities));
    },
    [arrayCities, dispatch],
  );

  useEffect(() => {
    async function updateTemperatureCity() {
      const arrayCitiesUpdated = await Promise.all(
        arrayCities.map(async currentyCity => {
          const cityUpdated = currentyCity;
          const response: ResponseGeneratorDTO = await getTemperature(
            WEATHER,
            currentyCity.lat,
            currentyCity.lon,
            units,
            'pt',
          );

          const { data } = response;

          cityUpdated.temperature = `${Math.floor(data.main.temp)}°${
            units === UNITS_CELCIUS ? 'C' : 'F'
          }`;
          cityUpdated.temperatureMaxMin = `${Math.floor(data.main.temp_min)}°${
            units === UNITS_CELCIUS ? 'C' : 'F'
          } / ${Math.floor(data.main.temp_max)}°${
            units === UNITS_CELCIUS ? 'C' : 'F'
          }`;

          return cityUpdated;
        }),
      );

      dispatch(citySelectInsertAction(arrayCitiesUpdated));
    }

    if (arrayCities.length > 0) {
      updateTemperatureCity();
    }
  }, [dispatch, units]);

  const renderItem = useCallback(
    ({ item }: any) => {
      return (
        <S.ContainerItem favorite={item.isFavorite}>
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

            {/* <S.Button onPress={() => handleRemoveCitySelected(item)}> */}
            <S.Button
              onPress={() =>
                Popup.show({
                  type: 'confirm',
                  title: 'Deseja apagar cidade?',
                  textBody: `Você realmente confirma, que deseja retirar ${item.display_name} da lista?`,
                  buttonText: 'Confirmar',
                  confirmText: 'Não confirmar',
                  callback: () => handleRemoveCitySelected(item),
                })
              }
            >
              <S.IconDelete name="trash-o" iconType="font" />
            </S.Button>
          </S.ContainerInfo>
        </S.ContainerItem>
      );
    },
    [navigation, handleRemoveCitySelected],
  );

  return (
    <Root>
      <S.Container>
        <S.FlatList
          data={arrayCities}
          extraData={arrayCities}
          keyExtractor={(_, index) => index.toString()}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />
      </S.Container>
    </Root>
  );
}
