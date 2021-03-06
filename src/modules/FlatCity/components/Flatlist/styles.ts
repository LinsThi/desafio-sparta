import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';

import Icon from '~/shared/components/Icon';
import { NewText } from '~/shared/components/Text';

interface FavoriteCard {
  favorite: boolean;
}

interface IconProps {
  name: string;
  iconType: string;
}

export const Container = styled.View``;

export const FlatList = styled.FlatList`
  padding: 10px 15px;
`;

export const ContainerItem = styled(Animatable.View).attrs({
  animation: 'fadeInLeftBig',
})<FavoriteCard>`
  justify-content: space-between;
  align-items: center;

  background: ${({ favorite }) =>
    favorite ? `rgba(255, 255, 255, 1)` : `rgba(255, 255, 255, 0.3)`};
  flex-direction: row;

  padding: 5px 20px;
  margin-bottom: 15px;
  border-radius: 10px;
`;

export const ContainerCity = styled.View`
  max-width: 300px;
`;

export const ContainerInfo = styled.View`
  align-items: center;
`;

export const City = styled(NewText).attrs({ fontSize: 22 })`
  font-weight: bold;
`;

export const Country = styled(NewText).attrs({ fontSize: 21 })`
  margin-bottom: 5px;
`;

export const Weather = styled(NewText).attrs({
  fontColor: '#EEA22D',
})`
  text-transform: capitalize;
`;

export const TemperaturePredicted = styled(NewText).attrs({
  fontColor: '#ff8c00',
})``;

export const Temperature = styled(NewText).attrs({
  fontSize: 30,
  fontColor: '#EEA22D',
})``;

export const ButtonContainer = styled.TouchableOpacity`
  width: 90%;
`;

export const Button = styled.TouchableOpacity``;

export const IconDelete = styled(Icon).attrs<IconProps>(
  ({ name, iconType }) => ({
    name,
    type: iconType,
    color: '#cf0e0e',
    size: 30,
  }),
)<IconProps>``;
