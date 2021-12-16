/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';

import styled from 'styled-components/native';

enum Color {
  'Cyan' = '#2aa198',
  'Blue' = '#268bd2',
  'Magenta' = '#d33682',
  'Orange' = '#cb4b16',
}

const Container = styled(View)`
  margin: 10px;
`;

const Title = styled(Text)`
  font-weight: bold;
`;

const Item = styled(View)<{color: Color}>`
  background: ${({color}) => color};
  width: 100%;
  padding-vertical: 10px;
  margin-vertical: 5px;
  border-radius: 2.5px;
`;

const ItemText = styled(Text)`
  color: white;
  justify-content: center;
  text-align: center;
  font-weight: bold;
`;

const App = () => {
  return (
    <SafeAreaView>
      <Container>
        <Title>Here are some boxes of different colors</Title>
        <Item color={Color.Cyan}>
          <ItemText>Cyan - {Color.Cyan}</ItemText>
        </Item>
        <Item color={Color.Blue}>
          <ItemText>Blue - {Color.Blue}</ItemText>
        </Item>
        <Item color={Color.Magenta}>
          <ItemText>Magenta - {Color.Magenta}</ItemText>
        </Item>
        <Item color={Color.Orange}>
          <ItemText>Orange - {Color.Orange}</ItemText>
        </Item>
      </Container>
    </SafeAreaView>
  );
};

export default App;
