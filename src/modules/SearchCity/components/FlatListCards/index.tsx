import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { AplicationState } from '~/shared/@types/Entity/AplicationState';
import type { SelectedCityDTO } from '~/shared/dtos/SelectedCity';
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
    (item: SelectedCityDTO, cityNameFormated: string) => {
      const cityChosen: SelectedCityDTO = {
        display_name: cityNameFormated,
        lat: item.lat,
        lon: item.lon,
        isFavorite: false,
      };

      const arrayCities = [...citiesSelected, cityChosen];

      dispatch(citySelectInsertAction(arrayCities));
    },
    [citiesSelected, dispatch],
  );

  const renderItem = useCallback((item: any) => {
    const addressSplited = item.item.display_name.split(',');
    const country = arrayUF.find(currentUF =>
      item.item.display_name.includes(currentUF),
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
              handleSelectCity(item.item, `${addressSplited[0]} - ${country}`)
            }
          >
            <S.TextButton>ADICIONAR</S.TextButton>
          </S.Button>
        </S.ContainerCard>
      </S.ContainerItem>
    );
  }, []);

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
