import styled from 'styled-components/native';

import Icon from '~/shared/components/Icon';

interface IconProps {
  name: string;
}

export const ButtonFloat = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;
  border-radius: 60px;
`;

export const ButtonIcon = styled(Icon).attrs<IconProps>(({ name }) => ({
  name,
  color: '#fff',
  size: 30,
}))<IconProps>``;
