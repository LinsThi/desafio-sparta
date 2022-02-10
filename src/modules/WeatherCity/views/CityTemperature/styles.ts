import { ActivityIndicator } from 'react-native';
import styled from 'styled-components/native';

import { NewText } from '~/shared/components/Text';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  background: #87ceeb;
`;

export const ContainerInfo = styled.ScrollView`
  width: 90%;
`;

export const TextInfo = styled(NewText).attrs({})`
  font-weight: bold;
  text-align: center;
  margin: 10px 0px;
`;

export const LoadingCards = styled(ActivityIndicator).attrs({
  size: 'large',
  color: '#000',
})``;
