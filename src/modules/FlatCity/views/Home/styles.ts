import styled from 'styled-components/native';

import { NewText } from '~/shared/components/Text';

export const Container = styled.View`
  flex: 1;
  background: #87ceeb;
`;

export const ContainerInfo = styled.View``;

export const ContainerButton = styled.View`
  width: 60px;
  height: 60px;
  align-items: center;
  justify-content: center;

  background: #5091ab;
  border-radius: 60px;
  position: absolute;
  bottom: 20px;
  right: 20px;
`;

export const TextTitle = styled(NewText).attrs({ fontSize: 25 })`
  text-align: center;
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
  font-weight: bold;
`;

export const SubText = styled(NewText).attrs({})`
  text-align: center;
  padding-top: 30px;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: bold;
`;
