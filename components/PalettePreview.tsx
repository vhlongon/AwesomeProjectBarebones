import React, { PropsWithChildren } from 'react';
import { View, Text, TouchableOpacity, FlatListProps } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Color, Palette } from '../types';
import { boxShadow } from './styles';

const Container = styled(View)`
  margin-horizontal: 10px;
`;

const Title = styled(Text)`
  color: black;
  font-weight: bold;
  margin-bottom: 5px;
`;
type ColorsListProps = PropsWithChildren<FlatListProps<Color>>;

const List = styled(FlatList)<ColorsListProps>`
  padding-vertical: 5px;
  margin-bottom: 10px;
  flex-direction: row;
`;

const ColorSwatch = styled.View<{ color: Color }>`
  width: 50px;
  height: 50px;
  background-color: ${({ color }) => color.value};
  margin-right: 10px;
  margin-bottom: 10px;
  border-radius: 2.5px;
  ${boxShadow(4)};
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
        <List
          horizontal
          key={`samples-${palette.name}`}
          data={firstFive}
          keyExtractor={item => item.name}
          renderItem={({ item }) => <ColorSwatch color={item} />}
        />
      </TouchableOpacity>
    </Container>
  );
};

export default PalettePreview;
