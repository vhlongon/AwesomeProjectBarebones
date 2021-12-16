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
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import styled from 'styled-components/native';
import ColorBox from './components/ColorBox';
import { Color } from './types';

const Container = styled(View)`
  margin: 10px;
`;

const Title = styled(Text)`
  color: black;
  font-weight: bold;
  margin-bottom: 10px;
`;

const App = () => {
  const colors = Object.values(Color).map(color => color);
  const numColumns = 1;
  return (
    <SafeAreaView>
      <Container>
        <Title>Here are some boxes of different colors</Title>
        <FlatList
          key={`flatlist-col-${numColumns}`}
          numColumns={numColumns}
          data={colors}
          keyExtractor={item => item}
          renderItem={({ item }) => <ColorBox color={item} />}
        />
      </Container>
    </SafeAreaView>
  );
};

export default App;
