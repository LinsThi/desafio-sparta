import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';

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
