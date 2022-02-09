import styled from 'styled-components/native';

import { NewText } from '~/shared/components/Text';

export const Container = styled.View`
  flex: 1;
  background: #87ceeb;
`;

export const ContainerInfo = styled.View``;

export const TextTitle = styled(NewText).attrs({ fontSize: 25 })`
  text-align: center;
  padding-top: 50px;
  padding-left: 20px;
  padding-right: 20px;
`;

export const SubText = styled(NewText).attrs({ fontColor: '#a5a5a5' })`
  text-align: center;
  padding-top: 30px;
  padding-left: 10px;
  padding-right: 10px;
`;
