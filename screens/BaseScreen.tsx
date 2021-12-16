import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';

const Container = styled(View)`
  flex: 1;
  background: white;
`;

const BaseScreen: React.FC<{}> = ({ children }) => {
  return <Container>{children}</Container>;
};

export default BaseScreen;
