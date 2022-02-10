import React, { useCallback } from 'react';

import type { SelectedCityDTO } from '~/shared/dtos/SelectedCity';

import { IconLottie } from '../IconLottie';

import * as S from './styles';

interface FlatListProps {
  arrayCities: SelectedCityDTO[];
}

export function Flatlist({ arrayCities }: FlatListProps) {
  const renderItem = useCallback(({ item }: any) => {
    return (
      <S.Button>
        <S.ContainerItem>
          <S.ContainerCity>
            <S.City>{item.display_name}</S.City>
            <S.Country>Brasil</S.Country>
            <S.Weather>{item.weather}</S.Weather>
            <S.TemperaturePredicted>
              {item.temperatureMaxMin}
            </S.TemperaturePredicted>
          </S.ContainerCity>

          <S.ContainerInfo>
            <S.Temperature>{item.temperature}</S.Temperature>

            <S.Button>
              <IconLottie
                favoriteIcon={item.isFavorite}
                cityIdentificator={item.display_name}
              />
            </S.Button>
          </S.ContainerInfo>
        </S.ContainerItem>
      </S.Button>
    );
  }, []);

  return (
    <S.Container>
      <S.FlatList
        data={arrayCities}
        extraData={arrayCities}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
    </S.Container>
  );
}
