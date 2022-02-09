import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';

import { NewText } from '~/shared/components/Text';

export const Container = styled(Animatable.View).attrs({
  animation: 'fadeInLeftBig',
})`
  width: 100%;
  justify-content: space-between;
  align-items: center;

  background: #fff;
  flex-direction: row;

  padding: 5px 15px;
  margin-bottom: 15px;
  border-radius: 10px;
`;

export const ContainerCity = styled.View``;

export const ContainerInfo = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Button = styled.TouchableOpacity``;

export const City = styled(NewText).attrs({ fontSize: 24 })`
  font-weight: bold;
`;

export const Country = styled(NewText).attrs({ fontSize: 22 })`
  padding-bottom: 5px;
`;

export const Weather = styled(NewText).attrs({
  fontColor: '#EEA22D',
})``;

export const TemperaturePredicted = styled(NewText).attrs({
  fontColor: '#ff8c00',
})``;

export const Temperature = styled(NewText).attrs({
  fontSize: 30,
  fontColor: '#EEA22D',
})``;
