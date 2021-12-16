import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Color, RootStackParamList } from '../types';
import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';

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
  navigation: NativeStackScreenProps<RootStackParamList, 'Home'>['navigation'];
  colors: Color[];
  colorName: string;
}

const NavigationItem = ({ navigation, colors, colorName }: Props) => {
  const firstFive = colors?.slice(0, 5);

  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ColorPalette', {
            name: colorName,
            colors,
          });
        }}>
        <Title>{colorName}</Title>
        <FlatList
          key={`samples-${colorName}`}
          data={firstFive}
          horizontal
          keyExtractor={item => item.name}
          renderItem={({ item }) => <ColorBox color={item} />}
        />
      </TouchableOpacity>
    </Container>
  );
};

export default NavigationItem;
