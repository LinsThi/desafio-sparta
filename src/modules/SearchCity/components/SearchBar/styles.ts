import styled from 'styled-components/native';

import Icon from '~/shared/components/Icon';

interface IconProps {
  name: string;
  iconType: string;
}

export const Container = styled.View`
  width: 100%;
  background: #5091ab;
  flex-direction: row;
  padding: 5px 10px;
  margin: 10px 0px;
  border-radius: 10px;
`;

export const InputSearch = styled.TextInput`
  flex: 1;
  padding-left: 5px;
  color: #fff;
`;

export const Button = styled(Icon).attrs<IconProps>(({ name, iconType }) => ({
  name,
  type: iconType,
  color: '#fff',
  size: 30,
}))<IconProps>``;
