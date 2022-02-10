import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';

import { NewText } from '~/shared/components/Text';

interface TextProps {
  fontColor: string;
}

export const ContainerItem = styled(Animatable.View).attrs({
  animation: 'fadeInUpBig',
})`
  width: 100%;
  margin: 10px 0px;
  padding: 5px 20px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.8);
`;

export const ContainerCard = styled.View`
  elevation: 20;
`;

export const Button = styled.TouchableOpacity`
  margin-top: 20px;
  margin-left: 10px;
`;

export const TextCity = styled(NewText).attrs({ fontSize: 26 })`
  font-weight: bold;
`;

export const TextCountry = styled(NewText).attrs({ fontSize: 22 })``;

export const TextButton = styled(NewText).attrs<TextProps>(({ fontColor }) => ({
  fontColor,
}))`
  font-weight: bold;
`;

export const FlatList = styled.FlatList``;
