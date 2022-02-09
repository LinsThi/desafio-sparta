import styled from 'styled-components/native';

import Icon from '../Icon';
import { NewText } from '../Text';

interface IconProps {
  name: string;
  iconType: string;
}

export const Container = styled.View`
  width: 100%;
  background: #5091ab;
  padding: 15px 0px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ContainerBack = styled.View`
  position: absolute;
  left: 20px;
`;

export const Button = styled.TouchableOpacity``;

export const TitlePage = styled(NewText).attrs(() => ({
  fontSize: 30,
  fontColor: '#fff',
}))`
  text-align: center;
`;

export const IconButton = styled(Icon).attrs<IconProps>(
  ({ name, iconType }) => ({
    name,
    type: iconType,
    color: '#fff',
    size: 30,
  }),
)<IconProps>``;
