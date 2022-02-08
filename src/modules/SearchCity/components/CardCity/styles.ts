import styled from 'styled-components/native';

import { NewText } from '~/shared/components/Text';

export const Container = styled.View`
  width: 100%;
  margin: 10px 0px;
  padding: 5px 20px;
  border-radius: 10px;
  background: #fff;
`;

export const ContainerCard = styled.View`
  elevation: 20;
`;

export const FlatList = styled.FlatList``;

export const Button = styled.TouchableOpacity`
  margin-top: 20px;
  margin-left: 10px;
`;

export const TextButton = styled(NewText).attrs({ fontColor: '#4169e1' })`
  font-weight: bold;
`;
