import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Color, Palette } from '../types';

const Container = styled(View)`
  margin: 10px;
`;

const Title = styled(Text)`
  color: black;
  font-weight: bold;
  margin-bottom: 10px;
`;

const ColorBox = styled.View<{ color: Color }>`
  width: 50px;
  height: 50px;
  background-color: ${({ color }) => color.value};
  margin-right: 10px;
  border-radius: 2.5px;
`;

interface Props {
  onPress: () => void;
  palette: Palette;
}

const PalettePreview = ({ onPress, palette }: Props) => {
  const firstFive = palette.colors?.slice(0, 5);

  return (
    <Container>
      <TouchableOpacity onPress={onPress}>
        <Title>{palette.name}</Title>
        <FlatList
          key={`samples-${palette.name}`}
          data={firstFive}
          horizontal
          keyExtractor={item => item.name}
          renderItem={({ item }) => <ColorBox color={item} />}
        />
      </TouchableOpacity>
    </Container>
  );
};

export default PalettePreview;
