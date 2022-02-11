import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import type { AplicationState } from '~/shared/@types/Entity/AplicationState';
import { UNITS_CELCIUS } from '~/shared/constants/request';
import { toggleUnitsAction } from '~/shared/store/ducks/citiesSelected/action';

import * as S from './styles';

export function ButtonFloat() {
  const { units } = useSelector(
    (state: AplicationState) => state.citiesSelected,
  );

  const dispatch = useDispatch();

  return (
    <S.ButtonFloat onPress={() => dispatch(toggleUnitsAction())}>
      <S.ButtonIcon
        name={
          units === UNITS_CELCIUS
            ? 'temperature-celsius'
            : 'temperature-fahrenheit'
        }
      />
    </S.ButtonFloat>
  );
}
