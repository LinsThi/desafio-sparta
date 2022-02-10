import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import type { AplicationState } from '~/shared/@types/Entity/AplicationState';

import { CheckLottie } from '../CheckLottie';
import { VerifyIfAdding } from './utils';
import { arrayUF } from './utils/arrayUF';

import * as S from './styles';

export function FlatListCards() {
  const { citiesSearched } = useSelector(
    (state: AplicationState) => state.citiesSearched,
  );

  const { citiesSelected } = useSelector(
    (state: AplicationState) => state.citiesSelected,
  );

  const renderItem = useCallback(
    ({ item }: any) => {
      const addressSplited = item.display_name.split(',');
      const country = arrayUF.find((currentUF: string) =>
        item.display_name.includes(currentUF),
      );

      const alreadyAdded = VerifyIfAdding(citiesSelected, item.lat, item.lon);
      return (
        <S.ContainerItem>
          <S.ContainerCard>
            <S.TextCity fontSize={26}>
              {addressSplited[0]} - {country}
            </S.TextCity>
            <S.TextCountry fontSize={22}>Brasil</S.TextCountry>

            <CheckLottie
              addedIcon={alreadyAdded}
              item={item}
              cityName={`${addressSplited[0]} - ${country}`}
            />
          </S.ContainerCard>
        </S.ContainerItem>
      );
    },
    [citiesSelected],
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
