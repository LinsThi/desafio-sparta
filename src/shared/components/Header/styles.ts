import styled from 'styled-components/native';

import { NewText } from '../Text';

export const Container = styled.View`
  width: 100%;
  background: #5091ab;
  padding: 5px 0px;
`;

export const TitlePage = styled(NewText).attrs(() => ({
  fontSize: 30,
  fontColor: '#fff',
}))`
  text-align: center;
`;
