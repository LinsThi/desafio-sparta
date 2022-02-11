import styled from 'styled-components/native';

import { NewText } from '~/shared/components/Text';

interface TextProps {
  fontColor: string;
}

export const Button = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;

export const TextCheck = styled(NewText).attrs<TextProps>(({ fontColor }) => ({
  fontSize: 23,
  fontColor,
}))``;
