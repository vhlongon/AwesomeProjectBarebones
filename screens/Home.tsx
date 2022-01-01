import React from 'react';
import { MainStackParamList, Palette, RootStackParamList } from '../types';
import PalettePreview from '../components/PalettePreview';
import BaseScreen from './BaseScreen';
import { Button, FlatList, Text, View } from 'react-native';
import { useGetPalettes } from '../hooks/useGetPalettes';
import * as Animatable from 'react-native-animatable';
import styled from 'styled-components/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { CompositeScreenProps } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';

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

const Home = ({ navigation }: Props) => {
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

  return (
    <BaseScreen>
      <Button
        title="Go to Tab navigation"
        onPress={() => navigation.navigate('Modal')}
      />
      <FlatList
        key={'colors-previews'}
        data={data}
        keyExtractor={item => `item-${item.id}`}
        renderItem={({ item }) => (
          <PalettePreview onPress={handlePress(item)} palette={item} />
        )}
        refreshing={isLoading}
        onRefresh={() => refetch()}
      />
      <Button
        title="Go to Tab navigation"
        onPress={() => navigation.navigate('TabNavigation')}
      />
    </BaseScreen>
  );
};

export default Home;
