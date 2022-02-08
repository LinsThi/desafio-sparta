import React, { useState } from 'react';

import * as S from './styles';

export function SearchBar() {
  const [searchCity, setSearchCity] = useState('');

  return (
    <S.Container>
      <S.Button name="search1" iconType="antDesign" />

      <S.InputSearch
        placeholder="Digite o nome de uma cidade"
        value={searchCity}
        onChangeText={setSearchCity}
        // onSubmitEditing={() => console.log(searchCity)}
        placeholderTextColor="#fff"
      />
    </S.Container>
  );
}
