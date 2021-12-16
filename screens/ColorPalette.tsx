import React from 'react';
import { FlatList, SafeAreaView, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import styled from 'styled-components/native';
import ColorBox from '../components/ColorBox';
import { RootStackParamList } from '../types';
import BaseScreen from './BaseScreen';

const Container = styled(View)`
  margin: 10px;
`;

const Title = styled(Text)`
  color: black;
  font-weight: bold;
  margin-bottom: 10px;
`;

type Props = NativeStackScreenProps<RootStackParamList, 'ColorPalette'>;

const ColorPalette = ({ route }: Props) => {
  const numColumns = 1;
  const { name, colors } = route.params || {};

  return (
    <BaseScreen>
      <SafeAreaView>
        <Container>
          <Title>{name}</Title>
          <FlatList
            key={`flatlist-col-${numColumns}`}
            numColumns={numColumns}
            data={colors}
            keyExtractor={item => item.name}
            renderItem={({ item }) => <ColorBox color={item} />}
          />
        </Container>
      </SafeAreaView>
    </BaseScreen>
  );
};

export default ColorPalette;
