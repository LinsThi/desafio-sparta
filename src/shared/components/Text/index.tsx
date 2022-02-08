import React from 'react';
import type { TextProps } from 'react-native';

import * as S from './styles';

interface NewTextProps extends TextProps {
  fontSize?: number;
  fontColor?: string;
}

export function NewText({
  fontSize = 18,
  fontColor = '#000',
  children,
  ...rest
}: NewTextProps) {
  return (
    <S.Text {...rest} fontSize={fontSize} fontColor={fontColor}>
      {children}
    </S.Text>
  );
}
