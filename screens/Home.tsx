import React from 'react';
import { MainStackParamList, Palette, RootStackParamList } from '../types';
import PalettePreview from '../components/PalettePreview';
import BaseScreen from './BaseScreen';
import { FlatList, Text, View } from 'react-native';
import { useGetPalettes } from '../hooks/useGetPalettes';
import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import SolidButton from '../components/SolidButton';

type Props = CompositeScreenProps<
  StackScreenProps<MainStackParamList, 'Home'>,
  StackScreenProps<RootStackParamList, 'Modal'>
>;

const ErrorText = styled(Text)`
  background-color: red;
  padding: 10px;
  color: white;
`;

const spin = {
  0: {
    transform: [{ rotate: '0deg' }],
  },
  1: {
    transform: [{ rotate: '360deg' }],
  },
};

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const Home = ({ navigation, route }: Props) => {
  const newColorPalette = route.params && {
    colors: route.params.colors,
    name: route.params.name,
    id: route.params.id,
  };

  const handlePress = (palette: Palette) => () => {
    navigation.navigate('ColorPalette', palette);
  };

  const { data, error, isLoading, refetch } = useGetPalettes();

  if (isLoading) {
    return (
      <Container>
        <Text>Loading...</Text>
        <Animatable.View animation={spin} iterationCount="infinite">
          <MaterialCommunityIcons name="loading" size={52} />
        </Animatable.View>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <ErrorText>Error: {error.message}</ErrorText>
      </Container>
    );
  }

  const palettes = data || [];

  return (
    <BaseScreen>
      <SolidButton
        bgColor="orchid"
        title="Add new palette"
        onPress={() => navigation.navigate('Modal')}
      />
      <FlatList
        key={'colors-previews'}
        data={newColorPalette ? [newColorPalette, ...palettes] : palettes}
        keyExtractor={item => `item-${item.id}`}
        renderItem={({ item }) => (
          <PalettePreview onPress={handlePress(item)} palette={item} />
        )}
        refreshing={isLoading}
        onRefresh={() => refetch()}
      />
      <SolidButton
        title="Go to Tab navigation"
        bgColor="orchid"
        onPress={() => navigation.navigate('TabNavigation')}
      />
    </BaseScreen>
  );
};

export default Home;
