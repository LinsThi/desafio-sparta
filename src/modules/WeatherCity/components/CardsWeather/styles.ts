import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';

import { NewText } from '~/shared/components/Text';

export const Container = styled(Animatable.View).attrs({
  animation: 'fadeInUpBig',
})`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 5px 10px;
  border: 1px #fff;
  border-radius: 10px;
  margin-bottom: 20px;
  background: #fff;
`;

export const ContainerInfo = styled.View``;

export const ContainerWeather = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ImageWeather = styled.Image`
  width: 40px;
  height: 40px;
`;

export const DayWeek = styled(NewText).attrs({ fontSize: 30 })`
  font-weight: bold;
`;

export const Date = styled(NewText).attrs({ fontSize: 20 })`
  padding-bottom: 5px;
`;

export const Weather = styled(NewText).attrs({
  fontColor: '#EEA22D',
  fontSize: 20,
})``;

export const TemperaturePredicted = styled(NewText).attrs({
  fontSize: 20,
})``;

export const Temperature = styled(NewText).attrs({
  fontSize: 40,
  fontColor: '#ff8c00',
})``;
