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
import ColorBox from './components/ColorBox';

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
  color: black;
  font-weight: bold;
  margin-bottom: 10px;
`;

const App = () => {
  console.warn(Color.Cyan);
  return (
    <SafeAreaView>
      <Container>
        <Title>Here are some boxes of different colors</Title>
        <ColorBox color={Color.Cyan} />
        <ColorBox color={Color.Blue} />
        <ColorBox color={Color.Magenta} />
        <ColorBox color={Color.Orange} />
      </Container>
    </SafeAreaView>
  );
};

export default App;
